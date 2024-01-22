import { Timestamp } from "firebase/firestore";

export interface Message {
  id: string;
  userId?: string;
  createdAt: Timestamp;
  text: string;
}

