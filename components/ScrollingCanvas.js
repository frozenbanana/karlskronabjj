import React, { useRef, useState, useEffect } from "react";

let frameIndex = 0;
export default function ScrollingCanvas(props) {
  const { images, fallbackIndex, width, height } = props;
  const canvasRef = useRef(null);
  const [canvasContext, setCanvasContext] = useState(null);
  const loadedImages = [];

  // Setup scroll and canvas context
  useEffect(() => {
    setCanvasContext(canvasRef.current.getContext("2d"));
    window.addEventListener("scroll", onScroll);
  }, [canvasRef, canvasContext]);

  // Draw first image
  useEffect(() => {
    if (!canvasContext) return;
    for (const imgSrc of images) {
      const imgObj = new Image(width, height);
      imgObj.src = imgSrc;
      imgObj.alt = "bjj-warmup";
      loadedImages.push(imgObj);
    }
    canvasContext.drawImage(loadedImages[frameIndex], 0, 0);
  }, [canvasContext, images]);

  const updateImage = (nextImgIndex) => {       
    frameIndex = (nextImgIndex) % images.length;
    canvasContext.drawImage(loadedImages[frameIndex], 0, 0);
  };

  const onScroll = () => {
    const html = document.documentElement;
    const scrollTop = html.scrollTop;
    const maxScrollTop = (html.scrollHeight - window.innerHeight);
    const scrollFraction = scrollTop / maxScrollTop;
    frameIndex = Math.min(
      images.length - 1,
      Math.floor(scrollFraction * images.length)
    );

    if (canvasContext) { 
        requestAnimationFrame(() => updateImage(frameIndex));
    }
  };
  return (
    <canvas width={width} height={height} ref={canvasRef}></canvas>
  );
}
