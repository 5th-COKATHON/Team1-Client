import { Outlet } from "react-router-dom";
function Root() {
  return (
    <div>
      <Outlet />
      <div className=" text-9xl"> 123 </div>
    </div>
  );
}

export default Root;
