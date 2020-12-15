import React from 'react';
import styles from '../../../styles/Main.module.css'

export default function Slider (props){
  return(
    <>
    <input
    type="range"
    min="0"
    max="1000"
    defaultValue="950"
    id="velo"
    className={styles.slider}
    onMouseUp={props.onMouseUp}
    onTouchEnd={props.onTouchEnd}
    />
    </>
  )
}
