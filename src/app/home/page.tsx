"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import ButtonDialog from "@/components/ButtonDialog";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import ButtonDialog2 from "@/components/ButtonDialogSecond";
import Footer from "@/components/Footer";

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
      router.push("/Command/Search");
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
      <div className="text-white flex mx-40 mt-5 justify-center items-start">
        <div className="flex md:flex-column md:justify-center lg:px-12 gap-3 md:mt-5 flex-col px-3 md:px-5 mt-8">
          <section className="md:w-[100%] flex flex-col w-[100%] justify-start px-3">
            <section className="flex flex-col gap-5">
              <h3 className="text-black font-bold lg:text-4xl md:text-3xl sm:text-xl text-5xl">
                Оюутны хичээлийн лекц болон хичээлдээ илүү бэлдэх quiz-ийг{" "}
                <span className="text-[#245BFF]">нэг дороос</span>
              </h3>
              <p className="lg:text-[1rem] text-[#34444B] text-base ">
                Оюутны хичээлийг илүү хялбар бэлдэх,
                <span className="font-bold pl-1">нэгдсэн байдлаар</span> харах, мөн
                өөрсдийн quiz болон лекцээ оруулж бусдад хуваалцах боломжтой.
              </p>
            </section>
          </section>
          <div className="flex flex-row">
          <div className="ms-12">
            <Image
              src="/image1.png"
              alt="Vercel Logo"
              width={225}
              height={150}
              priority
              className="w-600 h-600 pt-12"
            />
            <ButtonDialog />
          </div>
          <div className="ms-12">
            <Image
              src="/image2.png"
              alt="Vercel Logo"
              width={225}
              height={150}
              priority
              className="w-600 h-600 pt-12"
            />
            <ButtonDialog2 />
          </div>
          </div>
      </div>
        <motion.div
          animate={{ scale: [0, 1, 0.5, 1] }}
          transition={{ times: [0, 1.1, 2.9, 4] }}
          className="w-full pl-24"
        >
          <Image
            src="/person.png"
            alt="Vercel Logo"
            width={250} // Adjust width as needed
            height={500} // Adjust height as needed
          />
        </motion.div>
      </div>
      <Footer/>
    </main>
  );
}