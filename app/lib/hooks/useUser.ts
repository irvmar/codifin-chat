import { User } from "@/app/models/user";

    export default function useUserService() {
   
    function createUser(): User {
      const user = {
        id: Math.random().toString(36).substring(7),
        name: "Usuario Codifin"
      };
      return user;
    }


    return {
        createUser
    };
  }
  