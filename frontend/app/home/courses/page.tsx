import { fetchFilteredInvoices } from "@/app/lib/data";
import { fetchCourses } from "@/app/lib/data";
import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/invoices/table";
import { CoursesTableSkeleton} from "@/app/ui/dashboard/skeletons";
import { Suspense } from "react";
import { formatDateToLocal, formatCurrency } from "@/app/lib/utils";

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


// export default async function Page({
//   searchParams,
// }: {
//   searchParams?: {
//     query?: string;
//     page?: string;
//   };
// }) {
//   const query = searchParams?.query || "";
//   const currentPage = Number(searchParams?.page) || 1;

//   let courses = []; // Initialize an empty array for courses
//   try {
//     // Fetch courses data from the backend
//     courses = await fetchCourses();
//   } catch (error) {
//     console.error("Error fetching courses:", error);
//     // Handle error fetching courses
//     // For example, show a message to the user or redirect to an error page
//   }

//   if (!Array.isArray(courses) || courses.length === 0) {
//     return (
//       <div className="w-full">
//         <p>No courses available</p>
//         {/* Render pagination or other components as needed */}
//       </div>
//     );
//   }

//   return (
//     <div className="w-full">
//       <div className="mt-4 flex items-center justify-between">
//         <Search placeholder="Search courses..." />
//       </div>
//       {/* Render courses data */}
//       <div>
//         {courses.map((course) => (
//           <div key={course.id}>
//             {/* Render course information */}
//             <h2>{course.title}</h2>
//             <p>{course.description}</p>
//             {/* Add more course details as needed */}
//           </div>
//         ))}
//       </div>
//       {/* Render pagination or other components as needed */}
//     </div>
//   );
// }