"use client";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function MyCourses() {
  const router = useRouter();
  const [isSaved, setIsSaved] = useState<boolean>(true);
  const isSessionStorageAvailable =
    typeof window !== "undefined" && window.sessionStorage;
  const savedCourses = isSessionStorageAvailable
    ? JSON.parse(window.sessionStorage.getItem("saveCourses") || "[]")
    : [];

  return (
    <section className="w-full flex items-center justify-center px-8 mt-10">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {savedCourses.map((course: string, index: number) => (
          <li key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="text-xl font-semibold mb-4">Веб аппликейшн (ICS302)</h2>
                <p className="text-sm text-gray-600 mb-2">2 лекц, 2 асуулт</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button className="flex items-center text-yellow-500">
                  {isSaved ? <FaStar /> : <CiStar />}
                </button>
                <Button onClick={() => router.push(`/courses/${course}`)}>
                  Хичээл харах
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
