import React from "react";
import styles from "../styles/Map.module.css";

// Generated from
const MapFrame = () => (
      <div className={styles.mapOuter}>
        <div className={styles.gmapCanvas}>
          <iframe
          className={styles.mapFrame}
          width="512" 
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=SALTSJ%C3%96BADSV%C3%84GEN%201C&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight="0" 
          marginWidth="0"></iframe>
        </div>
      </div>
  );


export default MapFrame;


