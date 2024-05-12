"use client";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const [isSaved, setIsSaved] = useState<boolean>(true);
  const isSessionStorageAvailable =
    typeof window !== "undefined" && window.sessionStorage;
  const savedCourses = isSessionStorageAvailable
    ? JSON.parse(window.sessionStorage.getItem("saveCourses") || "[]")
    : [];

  return (
    <section className="w-full flex items-center gap-20 px-24 mt-10">
      <ul className="w-1/2 p-2">
        {savedCourses.map((course: string, index: number) => (
          <li key={index} className="text-xl flex  items-center">
            <div className="flex flex-col pr-20">
              <p>Веб аппликейшн (ICS302)</p>
              <p>2 лекц, 2 асуулт</p>
            </div>
            <div onClick={() => setIsSaved(!isSaved)}>
              <p className="items-center">
                {isSaved ? <FaStar /> : <CiStar />}
              </p>
              <Button
                onClick={() => {
                  router.push(`/courses/${course}`);
                }}
              >
                Хичээл харах
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
