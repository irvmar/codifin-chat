"use client";
import Image from "next/image";
import ChatInput from "./components/chat-input";
import useChatService from "./lib/hooks/useChatServise";
import { useEffect, useRef, useState } from "react";
import { Message } from "./models/message";
import { User } from "./models/user";
import MessageBubble from "./components/message-bubble";
import useUserService from "./lib/hooks/useUser";
import { Timestamp } from "firebase/firestore";
import { v4 } from "uuid";
import NameModalComponent from "./components/name-modal";

export default function Home() {
  const {
    createMessage,
    getLastMessages,
    currentChatMessages: messages,
  } = useChatService();
  const { createUser } = useUserService();
  const [user, setUser] = useState<User>({} as User);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // use Effect that loads user from storage and sets it to state, if there is no user in storage, open modal to write user name and save it to storage
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));

      //Get messages
      getLastMessages(50);
    } else {
      console.log(user, "No hubo User");
      setIsModalOpen(true); // No user found, so open the modal
    }
  }, []);

  //Always scroll to bottom once messages list changed
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  function createMessageProperties(message: string): Message {
    return {
      id: v4(), //Random id
      createdAt: Timestamp.now(),
      text: message,
      userId: user.id,
      userName: user.name,
    };
  }

  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleUserSubmit(userName: string) {
    //Create random user
    const newUser = { ...createUser(), name: userName };
    console.log(newUser, 'newUserrrrr');
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    //Get messages
    getLastMessages(50);
  }

  return (
    <>
      {isModalOpen && (
        <NameModalComponent
          isOpen={isModalOpen}
          onSubmit={handleUserSubmit}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <main className="flex w-full min-h-screen flex-col items-center justify-between p-8 ">
        {!isModalOpen && (
          <div className="flex flex-col items-center justify-between w-full max-w-[1200px]">
            <div className="w-full flex items-center justify-center bg-white fixed top-0">
              <Image
                src={
                  "https://assets-global.website-files.com/63b4bdea9865273fd745b3af/63b4bdea9865273cf545b3d1_Asset%206%403x.png"
                }
                alt="Codifin"
                width={200}
                height={100}
              />
            </div>

            <div className="flex-1 w-full h-full space-y-6 overflow-y-auto rounded-xl bg-slate-200 p-4 my-8 text-sm leading-6 text-slate-900 shadow-sm dark:bg-slate-900 dark:text-slate-300 sm:text-base sm:leading-7">
              {
                // map messages
                messages &&
                  messages.map((message) => (
                    <MessageBubble
                      key={message.id}
                      message={message}
                      user={user}
                    />
                  ))
              }
              {messages && messages.length < 1 && (
                <p className="w-full text-center">¡Aún no hay mensajes! 😔 </p>
              )}
              {!messages && (
                <p className="w-full text-center">Cargando mensajes... 🧘 </p>
              )}
              {/* Empty Ref for bottom scroll */}
              <div ref={messagesEndRef}></div>
              {/* Input box with static text */}
              <ChatInput
                onSend={async (messageText) =>
                  await createMessage(createMessageProperties(messageText))
                }
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
