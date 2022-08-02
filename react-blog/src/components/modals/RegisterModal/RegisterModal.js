import styles from "./RegisterModal.module.scss"

function RegisterModal(props) {
  function milkHandler(e) {
    if (e.target.id === "milk") {
      props.onClose();
    }
  }

  return(
    <div id="milk" onClick={e => milkHandler(e)} className={styles.modalMilk}>
      <div className={styles.modalContainer}>
        <b>Temporarily unavailable</b>
      </div>
    </div>
  )
}

export default RegisterModal;