"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import data from "./user.json";

export default function LoginPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, emailupdate] = useState("");
  const [password, passwordupdate] = useState("");

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const proceedLogin = async (e: any) => {
    e.preventDefault();
    if (validate()) {
      try {
        const foundUser = data.user.find((user) => user.email === email);
        console.log(foundUser);
        if (!foundUser) {
          toast.error("Please Enter valid email");
        } else {
          if (foundUser.password === password) {
            toast.success("Success");
            console.log(foundUser);
            sessionStorage.setItem("email", email);
            router.push("/home");
          } else {
            toast.error("Please Enter valid credentials");
          }
        }
      } catch (error: any) {
        toast.error("Login Failed due to :" + error.message);
      }
    } else {
      toast.error("Please Enter valid credentials");
    }
  };

  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      toast.error("Please Enter Your Information");
    }
    if (password === "" || password === null) {
      result = false;
      toast.error("Please Enter Your Information");
    }
    return result;
  };

  return (
    <div className="flex flex-col justify-center min-h-screen text-center">
      <form onSubmit={proceedLogin}>
        <div className="flex flex-col justify-center items-center p-12">
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ y: { duration: 0.5, yoyo: Infinity } }}
          >
            <Image
              src="/logo.png"
              alt="Vercel Logo"
              width={200}
              height={200}
              priority
            />
          </motion.div>
          <h1 className="text-3xl font-bold mb-2 md:mb-4">
            {loading ? "Processing" : "Log in"}
          </h1>
          <h3 className="text-gray-500 font-light mb-2">
            Login with social network
          </h3>
          <hr />
          <input
            className="p-2 border border-gray-300 rounded-lg mb-4 md:mb-4 focus:outline-none focus:border-gradient-purple-blue w-80 mb-3"
            id="email"
            onChange={(e) => emailupdate(e.target.value)}
            type="text"
            placeholder="Student Email"
          />
          <input
            className="p-2 border border-gray-300 rounded-lg mb-4 md:mb-6 focus:outline-none focus:border-gradient-purple-blue w-80 mb-3"
            id="password"
            type="password"
            onChange={(e) => passwordupdate(e.target.value)}
            placeholder="Silly password"
          />
          <Link
            href="/forgot-password"
            className="font-light mb-2 md:mb-4 text-sm"
          >
            Forgot Password?
          </Link>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="bg-purple-300 text-white p-2 rounded-lg mb-4 md:mb-6 focus:outline-none w-80"
          >
            {loading ? "Logging in..." : "Log in"}
          </motion.button>
          <Link href="/signup" className="hover:text-">
            Visit Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
