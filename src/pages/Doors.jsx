import angeldoor from "../assets/images/angeldoor.png";
import devildoor from "../assets/images/devildoor.png";
import devil_bg from "../assets/images/devil_bg.png";
import { useNavigate } from "react-router-dom";
import backspace from "../assets/images/backspace.png";

const Doors = () => {
  const navigation = useNavigate();
  return (
    <div
      className="w-full h-full bg-cover relative"
      style={{ backgroundImage: `url(${devil_bg})` }}
    >
      <div className="flexcenter py-20">
        <h1 className="text-white text-4xl text-stroke text-stroke-black">
          누구와 대화해볼까?
        </h1>
      </div>
      <img
        src={backspace}
        className="w-20 absolute top-11 left-11"
        onClick={() => navigation(-1)}
      />
      <div className={"flexcenter w-full h-full gap-28 box-border "}>
        <img
          className="h-4/6"
          alt="devil"
          src={devildoor}
          onClick={() => navigation("/devilconversation")}
        />
        <img
          className="h-4/6"
          alt="angel"
          src={angeldoor}
          onClick={() => navigation("/angelconversation")}
        />
      </div>
    </div>
  );
};

export default Doors;
