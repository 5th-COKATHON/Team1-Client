import angel from "../assets/images/angel.png";
import devil from "../assets/images/devil.png"; // Devil 이미지 추가
import diary from "../assets/images/diary.png";
import devildiary from "../assets/images/devildiary.png"; // Devil 배경 추가
import angel_bg from "../assets/images/angel_bg.png";
import devil_bg from "../assets/images/devil_bg.png"; // Devil 배경 추가
import AngelChat from "../components/AngelChat";
import DevilChat from "../components/DevilChat";
import devilrect from "../assets/images/devilrect.png";
import angelrect from "../assets/images/angelrect.png";
import pen from "../assets/images/pen.png";
import angelhome from "../assets/images/angelhome.png";
import devilhome from "../assets/images/devilhome.png";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReportChart from "../components/ReportChart";

const ViewReport = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [isAngel, setIsAngel] = useState(false);
  const [review, setReview] = useState('아 집가고 싶다 아 집가고 싶다아 집가고 싶다아 집가고 싶다아 집가고 싶다아 집가고 싶다아 집가고 싶다')
  const [report, setReport] = useState(
    '오늘은 정말 다사다난한 하루였다.아침에 일어나서 창밖을 보니 눈이 소복이 쌓여 있었다.하얀 세상을 보니 마음이 따뜻해지고 행복함이 느껴졌다.오랜만에 자연의 평화로움 속에 있는 기분이었다. (행복) 하지만 출근길에 지하철이 고장 나서 한참을 기다려야 했다.사람들이 짜증 섞인 얼굴로 웅성거리는 모습을 보니 나도 모르게 화가 치밀었다.왜 이런 날에 이런 일이 생기는 건지 정말 답답했다. (분노, 짜증)오후에는 팀원들과 중요한 발표를 했다.준비한 대로 잘 해냈지만, 발표를 마치고 나니 부족했던 부분이 생각나서 아쉬움과 후회가 몰려왔다. 좀 더 준비했어야 했나? 라는 생각이 끊임없이 맴돌았다. (후회, 아쉬움)저녁엔 친구들과 오랜만에 만나 따뜻한 음식을 먹으며 웃고 떠들었다.특히 친구가 해준 격려의 말이 정말 큰 힘이 됐다. 넌 정말 잘하고 있어.라는 말을 듣는 순간 마음 깊은 곳에서 감동과 감사함이 느껴졌다. (감사, 사랑)집에 돌아오는 길, 문득 오늘 하루를 돌아보니 앞으로 더 잘하고 싶다는 희망이 생겼다.비록 하루 동안 힘든 일도 있었지만, 내일은 더 나은 날이 될 거라 믿는다.');
  const navigate = useNavigate();
  const handleClick = () => {
    setSecond(true)
    setTimeout(() => {
      setFirst(true);
    }, 1200)
  };
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      setReport(location.state?.report);
    }
  }, [])
  return (
    <div className="w-full h-full bg-cover " style={{ backgroundImage: `url(${isAngel ? angel_bg : devil_bg})` }}>
      {first ?
        (
          <div
            className={`flex w-full h-full justify-center items-center transition-opacity duration-1000 ${first ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <div className="absolute z-50 top-16 right-16 cursor-pointer" style={{ width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "#50C3C6" }} >
              <img onClick={() => navigate('/home')} className="w-full h-full" src={isAngel ? angelhome : devilhome} />
            </div>
            <img className=" absolute z-50 right-40 bottom-20" style={{ width: "160px", height: "auto" }} src={pen} />
            <div className="flex bg-cover absolute w-4/6 h-5/6" style={{ backgroundImage: `url(${isAngel ? diary : devildiary})` }}>
              <div className="flex flex-col w-1/2 h-full p-14 gap-4">
                <h1 className="flex font-SB text-2xl font-bold gap-4" style={{ color: "#474747" }}><img className="w-[7px] h-[28px]" src={isAngel ? angelrect : devilrect} />오늘의 보고서</h1>
                <p className=" break-words  underline underline-offset-4 text-lg font-SB">
                  {report}
                </p>
              </div>
              <div className="flex flex-col w-1/2 h-full p-14 gap-8 justify-center ">
                <div className="w-full h-[45%] bg-white" style={{ border: `${isAngel ? "4px solid #F6609A" : "4px solid #7C3BF6"}` }}>
                  <ReportChart />
                </div>
                <div className="w-full h-[45%] p-4   bg-white" style={{ border: `${isAngel ? "4px solid #F6609A" : "4px solid #7C3BF6"}` }}>
                  <h1 className=" font-SB font-semibold ">감정 총평</h1>
                  <p className="break-words font-SB font-normal text-base">
                    {review}
                  </p>
                </div>
              </div>
            </div>
          </div>

        ) : <div
          className={`w-full h-full relative box-border p-4  transition-opacity duration-1000 ${second ? "opacity-0 pointer-events-none" : "opacity-100"
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
    </div >
  );
};

export default ViewReport;
