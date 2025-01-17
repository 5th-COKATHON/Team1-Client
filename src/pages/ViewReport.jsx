import angel from "../assets/images/angel.png";
import devil from "../assets/images/devil.png"; // Devil 이미지 추가
import diary from "../assets/images/diary.png";
import devildiary from "../assets/images/devildiary.png"; // Devil 배경 추가
import angel_bg from "../assets/images/angel_bg.png";
import devil_bg from "../assets/images/devil_bg.png"; // Devil 배경 추가
import AngelChat from "../components/AngelChat";
import DevilChat from "../components/DevilChat";
import { useState } from "react";

const ViewReport = () => {
  const [first, setFirst] = useState(false);
  const [isAngel, setIsAngel] = useState();
  const handleClick = () => {
    setFirst(true);
  };

  return (
    <div className="w-full h-full bg-cover " style={{ backgroundImage: `url(${isAngel ? angel_bg : devil_bg})` }}>
      {isAngel ?
        (
          <div className="relative transition-opacity duration-1000 opacity-100 flex justify-center items-center">
            <div className="absolute w-5/6 h-3/4 " style={{ backgroundImage: `url(${isAngel ? diary : devildiary})` }}>
              hello
            </div>
          </div>
        ) : <div
          className={`w-full h-full relative box-border p-4  transition-opacity duration-1000 ${first ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
        >
          <img
            alt={isAngel ? "angel" : "devil"} // alt 속성도 동적 변경
            src={isAngel ? angel : devil} // 이미지 동적 변경
            className="absolute z-20 -left-40 -top-32 w-3/6 h-auto"
          />
          <div
            className="z-30 w-4/6 h-5/6 bg-cover absolute -right-40 top-20"
            style={{ backgroundImage: `url(${isAngel ? diary : devildiary})` }}
          ></div>
          {isAngel ? (<AngelChat
            handleClick={handleClick}
            className="relative"
            comment={
              "집에 돌아오는 길, 문득 오늘 하루를 돌아보니 앞으로 더 잘하고 싶다는 희망이 생겼다. 비록 하루 동안 힘든 일도 있었지만, 내일은 더 나은 날이 될 거라 믿는다."
            }
          />) :
            (
              <DevilChat
                handleClick={handleClick}
                className="relative"
                comment={
                  "집에 돌아오는 길, 문득 오늘 하루를 돌아보니 앞으로 더 잘하고 싶다는 희망이 생겼다. 비록 하루 동안 힘든 일도 있었지만, 내일은 더 나은 날이 될 거라 믿는다."
                }
              />
            )}
        </div>
      }
    </div>
  );
};

export default ViewReport;
