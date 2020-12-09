import React from 'react';
import Weapons from '../Weapons';
import styles from '../../../styles/Main.module.css'

export default function Form(props) {

  return (
      <div id={props.id}>
      <label>HP</label>
      <input className={styles.input} type="number" id={`${props.id}hp`} />
      <label>CA</label>
      <input className={styles.input} type="number" id={`${props.id}ca`} />
      <label>Arma</label>
      <Weapons iden={`${props.id}weapon`} />
      </div>
  );
}
