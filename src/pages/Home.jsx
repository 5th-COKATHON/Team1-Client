import mainbg from "../assets/images/mainbg.png";
const Home = () => {
  return (
    <div
      className="w-full h-full bg-cover "
      style={{ backgroundImage: `url(${mainbg})` }}
    ></div>
  );
};

export default Home;
