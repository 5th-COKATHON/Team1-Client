import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import devil_bg from "../assets/images/devil_bg.png";

const Loading = () => {
  return (
    <div
      className="flexcenter flex-col w-full h-full bg-cover "
      style={{ backgroundImage: `url(${devil_bg})` }}
    >
      <DotLottieReact
        src="https://lottie.host/2013a1c5-c841-4a83-80c9-4efe35b7d05a/9IYtwgka1F.lottie"
        loop
        autoplay
        className="w-120 h-auto"
        speed={0.8}
      />
      <h1 className="text-white text-2xl text-stroke text-stroke-login-pink">
        감정 보고서 평가 중... 잠시만 기다려주세요
      </h1>
    </div>
  );
};
export default Loading;
