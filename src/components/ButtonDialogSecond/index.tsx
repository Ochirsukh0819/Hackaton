"use client";
import React from "react";
import { LuPencil } from "react-icons/lu";
import { Button } from "../ui/moving-border";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Search from "../Search";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { CommandDemo } from "../Command";
import { AiOutlineSearch, AiOutlineStar } from "react-icons/ai";

function ButtonDialog2() {
  return (
    <section>
      <Dialog>
        <DialogTrigger asChild>
          <button className="border-2 border-white/20 text-white bg-[#3364C3] font-semibold text-sm w-fit  shadow-[0px_0px_24px_0px_#799BFF] flex flex-row items-center gap-2 cursor-pointer rounded-xl  md:py-[0.6rem] md:px-[1rem] md:text-[1.2rem] py-[0.5rem] px-[1.2rem] text-[1.2rem] hover:bg-opacity-90">
            <p className="text-white font-bold md:text-[1rem] text-[1.2rem]">
              Миний хичээлүүд
            </p>
            <div className="text-2xl">
              <AiOutlineStar />
            </div>
          </button>
        </DialogTrigger>
        
      </Dialog>
    </section>
  );
}

export default ButtonDialog2;
