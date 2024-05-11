"use client";
import { TabsDemo } from "@/components/Tab";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { coursesJson } from "@/lib/utils";

function Courses() {
  const [courseData, setCourseData] = useState<any>([]);
  const params = useParams<{ index: string }>();
  const [loading, setLoading] = useState<boolean>(true);

  console.log("params: ", params.index);

  useEffect(() => {
    const fetchData = async () => {
      const filterData: any = coursesJson.filter((item: any) => {
        return item.Хичээлийн_дугаар === params.index;
      });

      console.log("filterData", filterData);
      setCourseData(filterData);
      setLoading(false);
      try {
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [params.index]);

  if (loading) {
    return <section>loading ...</section>;
  }

  console.log("data: ", courseData[0].зорилго);
  return (
    <section className="w-full flex gap-20 px-24 mt-10">
      <section className="flex flex-col gap-2 w-[50%]">
        <h2 className="font-bold text-2xl">
          {courseData[0].Монгол_нэр}
          <span>({courseData[0].Хичээлийн_индекс})</span>
        </h2>
        <div className="flex">
          {" "}
          <p class="text-xs">
            <span class="font-semibold">Багц цаг: </span> 2 |  
            <span class="font-semibold"> Улирал:</span> Хаврын улирал | 
            <span class="font-semibold"> Түвшин:</span> Бакалавр | 
            <span class="font-semibold"> Бүрэлдэхүүн:</span> Семниар
          </p>
        </div>
        <div>
          <span class="font-semibold"> Багш:</span> Үйтүмэн
        </div>
        <div className="">
          <p class="font-semibold">Зорилго:</p>
          {courseData[0].зорилго !== null ? (
            <p>{courseData[0].зорилго}</p>
          ) : (
            <p>Мэдээлэл байхгүй</p>
          )}
        </div>
        <div class="text-justify">
          <span class="font-semibold">Агуулга: </span>
          <span>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </span>
        </div>
      </section>
      <section className="w-[50%]">
        <TabsDemo />
      </section>
    </section>
  );
}

export default Courses;
