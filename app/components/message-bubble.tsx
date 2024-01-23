import React from "react";
import { Message } from "../models/message";
import { User } from "../models/user";

interface MessageBubbleProps {
  message: Message;
  user: User;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, user }) => {
  return (
    <>
      {message.userId === user.id ? (
        <div className="flex flex-row-reverse items-start">
          <div
          className="flex-shrink-0 h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-slate-50 ml-2"
          >
            {( message.userName?.charAt(0) || "C") + (message.userName?.split(" ")[1]?.charAt(0) || "")}
          </div>

          <div className="flex flex-col min-h-[85px] rounded-b-xl rounded-tl-xl bg-slate-50 p-4 dark:bg-slate-800 sm:min-h-0 sm:max-w-md md:max-w-2xl">
            <p className="font-bold">
              {message.userName}
              {/* #{message.userId}  Set if we want to show an ID*/}
            </p>

            <p> {message.text} </p>
          </div>
        </div>
      ) : (
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-slate-50 mr-2"
          >
            {( message.userName?.charAt(0) || "C") + (message.userName?.split(" ")[1]?.charAt(0) || "")}
          </div>
          <div className="flex flex-col rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl">
            <p className="font-bold">
              {message.userName}
              {/* #{message.userId}  Set if we want to show an ID*/}
              </p>
            <p> {message.text} </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageBubble;
