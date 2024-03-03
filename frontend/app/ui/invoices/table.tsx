import Image from "next/image";
import { formatCurrency } from "@/app/lib/utils";

export default async function InvoicesTable({
  courses,
}: {
  courses: object[];
}) {
  return (
    <div className=" flow-root">
      <div className="inline-block min-w-full align-middle pt-1 rounded-t-3xl" style={{backgroundColor:"rgb(234 238 242)"}}>
        <h1 className="text-3xl font-bold pl-5 pt-5 text-center">Crash Course</h1>
        <div className="md:pt-0 flex items-start justify-between overflow-x-auto" style={{width: "95vw", overflowX: "scroll", scrollbarWidth: "none"}}>
              {courses?.map((course: any) => (
                <div
                  key={course.id}
                  className="bg-white mt-5 mb-5 px-2 mx-3 shadow-courses rounded-2xl flex flex-col relative shadow-xl transition-transform hover:scale-105"
                  style={{width: "375px", height:"500px"}}
                >
                    <div className="flex items-center">
                      <Image
                        src={
                          "http://localhost:1337" + course.image.url
                        }
                        className="rounded-t-3xl pt-4"
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
                    <div className="flex py-5 text-xl font-bold items-center justify-center">
                      {formatCurrency(course.cost)}
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
                      {course.Scholarship > 0 ? (
                        <div>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-80">
                          Apply for Scholarship 
                        </button>
                        <h6 className="text-center pt-1 font-bold">Upto <span className="text-red-500">{course.Scholarship}% </span>scholarship available</h6>
                      </div>
                      ) : (
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-80">
                          Buy Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
