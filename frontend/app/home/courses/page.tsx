import { fetchCourses } from "@/app/lib/data";
import { fetchMasterCourses } from "@/app/lib/data";
import Table from "@/app/ui/invoices/table";
import Master from "@/app/ui/invoices/master";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";

  const { data: courses} = await fetchCourses(query);
  const {data: masterCourses}=await fetchMasterCourses(query);
  return (
    <div className="w-full">
        <Master masterCourses={masterCourses}/>
        <Table courses={courses}/>
    </div>
  );
}