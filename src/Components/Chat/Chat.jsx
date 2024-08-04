import { RiArrowUpCircleLine, RiChat4Line, RiMenuLine } from "@remixicon/react";
import React, { useState, useRef, useEffect } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (event) => {
    event.preventDefault();

    if (!inputText.trim()) return;

    const userMessage = { text: inputText, sender: "user" };
    const body = {
      chatHistory: [...messages, userMessage],
      question: inputText,
    };

    setMessages([...messages, userMessage]);
    setInputText("");

    console.log(body);

    const response = await fetch("http://localhost:5000/ask/${task}", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log(data);
    const botMessage = { text: data, sender: "bot" };
    setMessages((currentMessages) => [...currentMessages, botMessage]);
  };

  return (
    <div className="flex h-screen relative">
      {/* Toggle Button for Sidebar on Mobile */}
      <button
        className="absolute top-4 left-4 md:hidden z-20"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <RiMenuLine size={25} className="mb-4" />
      </button>

      {/* Sidebar */}
      <div
        className={`w-full md:w-1/4 bg-[#F0F4F9] p-6 fixed md:static z-10 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
       <button className="w-[166px] h-[48px] bg-gray-200 text-gray-800 rounded-[30px] mb-6 mt-8 md:mt-0">
  + New Chat
</button>
        <div>
          <h2 className="text-[25px] font-medium mb-3">Latest</h2>
          <ul className="flex flex-col space-y-3">
            <li className="flex items-center bg-[#D3E3FD] text-gray-800 py-2 px-4 rounded-[30px] cursor-pointer">
              <RiChat4Line size={20} className="mr-3" /> We gonna win this
              hackaton guys
            </li>
            <li className="flex items-center bg-[#D3E3FD] text-gray-800 py-2 px-4 rounded-[30px] cursor-pointer">
              <RiChat4Line size={20} className="mr-3" /> We gonna win this
              hackaton guys
            </li>
            <li className="flex items-center bg-[#D3E3FD] text-gray-800 py-2 px-4 rounded-[30px] cursor-pointer">
              <RiChat4Line size={20} className="mr-3" /> We gonna win this
              hackaton guys
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col relative md:ml-0">
        <div className="chat-messages p-6 flex flex-col space-y-4 overflow-y-auto mt-16">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${
                message.sender === "user"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-200 text-gray-800 self-start"
              }`}
            >
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-6 py-3 bg-white">
          <div className="relative">
            <input
              type="text"
              placeholder="Send a message"
              className="w-full py-3 px-4 rounded-[30px] bg-[#F0F4F9] text-[#2C3E50] focus:outline-none"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <RiArrowUpCircleLine
              size={25}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#2C3E50] cursor-pointer"
              onClick={handleSendMessage}
            />
          </div>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="absolute top-4 right-4">
        <img
          src="https://i.pinimg.com/564x/e1/e3/de/e1e3de77966641d554e40e090324ea54.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Chat;
