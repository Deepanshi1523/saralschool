import { fetchCourses } from "@/app/lib/data";
import Search from "@/app/ui/search";
import Table from "@/app/ui/invoices/table";
import { CoursesTableSkeleton} from "@/app/ui/dashboard/skeletons";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";

  const { data: courses} = await fetchCourses(query);
  return (
    <div className="w-full">
      <div className="mt-4 flex items-center justify-between">
        <Search placeholder="Search courses..." />
      </div>
      <Suspense key={query} fallback={<CoursesTableSkeleton/>}>
        <Table courses={courses}/>
      </Suspense>
    </div>
  );
}