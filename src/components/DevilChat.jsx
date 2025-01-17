import useTyping from "../utils/useTyping";
import angelBtn from "../assets/images/angelBtn.png";
const DevilChat = ({ comment, handleClick }) => {
    const { text, isEnd } = useTyping(comment);

    return (
        <div>
            <div className=" p-8 left-72 bottom-10 absolute z-50 bg-white w-[1000px] h-[300px] rounded-[44px] border-4 border-devil-purple">
                <p className=" font-medium font-SB text-xl">
                    {text}
                    <span className={`${isEnd ? 'hidden' : 'animate-typing'} `}>|</span>
                </p>
            </div>
            <div className="flex items-center justify-center z-50 absolute left-[360px] bottom-[316px] w-52 h-12 rounded-3xl" style={{ backgroundColor: "#7C3BF6" }}>
                <p className=" text-xl font-medium font-SB text-white ">악마 팀장님</p>
            </div>
            <div className="absolute w-[24px] h-[24px] z-50 bottom-20 right-72 cursor-pointer">
                <img src={angelBtn} onClick={handleClick} />
            </div>
        </div>
    )
}
export default DevilChat;