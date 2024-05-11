import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "react-toastify";

import { CardType } from "@/type";

import { useUser } from "@/context/testContext";

export function CardWithForm({ studentName, studentId, rate }: CardType) {
  const { user } = useUser();

  return (
    <section>
      <Card className="lg:w-[350px] w-full flex flex-col">
        <CardHeader>
          <CardTitle>Лекц 1</CardTitle>
        </CardHeader>
        <CardContent>
          <section className="flex flex-col gap-4">
            <p> Оюутны нэр: {studentName}</p>
            <p> Оюутны дугаар: {studentId}</p>
            <p> Үнэлгээ: {rate}</p>
          </section>
        </CardContent>
      </Card>
    </section>
  );
}
