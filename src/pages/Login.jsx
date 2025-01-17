import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Login = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = () => {
    // 백에 email post하고 이동
    navigation("/home");
  };

  return (
    <div className="flex items-center flex-col w-full h-full bg-[url('/src/assets/images/loginbg.png')] bg-cover">
      <div className="flexcenter flex-col py-10 w-3/12">
        <img src={logo} />
      </div>
      <div className="flexcenter flex flex-col gap-4 w-3/12">
        <div className="w-full font-SB">
          <h2>아이디</h2>
          <input
            className="logininput"
            placeholder="아이디를 입력해주세요"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <h2>비밀번호</h2>
          <input className="logininput" placeholder="비밀번호를 입력해주세요" />
        </div>
        <button
          onClick={handleClick}
          className="logininput text-white bg-login-pink "
        >
          로그인하기
        </button>
      </div>
    </div>
  );
};

export default Login;
