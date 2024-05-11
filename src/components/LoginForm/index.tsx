"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useUser } from "../../context/testContext";
import Input from "../Input";
import Button from "../Button";
import Link from "next/link";

function LoginForm() {
  const { login } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <div>
      <>
        <div className="flex  min-h-screen flex-1 flex-col justify-center sm:px-6 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
              <div className="sm:mx-auto sm:w-full sm:max-w-md mb-10">
                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Нэвтэрч орно уу
                </h2>
              </div>
              <form
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  toast.success("Амжилттай нэвтэрлээ");
                  //   setIsLoading(true);

                  //   const res = await login(email, password);

                  //   if (res === "invalid") {
                  //     toast.error("Хэрэглэгчийн нэр эсвэл нууц үг буруу байна");
                  //   } else {
                  //     toast.success("Амжилттай нэвтэрлээ");
                  //   }
                  //   setIsLoading(false);
                  // }}
                }}
              >
                <Input
                  labelName="Имайл"
                  type="text"
                  inputState={email}
                  inputSetState={setEmail}
                />
                <Input
                  labelName="Нууц үг"
                  type="password"
                  inputState={password}
                  inputSetState={setPassword}
                />

                <Button
                  buttonType="submit"
                  buttonName="Нэвтрэх"
                  loading={isLoading}
                />
              </form>

              <div className="flex gap-2 items-center mt-4 justify-center">
                <p className="text-[#484b4f] text-sm">Бүртгэлгүй юу?</p>
                <Link href="/register">
                  <div className="text-indigo-600">Бүртгүүлэх</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default LoginForm;
