import angel from "../assets/images/angel.png";
import diary from "../assets/images/diary.png";
import angel_bg from "../assets/images/angel_bg.png";
import AngelChat from "../components/AngelChat";
import { useState } from "react";

const ViewReport = () => {
  const [first, setFirst] = useState(false);

  const handleClick = () => {
    setFirst(true);
  };

  return (
    <div className="w-full h-full bg-cover " style={{ backgroundImage: `url(${angel_bg})` }}>
      <div
        className={`w-full h-full relative box-border p-4  transition-opacity duration-1000 ${first ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
      >
        <img
          alt="angel"
          src={angel}
          className="absolute z-20 -left-40 -top-32 w-3/6 h-auto"
        />
        <div
          className="z-30 w-4/6 h-5/6 bg-cover absolute -right-40 top-20"
          style={{ backgroundImage: `url(${diary})` }}
        ></div>
        <AngelChat
          handleClick={handleClick}
          className="relative"
          comment={
            "집에 돌아오는 길, 문득 오늘 하루를 돌아보니 앞으로 더 잘하고 싶다는 희망이 생겼다. 비록 하루 동안 힘든 일도 있었지만, 내일은 더 나은 날이 될 거라 믿는다."
          }
        />
      </div>
      {first && (
        <div className="transition-opacity duration-1000 opacity-100">
          {/* 새로운 화면의 내용을 여기에 추가 */}
        </div>
      )}
    </div>
  );
};

export default ViewReport;
