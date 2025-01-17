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
import Trash from "../components/Trash";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReportChart from "../components/ReportChart";

const ViewReport = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [respon, setRespon] = useState();
  const [isAngel, setIsAngel] = useState(false);
  const [review, setReview] = useState();
  const [report, setReport] = useState();
  const [trash, setTrash] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setSecond(true)
    setTimeout(() => {
      setFirst(true);
    }, 1200)
  };
  const backHome = () => {
    setTrash(true);
    setTimeout(() => {
      navigate('/home');
    }, 4000)
  };
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      setRespon(location.state.res.data);
      setReport(location.state?.report);
      if (location.state.res.data.emotionPointResponse.positive > location.state.res.data.emotionPointResponse.negative) {
        setReview(location.state.res.data.emotionResponse.angel_review);
        setIsAngel(true);
      }
      else {
        setReview(location.state.res.data.emotionResponse.devil_review);
        setIsAngel(false);
      }
      console.log(location.state);
    }
  }, [])
  return (
    <div className="w-full h-full bg-cover " style={{ backgroundImage: `url(${isAngel ? angel_bg : devil_bg})` }}>
      {trash && <Trash className=" absolute z-50" />}
      {first ?
        (
          <div
            className={`flex w-full h-full justify-center items-center transition-opacity duration-1000 ${first ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            {!trash && <div className="absolute z-50 top-16 right-16 cursor-pointer" style={{ width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "#50C3C6" }} >
              <img onClick={backHome} className="w-full h-full" src={isAngel ? angelhome : devilhome} />
            </div>}
            {!trash && <img className=" absolute z-50 right-40 bottom-20" style={{ width: "160px", height: "auto" }} src={pen} />}
            <div className="flex bg-cover absolute w-4/6 h-5/6" style={{ backgroundImage: `url(${isAngel ? diary : devildiary})` }}>
              <div className="flex flex-col w-1/2 h-full p-14 gap-4">
                <h1 className="flex font-SB text-2xl font-bold gap-4" style={{ color: "#474747" }}><img className="w-[7px] h-[28px]" src={isAngel ? angelrect : devilrect} />오늘의 보고서</h1>
                <p className=" break-words  underline underline-offset-4 text-lg font-SB">
                  {report}
                </p>
              </div>
              <div className="flex flex-col w-1/2 h-full p-14 gap-8 justify-center ">
                <div className="w-full h-[45%] bg-white" style={{ border: `${isAngel ? "4px solid #F6609A" : "4px solid #7C3BF6"}` }}>
                  <ReportChart data={respon} />
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
              "이제 보고서를 평가해드릴게요~ 준비하시느라 고생 많으셨어요. 결과와 함께 앞으로의 방향에 대해서도 이야기 나눠보면 좋겠네요!"
            }
          />) :
            (
              <DevilChat
                handleClick={handleClick}
                className="relative"
                comment={
                  "이제 평가해줄게. 각오해. 잘한 건 인정하고, 부족한 건 냉정하게 지적할 거니까 마음 단단히 먹어. "
                }
              />
            )}
        </div>
      }
    </div >
  );
};

export default ViewReport;
