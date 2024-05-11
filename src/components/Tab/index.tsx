"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Button from "../Button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LectureTab from "../LectureTab";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[700px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Лекцийн тэмдэглэл</TabsTrigger>
        <TabsTrigger value="password">QUIZ</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Веб програмчлал</CardTitle>

            <CardDescription>
              Веб програмчлалын лекцийн тэмдэглэл
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <LectureTab />
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>hahkdskgdakhadghdgahklshkga</div>
          </CardContent>
          <CardFooter>
            <Button buttonType="submit" buttonName="Нэвтрэх" />
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
