import PropTypes from "prop-types";
import { Search, MoreVertical, MessageSquarePlus } from "lucide-react";

const mockChats = [
  {
    id: "1",
    name: "John Doe",
    lastMessage: "See you tomorrow!",
    time: "10:30 PM",
    unread: 2,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    name: "Alice Smith",
    lastMessage: "How are you doing?",
    time: "9:45 PM",
    unread: 0,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const ChatList = ({ onChatSelect, selectedChatId }) => {
  return (
    <div className="h-full flex flex-col bg-white border-r">
      {/* Header */}
      <div className="p-4 bg-gray-50 flex justify-between items-center">
        <img
          className="w-10 h-10 rounded-full"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
          alt="Profile"
        />
        <div className="flex gap-4">
          <MessageSquarePlus className="w-6 h-6 text-gray-600 cursor-pointer" />
          <MoreVertical className="w-6 h-6 text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Search */}
      <div className="p-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search or start new chat"
            className="w-full bg-gray-100 py-2 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <Search className="w-5 h-5 text-gray-500 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {mockChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onChatSelect(chat.id)}
            className={`flex items-center p-3 cursor-pointer hover:bg-gray-50 ${
              selectedChatId === chat.id ? "bg-gray-100" : ""
            }`}
          >
            <img
              className="w-12 h-12 rounded-full"
              src={chat.avatar}
              alt={chat.name}
            />
            <div className="ml-4 flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">{chat.name}</h3>
                <span className="text-xs text-gray-500">{chat.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600 truncate">
                  {chat.lastMessage}
                </p>
                {chat.unread > 0 && (
                  <span className="bg-green-500 text-white rounded-full px-2 py-0.5 text-xs">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ChatList.propTypes = {
  onChatSelect: PropTypes.func.isRequired,
  selectedChatId: PropTypes.string,
};

export default ChatList;
