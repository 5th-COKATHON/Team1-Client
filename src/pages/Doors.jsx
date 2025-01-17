import angeldoor from "../assets/images/angeldoor.png";
import devildoor from "../assets/images/devildoor.png";
import devil_bg from "../assets/images/devil_bg.png";
import { useNavigate } from "react-router-dom";

const Doors = () => {
  const navigation = useNavigate();
  return (
    <div
      className="w-full h-full bg-cover relative"
      style={{ backgroundImage: `url(${devil_bg})` }}
    >
      <div className={"flex w-full h-full box-border p-4"}>
        <img
          alt="devil"
          src={devildoor}
          onClick={() => navigation("/devilconversation")}
        />
        <img
          alt="angel"
          src={angeldoor}
          onClick={() => navigation("/angelconversation")}
        />
      </div>
    </div>
  );
};

export default Doors;
