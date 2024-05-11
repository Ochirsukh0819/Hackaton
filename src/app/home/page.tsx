"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function HomePage() {
  const router = useRouter();
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prevStep) => (prevStep === 3 ? 0 : prevStep + 1));
    }, 1000); // Change the duration to adjust animation speed

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
      router.push("/course");
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
    }
  };
  return (
    <main>
      <div className="text-white h-screen flex mx-0 md:mx-40 justify-around items-center">
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.7 }}
          className=""
          onClick={onSearch}
          animate={{ scale: [0, 1, 0.5, 1] }}
          transition={{ times: [0, 1.1, 2.9, 4] }}
        >
          <Image
            src="/2.png"
            alt="Vercel Logo"
            width={150}
            height={150}
            priority
          />
        </motion.button>
        <motion.div
          animate={{ scale: [0, 1, 0.5, 1] }}
          transition={{ times: [0, 1.1, 2.9, 4] }}
        >
          <Image
            src="/3.png"
            alt="Vercel Logo"
            width={500}
            height={500}
            priority
          />
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.7 }}
          className=""
          onClick={onCourse}
          animate={{ scale: [0, 1, 0.5, 1] }}
          transition={{ times: [0, 1.1, 2.9, 4] }}
        >
          <Image
            src="/1.png"
            alt="Vercel Logo"
            width={150}
            height={150}
            priority
          />
        </motion.button>
      </div>
    </main>
  );
}
