import { useEffect, useRef, useState } from "react";

const ChatBox = () => {

    const inputRef = useRef(null);
    const [chatText, setChatText] = useState('');
    const [chat, setChat] = useState<string[]>([]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChatText(e.target.value);
    }

    const handleClick = () => {
        setChat([...chat, chatText]);
        inputRef.current.focus();
        setChatText('');
    }
    
    return (
        <>
            <div>
                <input ref={inputRef} type="text" id="textbox" value={chatText} onChange={handleInput} />
                <button onClick={handleClick}> Send</button>
            </div>
        </>
    )
}

export default ChatBox;