import angel from "../assets/images/angel.png";
import angel_bg from "../assets/images/angel_bg.png";
import AngelChat from "../components/AngelChat";
import angelhome from "../assets/images/angelhome.png";
import { useNavigate } from "react-router-dom";
const AngelConversation = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-full bg-cover "
      style={{ backgroundImage: `url(${angel_bg})` }}
    >
      <div onClick={() => { (navigate('/home')) }} className="absolute z-50 top-16 right-16 cursor-pointer" style={{ width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "#50C3C6" }} >
        <img className="w-full h-full" src={angelhome} />
      </div>
      <div
        className={
          "w-full h-full relative box-border p-4  transition-opacity duration-1000"
        }
      >
        <img
          alt="angel"
          src={angel}
          className="absolute z-20 left-1/4 -top-32 w-3/6 h-auto"
        />

        <AngelChat
          className="relative"
          comment={
            "집에 돌아오는 길, 문득 오늘 하루를 돌아보니 앞으로 더 잘하고 싶다는 희망이 생겼다. 비록 하루 동안 힘든 일도 있었지만, 내일은 더 나은 날이 될 거라 믿는다."
          }
        />
      </div>
    </div>
  );
};

export default AngelConversation;
