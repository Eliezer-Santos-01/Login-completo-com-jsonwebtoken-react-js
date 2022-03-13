import axios from "axios";
//URL base para fazer chamadas
export const api = axios.create({
    baseURL: "http://localhost:3004",
});

//Faz um select no banco de dados para saber se ó usuario está cadastrado
export const selectSession = (email, password) => {
    
    return api.post("/select",{email: email, senha: password});
};

//Faz o registro se o client não estiver cadastrado
export const registerSession = (email, password) => {
    
    return api.post("/register",{email: email, senha: password});
};

//Faz um select de todos os usuarios
export const selectSuper = () => {
    return api.get("/get",{
        headers: {
            "authorization": `Bearer ${localStorage.getItem("logUserToken")}`
        }
    });
};


//Deleta a conta dos usuario logado pelo id
export const deleteSession = () => {
    const recoved = localStorage.getItem("logUserID")
    const id = JSON.parse(recoved)
    return api.post("/delete",{id: id},{
        headers: {
            "authorization": `Bearer ${localStorage.getItem("logUserToken")}`
        }
    });
};

export const UpdateUsuario = (password) => {
    const recoved = localStorage.getItem("logUserID")
    const id = JSON.parse(recoved)
    return api.post("/update",{id: id, senha: password },{
        headers: {
            "authorization": `Bearer ${localStorage.getItem("logUserToken")}`
        }

    });

    
};