import { useState, useEffect } from "react";
function useTyping(content) {
    const [text, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        const typeEvent = setInterval(() => {
            setCharacterCount((prev) => prev + 1);
            setText((prev) => prev + content[characterCount]);
        }, 40);

        if (text.length > content.length - 1) {
            setIsEnd(true);
            clearInterval(typeEvent);
        }

        return () => clearInterval(typeEvent);
    }, [text, isEnd]);
    return { text, isEnd };
}

export default useTyping;