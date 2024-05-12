"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ButtonDialog from "@/components/ButtonDialog";
import ButtonDialog2 from "@/components/ButtonDialogSecond";

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
      router.push("/Command/Search");
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
      <div className="flex md:flex-row md:justify-center lg:px-12 gap-3  md:mt-5 flex-col px-3 md:px-5 mt-8">
        <section className="md:w-[55%] flex flex-col w-[20%] justify-start px-3">
          <section className="flex flex-col gap-5">
            <h3 className="text-black font-bold xl:text-base  lg:text-sm md:text-2xl text-2xl">
              Оюутны бүтээлийн бичиг баримт болон бусад бүтээлийг{" "}
              <span className="text-[#245BFF]">нэг дороос</span>
            </h3>
            <p className="lg:text-[1rem] text-[#34444B] text-base ">
              Оюутны бүтээлийн мэдээллийг хялбар,
              <span className="font-bold pl-1">нэгдсэн байдлаар</span> харах, мөн
              өөрсдийн бүтээлээ оруулж бусдад хуваалцах боломжтой.
            </p>
          </section>
        </section>
      </div>
      <div className="text-white h-auto flex mx-5 md:mx-40 ml:mx-80 my-10 justify-around items-start ">
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
        <motion.div
          animate={{ scale: [0, 1, 0.5, 1] }}
          transition={{ times: [0, 1.1, 2.9, 4] }}
          className="w-1000 h-1000"
        >
          <Image
            src="/3.png"
            alt="Vercel Logo"
            width={1000}
            height={1000}
          />
        </motion.div>
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
      </div>
    </main>
  );
}