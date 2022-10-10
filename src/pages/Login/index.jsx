import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from "react-router-dom";
import { DivLogin, LoginSection } from "./styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { DivInputPassaword } from "./passwordImput/styles";
import useNavegation from "../../hooks/useResquest";
import logo from '../../assets/img/Logo.svg'


const Login = () => {
  const {apiResquestLogin} = useNavegation()
  const [showPassword, setShowPassword] = useState(false);

  const formSchema = yup.object().shape({
    email: yup.string().required("Digite seu e-mail"),
    password: yup.string().required("Digite a senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data) =>{
    apiResquestLogin(data);
  }

  return (
    <LoginSection>
      <img src={logo} alt="logo KenzieHub" />
      <DivLogin>
      <div className="forPadding">
        <h2 className="title3">Login</h2>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <label className="labelEmail" htmlFor="email">
            {" "}
            Email
            {errors.email ? (
                <span className="error-input">{errors.email.message}</span>
              ) : (
                ""
              )}
          </label>
          <input
            id="email"
            placeholder="digite o seu e-mail"
            {...register("email")}
          />

          <DivInputPassaword>
            <label htmlFor="password">Senha
            {errors.password ? (
                <span className="error-input">{errors.password.message}</span>
              ) : (
                ""
              )}</label>
            <div className="inputSimulator">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="digite sua senha"
                {...register("password")}
              />

              {showPassword ? (
                <FaEyeSlash onClick={() => setShowPassword(false)} />
              ) : (
                <FaEye onClick={() => setShowPassword(true)} />
              )}

            </div>
          </DivInputPassaword>

          <button className="button-main" type="submit">
            Entrar
          </button>
        </form>

        <span>Ainda não possui um conta?</span>

        <Link className="button-grey font2" to="/register">
          Cadastre-se
        </Link>
      </div>
    </DivLogin>
    </LoginSection>
    
  );
};

export default Login;
