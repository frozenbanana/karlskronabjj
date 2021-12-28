import React from "react";
import styles from "../styles/Map.module.css";

const MapFrame = () => {
  return (
    <div className={styles.mapOuter}>
      <div className={styles.gmapCanvas}>
        <iframe
          className={styles.mapFrame}
          id="gmap_canvas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2221.1700840663293!2d15.598044166866407!3d56.171452638179325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x642876f070b7621c!2zNTbCsDEwJzE3LjAiTiAxNcKwMzUnNTkuNiJF!5e0!3m2!1sen!2sse!4v1640701877790!5m2!1sen!2sse"
          width="512"
          loading="eager"></iframe>
      </div>
    </div>
  );
}
export default MapFrame;