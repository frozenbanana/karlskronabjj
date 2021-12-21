import {useRef, useState, useEffect, useCallback } from "react";

let frameIndex = 0;
export default function ScrollingCanvas(props) {
  const { images, fallbackIndex, width, height } = props;
  const canvasRef = useRef(null);
  const [canvasContext, setCanvasContext] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);

  const updateImage = useCallback((nextImgIndex) => {
    if (!canvasContext || !loadedImages.length) return;
    frameIndex = (nextImgIndex) % loadedImages.length;
    console.log(loadedImages[frameIndex]);
    canvasContext.drawImage(loadedImages[frameIndex], 0, 0);
}, [canvasContext, loadedImages]);


  // Setup scroll and canvas context
  useEffect(() => {
    setCanvasContext(canvasRef.current.getContext("2d"));
    const onScroll = () => {
      const html = document.documentElement;
      const scrollTop = html.scrollTop;
      const maxScrollTop = (html.scrollHeight - window.innerHeight * 1.3);
      const scrollFraction = scrollTop / maxScrollTop;
      frameIndex = Math.min(
        images.length - 1,
        Math.floor(scrollFraction * images.length)
      );
  
      requestAnimationFrame(() => updateImage(frameIndex));
    };
    window.addEventListener("scroll", onScroll);
  }, [canvasRef, canvasContext, images, updateImage]);

  // Load images and do first render
  useEffect(() => {
    for (const imgSrc of images) {
      const imgObj = new Image(width, height);
      imgObj.src = imgSrc;
      imgObj.alt = "bjj-warmup";
      loadedImages.push(imgObj);
    }

    setLoadedImages(loadedImages);

    requestAnimationFrame(() => updateImage(frameIndex));

  }, [images, height, width, loadedImages, updateImage]);

  return <canvas width={width} height={height} ref={canvasRef}></canvas>;
}
