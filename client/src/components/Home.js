import React , {useState, useEffect, useContext} from "react";
import { AuthContext } from "../Auth/Auth";
import { selectSuper } from "../Api/Api";

const axios = require('axios');

const Home = () => {
  const {Logout, DeleteAccount,UpdateAccount} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [ativado, setAtivado] = useState(false)
  const [newPass, setNewPass] = useState(null)


  useEffect(()=> {
      (async()=> {
        const response = await selectSuper()
        console.log(response.data)
      })()
      setLoading(false)
  },[])
  
    if(loading){
        return <>....carrengando</>
    }

    const flipFlop =()=> {
        if (!ativado) {
            setAtivado(true)
        }else{
            setAtivado(false)
        }
    }
    return ( 
        <div>
            <>hello</>
           
            <button onClick={() => Logout()} >Logout</button>
            <button onClick={() =>DeleteAccount()} >Delete Account</button>
            <button onClick={() => flipFlop()}>Trocar senhar</button>
            {ativado &&(
                <div>
                    <input 
                    type="text" 
                    placeholder="Digite a nova senhar"
                    onChange={(e)=> setNewPass(e.target.value)}/>
                    <button onClick={() =>UpdateAccount(newPass)}>
                        click para troca a senha
                    </button>
                </div>
            )}
            <div>
                {newPass}
            </div>

            
        </div>
      


    )
}
export default Home;