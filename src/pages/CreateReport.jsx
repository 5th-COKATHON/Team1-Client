import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiGetDetail } from "../apis";
import Loading from "../components/Loading";
const CreateReport = () => {
  const navigation = useNavigate();
  const [report, setReport] = useState("");
  const [next, setNext] = useState(false);
  const memberId = localStorage.getItem("memberId");
  console.log(report);

  const handleChange = (e) => {
    setReport(e.target.value);
  };
  const handleSubmit = async () => {
    setNext(true);
    await apiGetDetail(report, parseInt(memberId))
      .then((res) => {
        console.log(res.data);
        navigation("/viewreport", {
          state: { report: report, res: res.data },
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-full h-full">
      {next ? (
        <Loading />
      ) :
        (<div className="flexcenter flex-col w-full gap-10 h-full bg-[url('/src/assets/images/createbg.png')] bg-cover">
          <div className="flex flex-col rounded-xl gap-7 shadow-xl bg-create-sky w-7/12 h-4/6 px-14 py-5">
            <div className="flex items-center gap-4 py-2 border-b-4 border-b-black">
              <div className="bg-login-pink w-2 h-8" />
              <h1 className="text-4xl font-Pretendard">MODE</h1>
            </div>
            <textarea
              className="flex-1 px-6 py-7 rounded-[38px] font-SB"
              placeholder="오늘의 보고서를 작성해주세요."
              value={report}
              onChange={handleChange}
            />
            <div className="flexcenter">
              <button
                disabled={!report}
                className="w-2/4 px-[18px] py-3.5 rounded-xl text-white bg-gray-400 enabled:bg-login-pink font-SB text-2xl"
                onClick={handleSubmit}
              >
                제출하기
              </button>
            </div>
          </div >
        </div >)
      }
    </div >
  );
};

export default CreateReport;
