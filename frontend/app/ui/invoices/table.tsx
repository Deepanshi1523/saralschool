import Image from "next/image";
import { formatCurrency } from "@/app/lib/utils";

export default async function InvoicesTable({
  courses,
}: {
  courses: object[];
}) {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="pt-2 md:pt-0 flex flex-wrap items-start" style={{backgroundColor:"#e8e7f3"}}>
          {/* <div className="md:hidden">
            {courses?.map((course: any) => {
              return (
                <div
                  key={course.id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        <Image
                            src={"http://localhost:1337" + course.image.url}
                            className="mr-2 rounded-full"
                            width={28}
                            height={28}
                            alt="Course Image"
                        />
                        <p>{course.Title}</p>
                      </div>
                      <p className="text-sm text-gray-500">{course.Student_per_batch}</p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p className="text-xl font-medium">
                        {" "}
                        {formatCurrency(course.cost)}
                      </p>
                      <p>{course.rating}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> */}
              {courses?.map((course: any) => (
                <div
                  key={course.id}
                  className="bg-white m-2 px-2 pt-3 shadow-courses rounded-2xl flex flex-col"
                  style={{width: "350px"}}
                >
                    <div className="flex items-center">
                      <Image
                        src={
                          "http://localhost:1337" + course.image.url
                        }
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${course.title}'s profile picture`}
                      />
                      <p>{course.Title}</p>
                    </div>
                  <div className="whitespace-nowrap px-3 py-3">
                    {course.Student_per_batch}
                  </div>
                  <div className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(course.cost)}
                  </div>
                  <div className="whitespace-nowrap px-3 py-3">
                    {course.rating}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
