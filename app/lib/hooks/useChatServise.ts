import {
    collection,
    doc,
    onSnapshot,
    query,
    setDoc,
    orderBy,
    limit
  } from "firebase/firestore";
  import { db } from "../../lib/firebase";
  import { Message } from "../../models/message";
  import { useState } from "react";
  import { Unsubscribe } from "@firebase/database";
  
  export const CHAT_COLLECTION = "chat";
  
  export default function useChatService() {
    const [currentChatMessages, setCurrentMessages] = useState<Message[] | null>(null);
  
    const CHAT_COLLECTION = "chats";
    const CHAT_ID = "D7FFB7RBNFU704"; //TODO: CREATE DIFFERENT CHATS
    const MESSAGE_COLLECTION = "messages";

    // Create a new message in a chat
    async function createMessage(message: Message): Promise<void> {
      try {
        await setDoc(
            doc(db, `${CHAT_COLLECTION}/${CHAT_ID}/${MESSAGE_COLLECTION}`, message.id),
            message
          );
      } catch (error) {
        console.error(error);
      }  
    }

    // Get last number of messages from a chat as snapshot of the collection
    async function getLastMessages(number: number): Promise<Unsubscribe> {
      return onSnapshot(
        query(
          collection(db, `${CHAT_COLLECTION}/${CHAT_ID}/${MESSAGE_COLLECTION}`),
          orderBy("createdAt", "asc"),
          limit(number)
        ),
        (querySnapshot) => {
          const messages: Message[] = [];
          querySnapshot.forEach((doc) => {
            messages.push(doc.data() as Message);
          });
          setCurrentMessages(messages);
        },
        (err) => {
          console.error(err);
          setCurrentMessages([]);
        }
      );
    }
  
    return {
        currentChatMessages,
        createMessage,
        getLastMessages
    };
  }
  