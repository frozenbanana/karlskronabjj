import { useRef, useState, useEffect, useCallback } from "react";

let frameIndex = 0;
export default function ScrollingCanvas(props) {
  const { images, width, height } = props;
  const canvasRef = useRef(null);
  const [canvasContext, setCanvasContext] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);

  const updateImage = (nextImgIndex) => {
    if (!canvasContext || !loadedImages.length) return;
    canvasContext.drawImage(loadedImages[nextImgIndex], 0, 0);
  };

  // Load images and do first render
  useEffect(() => {
    const tempArr = [];
    for (const imgSrc of images) {
      const imgObj = new Image(width, height);
      imgObj.src = imgSrc;
      imgObj.alt = "bjj-warmup";
      tempArr.push(imgObj);
    }
    setLoadedImages([...tempArr]);

    requestAnimationFrame(() => updateImage(frameIndex));
  }, []);

  // Setup scroll and canvas context
  useEffect(() => {
    if (canvasRef.current && !canvasContext) {
      setCanvasContext(canvasRef.current.getContext("2d"));
    }

    if (loadedImages.length && !loadedImages[0]?.onload) {
      loadedImages[0].onload = () => updateImage(frameIndex);
    }

    const onScroll = () => {
      const html = document.documentElement;
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      frameIndex = Math.floor(scrollFraction * loadedImages.length);
      frameIndex = frameIndex % loadedImages.length;

      requestAnimationFrame(() => updateImage(frameIndex));
    };
    window.addEventListener("scroll", onScroll);
  }, [canvasRef, canvasContext, loadedImages, updateImage]);

  return <canvas width={width} height={height} ref={canvasRef}></canvas>;
}
