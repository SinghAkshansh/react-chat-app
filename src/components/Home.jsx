import { useState } from "react";
import ChatList from "./ChatList";
import ChatView from "./ChatView";

const Home = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);

  return (
    <div className="h-screen flex bg-gray-100">
      <div className="container mx-auto h-full flex shadow-lg">
        {/* Chat List */}
        <div className="w-1/3 h-full">
          <ChatList
            onChatSelect={setSelectedChatId}
            selectedChatId={selectedChatId}
          />
        </div>

        {/* Chat View */}
        <div className="w-2/3 h-full">
          <ChatView chatId={selectedChatId} />
        </div>
      </div>
    </div>
  );
};

export default Home;
