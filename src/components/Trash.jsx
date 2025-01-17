import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import devil_bg from "../assets/images/devil_bg.png";

const Trash = () => {
  return (
    <div
      className="flexcenter flex-col w-full h-full bg-cover "
      style={{ backgroundImage: `url(${devil_bg})` }}
    >
      <DotLottieReact
        src="https://lottie.host/61409260-7ade-4da1-bc36-c20c237991c9/Sux5ZgaYAD.lottie"
        loop
        autoplay
        className="w-2/4 h-auto"
        speed={0.8}
      />
      <h1 className="text-white text-2xl text-stroke text-stroke-login-pink">
        감정 보고서 폐기 중... 잠시만 기다려주세요
      </h1>
    </div>
  );
};
export default Trash;
