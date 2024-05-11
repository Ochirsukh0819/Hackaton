"use client";
import React, { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { AiFillEye } from "react-icons/ai";
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
import PDF from "../PDF";
import { DocumentType } from "@/type";

import { IoIosSend } from "react-icons/io";
import { CardWithForm } from "../Card";

function DialogComponent({
  id,
  fileUrl,
  studentName,
  studentId,
  rate,
}: DocumentType) {
  return (
    <section className="w-full">
      <Dialog>
        <DialogTrigger asChild>
          <div>
            <Button
              borderRadius="2rem"
              className="text-[#00214D] border-neutral-200  cursor-pointer bg-[#00283d] bg-opacity-10"
            >
              <div className="flex gap-2 items-center">
                <div className="font-bold">Унших</div>
                <AiFillEye />
              </div>
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="lg:w-full p-4  w-[120%]">
          <DialogHeader>
            <DialogTitle>Мэдээлэл</DialogTitle>
            <DialogDescription>
              <div className="mt-3 w-full h-[1px] bg-[#505050] mb-3"></div>
            </DialogDescription>
          </DialogHeader>

          <section className="flex md:gap-10 md:flex-row flex-col ">
            <section>
              <CardWithForm id={id} studentId={studentId} rate={rate} />
            </section>

            <section className="w-full">
              <PDF documentUrl={fileUrl!} />
            </section>
          </section>

          <DialogFooter className="sm:justify-end ">
            <div className="text-[12px] text-[#a4a3a3]">Powered by Оожоо</div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default DialogComponent;
