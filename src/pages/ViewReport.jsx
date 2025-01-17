import angel from "../assets/images/angel.png"
import diary from "../assets/images/diary.png"
const ViewReport = () => {

  return (
    <div className=" w-full h-full bg-red-400 relative box-border p-4">
      <img alt="angel" src={angel} className=" absolute -left-40 -top-32 w-3/6 h-auto" />
      <div className=" w-full h-full">
        <img src={diary} className=" w-full h-auto" />
      </div>
    </div>
  )

};

export default ViewReport;
