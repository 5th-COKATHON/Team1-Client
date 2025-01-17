import devil from "../assets/images/devil.png";
import devil_bg from "../assets/images/devil_bg.png";
import DevilChat from "../components/DevilChat";

const DevilConversation = () => {
  return (
    <div
      className="w-full h-full bg-cover "
      style={{ backgroundImage: `url(${devil_bg})` }}
    >
      <div
        className={
          "w-full h-full relative box-border p-4  transition-opacity duration-1000"
        }
      >
        <img
          alt="angel"
          src={devil}
          className="absolute z-20 left-1/4 -top-32 w-3/6 h-auto"
        />

        <DevilChat
          className="relative"
          comment={
            "집에 돌아오는 길, 문득 오늘 하루를 돌아보니 앞으로 더 잘하고 싶다는 희망이 생겼다. 비록 하루 동안 힘든 일도 있었지만, 내일은 더 나은 날이 될 거라 믿는다."
          }
        />
      </div>
    </div>
  );
};

export default DevilConversation;
