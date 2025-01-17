import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { apiLogin } from "../apis";

const Login = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = async () => {
    const res = await apiLogin(email);
    const memberId = res.data.id;
    console.log(memberId);
    localStorage.setItem(memberId);
    navigation("/home");
  };

  return (
    <div className="flexcenter flex-col w-full gap-10 h-full bg-[url('/src/assets/images/loginbg.png')] bg-cover">
      <div className="flexcenter flex-col py-10 w-3/12">
        <img src={logo} />
      </div>
      <div className="flexcenter flex flex-col gap-4 w-3/12">
        <div className="flex flex-col w-full font-SB gap-2">
          <h2>아이디</h2>
          <input
            className="logininput border-4"
            placeholder="아이디를 입력해주세요"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full font-SB gap-2">
          <h2>비밀번호</h2>
          <input
            className="logininput border-4"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <div className="w-full py-4">
          <button
            disabled={!email}
            onClick={handleClick}
            className="logininput text-white bg-gray-400 enabled:bg-login-pink"
          >
            로그인하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
