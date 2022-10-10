import { Header } from "./header";
import { Showcase } from "./showcase";
import { DashboardSection } from "./styles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toastError } from "../../toast/toasmodels";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem("@kh_id") === null){
      toastError('Ops! algo deu errado, tente logar novamente')
      navigate('/')
    }
  }, [localStorage.getItem("@kh_id")]);

  return (
    <DashboardSection>
      <Header />
      <Showcase />
    </DashboardSection>
  );
};

export default Dashboard;
