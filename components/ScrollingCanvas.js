import React, { useRef, useState, useEffect } from "react";

let frameIndex = 0;
export default function ScrollingCanvas(props) {
  const { images, fallbackIndex, width, height } = props;
  const canvasRef = useRef(null);
  const [canvasContext, setCanvasContext] = useState(null);
  const currentImg = new Image(width, height);

  // Setup scroll and canvas context
  useEffect(() => {
    setCanvasContext(canvasRef.current.getContext("2d"));
    window.addEventListener("scroll", onScroll);
  }, [canvasRef, canvasContext]);

  // Draw first image
  useEffect(() => {
    if (!canvasContext) return;
    currentImg.src = images[frameIndex];
    currentImg.onload = () => canvasContext.drawImage(currentImg, 0, 0);
  }, [canvasContext, images]);

  const updateImage = (nextImgIndex) => {
    const correctedIndex = (60 + nextImgIndex) % images.length;
    console.log('correctedIndex', correctedIndex)
    currentImg.src = images[correctedIndex];
    canvasContext.drawImage(currentImg, 0, 0);
  };

  const onScroll = () => {
    const html = document.documentElement;
    const scrollTop = html.scrollTop;
    const maxScrollTop = (html.scrollHeight - window.innerHeight);
    const scrollFraction = scrollTop / maxScrollTop;
    let progress = Math.min(
      images.length - 1,
      Math.floor(scrollFraction * images.length)
    );
    console.log('scroll progress', progress);

    if (canvasContext) { 
        requestAnimationFrame(() => updateImage(frameIndex + progress));
    }
  };
  return (
    <canvas width={width} height={height} ref={canvasRef}></canvas>
  );
}
