// UserContext.tsx
"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import { login as apiLogin, decodeJwt } from "../api";
import { User, LoginInput } from "@/type";

const initialState: User = {
  uid: " ",
  email: " ",
  token: "",
  userType: " ",
  studentId: " ",
  userName: " ",
  tokenExpiration: 0,
};

interface UserContextProps {
  user: User | null;
  login: (email: string, password: string) => any;
  logout: () => void;
}

const initialContext: UserContextProps = {
  user: initialState,
  login: () => {},
  logout: () => {},
};

export const UserContext = createContext<UserContextProps | undefined>(
  initialContext
);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const login = async (email: string, password: string) => {
    const res = await apiLogin({ email, password } as LoginInput);

    // if (res === "error") return "invalid";

    // const token = res;
    // localStorage.setItem("token", token);
    // const decoded = decodeJwt(token) as any;

    // setUser({
    //   uid: decoded["user_id"],
    //   email: decoded["email"],
    //   token: token,
    //   userType: decoded["role"],
    //   studentId: decoded["studentId"],
    //   userName: decoded["name"],
    //   tokenExpiration: decoded["exp"] || 0,
    // });

    router.push("/");
    return "";
  };

  const logout = () => {
    setUser(initialState);
    localStorage.clear();
    router.push("/login");
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
  async function checkToken() {
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        const decoded = decodeJwt(token!) as any;
        setUser({
          uid: decoded["user_id"],
          email: decoded["email"],
          token: token,
          userType: "",
          studentId: decoded["studentId"],
          userName: decoded["name"],
          tokenExpiration: decoded["exp"] || 0,
        });
      }
    } catch (e) {
      console.error(e);
    }
  }
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
