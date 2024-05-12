"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ButtonDialog from "@/components/ButtonDialog";
import ButtonDialog2 from "@/components/ButtonDialogSecond";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ButtonDialog from "@/components/ButtonDialog";
import ButtonDialogSecond from "@/components/ButtonDialogSecond";
export default function HomePage() {
  const router = useRouter();
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prevStep) => (prevStep === 3 ? 0 : prevStep + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const onSearch = async () => {
    try {
      router.push("/search");
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
    }
  };
  const onCourse = async () => {
    try {
      router.push("/myCourses");
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
    }
  };
  return (
    <main>
      <div className="text-white h-screen flex p-20  mx-0 md:mx-40 justify-around items-center">
        {/* <div className="text-black font-sans text-lg">Search</div> */}
        <ButtonDialog></ButtonDialog>
        <motion.div
          animate={{ scale: [0, 1, 0.5, 1] }}
          transition={{ times: [0, 1.1, 2.9, 4] }}
        >
          <Image
            src="/3.png"
            alt="Vercel Logo"
            width={700}
            height={700}
            priority
          />
        </motion.div>
        <ButtonDialog2></ButtonDialog2>
        {/* <div className="text-black font-sans text-lg">My lessons</div> */}

      </div>
    </main>
  );
}
