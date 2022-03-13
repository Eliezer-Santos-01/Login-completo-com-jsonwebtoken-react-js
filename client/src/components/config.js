import React,{useContext} from "react";
import styles from "../styles/Confing.module.css"


const Confing = ({id="Confing",closeModal}) => {

    
    const handleOutsideClick = (e) =>{
        if(e.target.id === id) closeModal(false);
    }
    return ( 
    <div id={id} onClick={handleOutsideClick} className={styles.containerModal}>
        <div className={styles.backgroundModal}>
            <div className={styles.containerItem}>
                <button onClick={() =>{closeModal(false)}}>Fechar</button>
            </div>
            <div className={styles.containerh2}>
                <button>Redefinir Senha</button>
                <button>Apagar Conta</button>
                <button >Logout</button>
            </div>
        </div>
    </div> );
}
 
export default Confing;