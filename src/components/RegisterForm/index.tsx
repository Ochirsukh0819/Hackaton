"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import Input from "../Input";
import Button from "../Button";
import Link from "next/link";
import { registerUser } from "@/api";
function Registerform() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studentId, setStudentId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <>
        <div className="flex  min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
              <div className="sm:mx-auto sm:w-full sm:max-w-md mb-10">
                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Бүртгүүлэх хэсэг
                </h2>
              </div>
              <form
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsLoading(true);
                  const res = await registerUser({
                    userName,
                    email,
                    password,
                    studentId,
                  });

                  if (res.success) {
                    toast.success("Амжилттай бүртгэгдлээ");
                    router.push("/login");
                  } else {
                    toast.error(res.error);
                  }

                  setIsLoading(false);
                }}
              >
                <Input
                  labelName="И-мэйл"
                  type="email"
                  inputState={email}
                  inputSetState={setEmail}
                />
                <Input
                  labelName="Хэрэглэгчийн нэр"
                  type="text"
                  inputState={userName}
                  inputSetState={setUserName}
                />
                <Input
                  labelName="Оюутны дугаар"
                  type="text"
                  inputState={studentId}
                  inputSetState={setStudentId}
                />
                <Input
                  labelName="Нууц үг"
                  type="password"
                  inputState={password}
                  inputSetState={setPassword}
                />

                <Button
                  buttonType="submit"
                  buttonName="Бүртгүүлэх"
                  loading={isLoading}
                />
              </form>
              <div className="flex gap-2 items-center mt-4 justify-center">
                <p className="text-[#484b4f] text-sm">Бүртгэлтэй юу?</p>
                <Link href="/login">
                  <div className="text-indigo-600">Нэвтрэх</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Registerform;
