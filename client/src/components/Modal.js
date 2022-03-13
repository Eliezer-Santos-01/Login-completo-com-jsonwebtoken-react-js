import styles from "../styles/modal.module.css"

const Modal = ({id="Modal" , closeModal}) => {
    const handleOutsideClick = (e) =>{
        if(e.target.id === id) closeModal(false);
    }

    return ( 
    <div id={id} onClick={handleOutsideClick} className={styles.backgroundModal}>
        <div className={styles.containerModal}>
            <div className={styles.containerButton}>
                <button onClick={() => {closeModal(false)}} className={styles.button}>X</button>
            </div>
            <div>
                <form>
                    <input type="text" placeholder="Comente aqui"/>
                </form>
            </div>
         </div>
    </div> 
    );
}
 
export default Modal;