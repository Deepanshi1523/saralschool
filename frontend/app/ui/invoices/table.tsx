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
                  className="bg-white mb-10 px-2 pt-3 shadow-courses rounded-2xl flex flex-col relative shadow-xl"
                  style={{width: "375px", height:"500px"}}
                >
                    <div className="flex items-center">
                      <Image
                        src={
                          "http://localhost:1337" + course.image.url
                        }
                        className="rounded-t-3xl pt-2"
                        width={375}
                        height={400}
                        alt={`${course.title}'s profile picture`}
                        style={{height:"200px"}}
                      />
                      <span className="absolute top-2 right-5 bg-blue-300 font-bold text-black text-xm px-2 py-1 rounded-full">
                        Best Seller
                      </span>
                    </div>
                  <div className="px-2">
                    <div className="flex justify-between items-center pt-3" style={{height:"90px"}}>
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
                    <div className="flex py-5 text-xl font-bold items-center justify-between">
                      {formatCurrency(course.cost)}
                      <button className="bg-blue-500 hover:bg-blue-700 text-sm text-white py-1 px-3 rounded-full w-30">
                        Register Now
                      </button>
                    </div>
                    <div className="flex justify-around pb-5">
                      <div className="flex">
                        <Image
                          src="https://edu.saralgroups.com/assets/courses/book-open.svg"
                          className="mr-1"
                          width={15}
                          height={15}
                          alt="book"
                        />
                        {course.numberOfClasses} classes
                      </div>
                      <div className="flex">
                        <Image
                          src="https://edu.saralgroups.com/assets/courses/users.svg"
                          className="mr-1"
                          width={15}
                          height={15}
                          alt="book"
                        />
                        {course.total_student} students
                      </div>
                    </div>
                    <div className="w-full border-b mb-5"></div>
                    <div className="flex justify-center">
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-80">
                        Apply for Scholarship
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
