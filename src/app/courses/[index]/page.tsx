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
  return(
  <section className="w-full flex items-center justify-center gap-10 px-6 mt-10 h-max">
    <section className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-6">
      <h2 className="font-bold text-3xl mb-4">
        {courseData[0].Монгол_нэр}
        <span className="text-gray-600 text-lg">({courseData[0].Хичээлийн_индекс})</span>
      </h2>
      <div className="mb-6">
        <p className="font-semibold">Зорилго:</p>
        <p className="text-gray-800">
          {courseData[0].зорилго !== null ? courseData[0].зорилго : "Мэдээлэл байхгүй"}
        </p>
      </div>
      <div className="mb-6">
        <p className="font-semibold">Агуулга:</p>
        <p className="text-gray-800">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
          ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
          porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
          dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
          nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
          ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
          voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem
          eum fugiat quo voluptas nulla pariatur?
        </p>
      </div>
      <div className="text-sm text-gray-600">
        багц цаг: 2 | Улирал: Хаврын улирал | Түвшин: Бакалавр | бүрэлдэхүүн: СемИнар
      </div>
      <div className="mt-4 text-gray-600">Багш: Үйтүмэн</div>
    </section>
    <section className="w-full lg:w-1/2 h-max">
      <TabsDemo />
    </section>
  </section>
  );
}

export default Courses;
