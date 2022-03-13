import React,{createContext, useState, useEffect} from 'react';
import { api, selectSession, registerSession, deleteSession, UpdateUsuario } from '../Api/Api';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider=({children})=>{
    const navigate = useNavigate();
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true);
    const [button, setButton] = useState(false)

    useEffect(()=>{
        const userpass1 = localStorage.getItem("logUserID")
        const userpass2 =localStorage.getItem("logUserToken")
        const userpass3 =localStorage.getItem("logUserauth")

        if(userpass1 && userpass2 && userpass3){
          
            setUser(userpass3);
        }
        setLoading(false)
    },[])

    const Login =async (email, password) => {
        const response =await selectSession(email, password);
        const auth = response.data.auth
        const id =response.data.id
        const token =  response.data.token

        if (auth) {
            
            
            localStorage.setItem("logUserID",JSON.stringify(id))
            localStorage.setItem("logUserToken", token)
            localStorage.setItem("logUserauth", auth)
        
            setUser(auth);
            return navigate("/")
        }
        window.alert("Usúario ou senha incorreto")
        setButton(true)

        
    }

    const Register = async (email, password) => {
        const response = await registerSession(email, password)
        if (response.data) {
           window.alert("Registration")
        }
        navigate("/Login")
    }


    const DeleteAccount = async () => {
        const response = await deleteSession()
        console.log(`message: ${response.data}`)
        localStorage.removeItem("logUserID")
        localStorage.removeItem("logUserToken")
        localStorage.removeItem("logUserauth")
        setUser(false)
        navigate("/Login")
        
        
    }

    const UpdateAccount = async (password) => {
        const response = await UpdateUsuario(password)
        console.log(response)
    }

    const Logout = () => {
        localStorage.removeItem("logUserID")
        localStorage.removeItem("logUserToken")
        localStorage.removeItem("logUserauth")
        setUser(false)
        navigate("/Login")
        
        
    } 

    return (
        <AuthContext.Provider value={{authenticated:!!user, Login, 
        loading, 
        Logout, 
        UpdateAccount, 
        Register, 
        DeleteAccount,
        button}}>
            {children}
        </AuthContext.Provider>
    )
}