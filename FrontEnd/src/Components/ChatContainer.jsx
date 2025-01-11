import React, { useState } from "react";

const ChatContainer = () => {
  const [input, setInput] = useState(" ");
  const [messages, setMessages] = useState([
    {
      type: "user",
      text: "this is a message from the user",
    },
    { type: "bot", text: "this is a message from the bot" },
    { type: "user", text: "this is a message from the user" },
    { type: "bot", text: "this is a message from the bot" },
  ]);


  const handleInputChange = (e) => {
    setInput(e.target.value);
  };


  const handleSendMessage = () => {
    if (input.trim() === "") return; 

    setMessages([
      ...messages,
      { type: "user", text: input.trim() },
      { type: "bot", text: `you said ${input.trim()}` },
    ]);


    setInput("");
  };

  return (
    <div className="chat-container flex flex-col h-screen bg-black text-white py-5">
      {/* Messages Display */}
      {messages.map((message, index) => (
        <p
          key={index}
          className={`max-w-[75%] px-4 py-2 rounded text-white ${
            message.type === "user"
              ? "bg-blue-600 self-end"
              : "bg-gray-400 self-start"
          }`}
        >
          {message.text}
        </p>
      ))}


      <div className="inputField fixed bottom-0 bg-slate-900 w-[90%] py-5 flex justify-center align-middle">
        <input
          type="text"
          className="w-[70%] bg-slate-500 text-white py-2 mr-2"
          placeholder="Type a message..."
          value={input}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-600 text-white py-2 px-5 rounded"
          onClick={handleSendMessage}
        >
          send
        </button>
      </div>
    </div>
  );
};

export default ChatContainer;
