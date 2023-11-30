import React from 'react'
import styles from "./ModelEvent.module.css"

const ModelEvent = ({close,details}) => {
  return (
    <>
    <div className={styles.modalwrapper}></div>
    <div className={styles.container}>
      <h1>Lecture Details</h1>
      <h3>{details.title}</h3>
      <button onClick={close}>Join Class</button>
    </div>
    </>
  )
}

export default ModelEvent