import { useNavigate } from "react-router-dom";
import mainbg from "../assets/images/mainbg.png";
import { useEffect, useState } from "react";
import { apiGetPoint } from "../apis";
const Home = () => {
  const navigation = useNavigate();
  const memberId = localStorage.getItem("memberId");
  const [positive, setPositive] = useState(0);
  const [negative, setNegative] = useState(0);

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const res = await apiGetPoint(parseInt(memberId));
        setPositive(res.data.data.positive);
        setNegative(res.data.data.negative);
      } catch (error) {
        console.error(error);
      }
    };

    if (memberId) {
      fetchPoints();
    }
  }, [memberId]);

  return (
    <div
      className="relative flex w-full h-full bg-cover justify-center"
      style={{ backgroundImage: `url(${mainbg})` }}
    >
      <div
        className="left-56 top-[235px] flex items-center justify-center z-50 absolute bottom-[316px] w-48 h-12 rounded-3xl"
        style={{ backgroundColor: "#F6609A" }}
      >
        <p className="text-xl font-medium font-SB text-white">천사 팀장님</p>
      </div>
      <div className="p-6 left-48 top-64 absolute z-10 bg-white rounded-2xl border-4 border-login-pink">
        <p className=" font-medium font-SB text-xl">
          누적된 천사 포인트는 {positive}점이에요!
        </p>
      </div>
      <div className="right-56 bottom-40 flex items-center justify-center z-50 absolute w-48 h-12 rounded-3xl bg-devil-purple">
        <p className="text-xl font-medium font-SB text-white">악마 팀장님</p>
      </div>
      <div className="p-6 right-48 bottom-24 absolute z-10 bg-white rounded-2xl border-4 border-devil-purple">
        <p className=" font-medium font-SB text-xl">
          누적된 악마 포인트는 {negative}점이에요!
        </p>
      </div>
      <div className="flexcenter flex-col w-2/6 gap-10 h-full ">
        <button
          className="home-button"
          onClick={() => navigation("/createreport")}
        >
          보고서 제출
        </button>
        <button onClick={() => navigation("/doors")} className="home-button">
          상사와 면담
        </button>
        <button className="home-button">상점 방문</button>
      </div>
    </div>
  );
};

export default Home;
