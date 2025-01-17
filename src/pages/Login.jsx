import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="flex flex-col">
      <input placeholder="이메일" value={email} onChange={handleChange} />
      <input placeholder="비밀번호" />
      <button onClick={handleClick}>시작하기</button>
    </div>
  );
};

export default Login;
