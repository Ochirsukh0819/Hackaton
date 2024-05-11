"use client";
import { useEffect, useState } from "react";
import Registerform from "@/components/RegisterForm";
import { QUERY_ALL_COURSES } from "@/query/query";
import { Course } from "@/type";
export const END_POINT_URL = "https://digital.num.edu.mn:4002/graphql";
export const HEADER = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
function Register() {
  const [result, setResult] = useState<Course[] | undefined>(undefined);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = QUERY_ALL_COURSES;

        const response = await fetch(END_POINT_URL, {
          method: "POST",
          headers: HEADER,
          body: JSON.stringify({ query }),
        });

        const responseData = await response.json();
        setResult(responseData.data.courses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(result);
  return (
    <section>
      <Registerform />
    </section>
  );
}

export default Register;
