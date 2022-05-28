import React, { useState } from "react";
import { useChat } from "../contexts/ChatContext";
import Avatar, { ConfigProvider } from "react-avatar";
import ScrollableFeed from "react-scrollable-feed";

function ChaList() {
  const { chat } = useChat();

  return (
    <div className="chat-list">
      <ConfigProvider colors={["red", "green", "blue"]}>
        <ScrollableFeed>
          {chat.map((item, i) => (
            <div
              key={i}
              className={`chat-item-container ${
                item.isFromMe ? "from-me" : ""
              }`}
            >
              <div className="chat-item">
                {item.text}
                <Avatar
                  name="Wim Mostmans"
                  round={true}
                  size="21"
                  className={`${item.isFromMe ? "me" : "notMe"}`}
                />
              </div>
            </div>
          ))}
        </ScrollableFeed>
      </ConfigProvider>
    </div>
  );
}

export default ChaList;
