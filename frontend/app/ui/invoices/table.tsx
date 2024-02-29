import Image from "next/image";
import { formatCurrency } from "@/app/lib/utils";

export default async function InvoicesTable({
  courses,
}: {
  courses: object[];
}) {
  return (
    <div className="mt-4 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="pt-1 md:pt-0 flex flex-wrap items-start justify-between ">
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
                  className="bg-white m-2 px-2 pt-3 shadow-courses rounded-2xl flex flex-col relative shadow-lg"
                  style={{width: "375px", height:"500px"}}
                >
                    <div className="flex items-center">
                      <Image
                        src={
                          "http://localhost:1337" + course.image.url
                        }
                        className="rounded-t-2xl pt-2"
                        width={375}
                        height={400}
                        alt={`${course.title}'s profile picture`}
                        style={{height:"200px"}}
                      />
                      <span className="absolute top-2 right-5 bg-blue-300 font-bold text-black text-xm px-2 py-1 rounded-full">
                        Best Seller
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <div style={{width:"200px"}}>
                        <p className="text-black font-bold text-lg">{course.Title}</p>
                        <div className="text-sm">
                          {course.Student_per_batch} students per batch
                        </div>
                      </div>
                      <div className="flex flex-col text-sm items-end">
                        <div className="pr-2 text-red-500 font-bold">{course.rating}/5</div>
                        <div className="flex">
                          {[...Array(Math.ceil(course.rating))].map((_, index) => (
                            <Image
                              key={index}
                              src="/star.svg"
                              className="mr-1"
                              width={15}
                              height={15}
                              alt="star"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="whitespace-nowrap px-3 py-3">
                      {formatCurrency(course.cost)}
                    </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
