import React from "react";
import Documents from "../Documents";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSpacing() {
  return (
    <div className="w-[520px] flex  flex-col  ml-6 ">
      <div className="flex flex-col">
        <>
          <Carousel className="w-[95%] ">
            <CarouselContent>
              {Array.from({ length: 4 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Documents
                    fileUrl="https://storage.googleapis.com/diplomaadmin-a41c3.appspot.com/documents/2024%20-%C3%91%C2%85%C3%90%C2%B0%C3%90%C2%B2%C3%90%C2%B0%C3%91%C2%80%20%C3%92%C2%AF%C3%90%C2%B5%C3%91%C2%87%C3%90%C2%B8%C3%90%C2%BB%C3%91%C2%81%C3%91%C2%8D%C3%90%C2%BD%20%C3%91%C2%82%C3%93%C2%A9%C3%90%C2%BB%C3%93%C2%A9%C3%90%C2%B2%C3%90%C2%BB%C3%93%C2%A9%C3%90%C2%B3%C3%93%C2%A9%C3%93%C2%A9%20%281%29.pdf?GoogleAccessId=firebase-adminsdk-v6ryy%40diplomaadmin-a41c3.iam.gserviceaccount.com&Expires=1723996800&Signature=J7cgXOxWH8LSJOsumvMyOEurydPAXYoIOpQ9fk5dkd5ngg%2BXMx5N5SQz5BfyJC9gHtBXXKg0%2F7Kf3HtwV58W%2BKBsAz9YWLrLRsi842hZb1O%2FaubF9pEvKi%2FFxiRhpzxG0Boak%2F116jhTnc2N9Xa9RF8w2QNc6qMuwfqzDtMaWmB9BL9rByGERJWtvEV76F6hBH7LQIrGYnZyXAV32rc5Pa4mh2ykPvV6FxBRn%2FL%2B4EG0jPRlNjjSesWnNFaah8lVyd9zaTaVFZCRtIFCJkV4bGcsCpSFWHTkRPn1OKl%2BoSGqv6TBfTqhXpHdFttKGAMiyLWEFBmw%2FrRnWfrK%2FLt%2Bjg%3D%3D"
                    studentName="Х.Очирсүх"
                    studentId="20b1num0429"
                    rate="90%"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </>
      </div>
    </div>
  );
}
