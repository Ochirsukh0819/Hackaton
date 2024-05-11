"use client";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import React, { useState, useEffect } from "react";
// import { getStudentCreation } from "@/api";
// import { useRequest } from "ahooks";
import Link from "next/link";
import { coursesJson } from "@/lib/utils";

export function CommandDemo() {
  const [creationData, setCreationData] = useState<any>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("gg: ", coursesJson);
        setCreationData(coursesJson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  console.log("yachu: ", creationData);

  const filteredId =
    query === ""
      ? []
      : creationData.filter((item: any) => {
          return item.Монгол_нэр.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput
        placeholder=" Оюутны дугаар / Оюутны нэрээр хайх"
        onChangeCapture={(e: any) => {
          setQuery(e.target.value);
        }}
      />
      <CommandList>
        <CommandEmpty>Хайлт олдсонгүй</CommandEmpty>

        <CommandSeparator />
        <CommandGroup heading="Хичээлийн нэр">
          {filteredId.length > 0 ? (
            filteredId.map((item: any) => (
              <Link
                href={`/courses/${item.Хичээлийн_дугаар}`}
                key={item.Хичээлийн_дугаар}
              >
                <CommandItem className="cursor-pointer px-4 py-2">
                  {item.Монгол_нэр}
                </CommandItem>
              </Link>
            ))
          ) : (
            <p></p>
          )}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
