import PropTypes from "prop-types";
import {
  Phone,
  Video,
  MoreVertical,
  Smile,
  Paperclip,
  Mic,
  Send,
} from "lucide-react";

import { useState } from "react";
const mockMessages = [
  {
    id: "1",
    content: "Hey, how are you?",
    sent: true,
    time: "10:00 AM",
  },
  {
    id: "2",
    content: "I'm good, thanks! How about you?",
    sent: false,
    time: "10:02 AM",
  },
  {
    id: "3",
    content: "Pretty good! Want to grab lunch later?",
    sent: true,
    time: "10:03 AM",
  },
];

const ChatView = ({ chatId }) => {
  const [message, setMessage] = useState("");

  if (!chatId) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Select a chat to start messaging</p>
      </div>
    );
  }

  const handleSend = () => {
    if (message.trim()) {
      // Here you'll integrate with your backend API
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="h-full flex flex-col bg-[#efeae2]">
      {/* Chat Header */}
      <div className="bg-gray-50 p-4 flex justify-between items-center border-b">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            alt="Contact"
          />
          <div className="ml-4">
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-sm text-gray-500">Online</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Video className="w-6 h-6 text-gray-600 cursor-pointer" />
          <Phone className="w-6 h-6 text-gray-600 cursor-pointer" />
          <MoreVertical className="w-6 h-6 text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {mockMessages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sent ? "justify-end" : "justify-start"
            } mb-4`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                msg.sent
                  ? "bg-[#dcf8c6] rounded-tr-none"
                  : "bg-white rounded-tl-none"
              }`}
            >
              <p className="text-gray-800">{msg.content}</p>
              <p className="text-xs text-gray-500 text-right mt-1">
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-gray-50 p-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <button className="text-gray-500 hover:text-gray-700">
              <Smile className="w-6 h-6" />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <Paperclip className="w-6 h-6" />
            </button>
          </div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message"
            className="flex-1 bg-white rounded-lg px-4 py-2 focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="text-gray-500 hover:text-gray-700"
          >
            {message.trim() ? (
              <Send className="w-6 h-6" />
            ) : (
              <Mic className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

ChatView.propTypes = {
  chatId: PropTypes.string,
};

export default ChatView;
