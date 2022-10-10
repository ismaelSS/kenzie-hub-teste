import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toastSucess, toastError } from "../toast/toasmodels";

const useNavegation = () =>{
    const navigate = useNavigate();

    const apiResquestLogin = (data) => {
        api
        .post("/sessions", data)
        .then((response) => {
            toastSucess('Login realizado com sucesso')
            localStorage.setItem('@kh_token', response.data.token)
            localStorage.setItem('@kh_id', response.data.user.id)
            localStorage.setItem('@kh_userName', response.data.user.name)
            localStorage.setItem('@kh_userCourse', response.data.user.course_module
            )

            navigate('/dashboard')
        })
        .catch((error) => toastError('email e/ou senha incorretos'));
    };
    
    const apiResquestRegister = (data) => {  
      api
        .post("/users", data)
        .then((resp) => {
            toastSucess('Cadastro realizado com sucesso')
            navigate('/')
        })
        .catch((error) => toastError('Dados invalidos tente novamente'));
    };

    const apiRequestUserInfos = (userId) =>{
        api.get(`/user/${userId}`).then((resp) =>{
            console.log(resp).catch(error => console.log(error))
        })
    }

    return{
        apiResquestLogin,
        apiResquestRegister,
        apiRequestUserInfos
    }
}

export default useNavegation