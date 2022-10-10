import { ShowcaseStyled } from "./styles";

export const Showcase = () => {
  const userNameLocal = localStorage.getItem("@kh_userName");
  const userCourseLocal = localStorage.getItem("@kh_userCourse");

  return (
    <ShowcaseStyled>
      <div className="userInfos">
        <h1 className="title1">Olá,{userNameLocal}</h1>
        <span className="font3">{userCourseLocal}</span>
      </div>

      <div className="explanation">
        <h2 className="title1">Que pena! Estamos em desenvolvimento:(</h2>
        <p className="font3">
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </div>
    </ShowcaseStyled>
  );
};
