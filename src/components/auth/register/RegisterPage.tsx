import { ChangeEvent, useState } from "react";
import { IRegisterPage } from "./types";

const RegisterPage = () => {
  //створили конкретни екземлеяр на основі нашого інтерфейсу
  const init: IRegisterPage = {
    username: "",
    email: "",
    password: "",
  };

  //При зміни значення елемента в useState компонент рендериться повторно і виводить нові значення
  const [data, setData] = useState<IRegisterPage>(init);

  console.log("Render Register component", "------SALO----");

  //console.log("Дестурктуризація", {...data, password: "123456"});

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    console.log("Ми відправляємо на сервер", data);
    //setData({email: "pylyp", password: "123456"});
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Щось вводити в інтпут");
    console.log(e.target.name, e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1 className="text-center">Реєстрація на сайті</h1>
      <form onSubmit={onSubmitHandler} className="col-md-6 offset-md-3">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Ваше ім'я
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={data.username}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Електронна адреса
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Пароль
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Реєстрація
        </button>
      </form>
    </>
  );
};

export default RegisterPage;

// const RegisterPage = () => {
//   return (
//     <>
//       <h1>Реєстрація на сайті</h1>
//     </>
//   );
// };

// export default RegisterPage;
