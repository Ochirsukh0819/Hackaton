import { InputType } from "@/type";
import React, { useState } from "react";

export default function Input({
  labelName,
  type,
  inputState,
  inputSetState,
  isImage,
  command,
}: InputType) {
  return (
    <section>
      <div>
        <label className="block text-sm font-medium leading-6 text-black">
          {labelName}
        </label>
        <div className="">
          {type === "file" ? (
            <input
              onChange={(e: any) => {
                inputSetState(e.target.files![0]);
              }}
              name="recfile"
              type={type}
              accept={`${isImage === true ? "image/*" : "application/pdf"}`}
              className=" w-full p-3 cursor-pointer "
            />
          ) : (
            <section className="relative">
              <input
                onChange={(e) => {
                  inputSetState(e.target.value);
                }}
                value={inputState}
                id={labelName}
                name={labelName}
                type={type}
                autoComplete={labelName}
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </section>
          )}
        </div>
      </div>
    </section>
  );
}
