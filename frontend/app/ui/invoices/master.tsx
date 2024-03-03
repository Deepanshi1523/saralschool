import Image from "next/image";
import { formatCurrency } from "@/app/lib/utils";

export default async function MastersTable({
  masterCourses,
}: {
  masterCourses: object[];
}) {
  return (
    <div className=" flow-root">
      <div className="inline-block min-w-full align-middle">
        <h1 className="text-3xl font-bold text-center pb-3">Master Course</h1>
        <div className="md:pt-0 flex flex-wrap items-start justify-between ">
              {masterCourses?.map((masterCourse: any) => (
                <div
                  key={masterCourse.id}
                  className="bg-white mb-10 px-2 shadow-courses rounded-2xl flex flex-col relative shadow-xl transition-transform hover:scale-105"
                  style={{width: "375px", height:"500px", background: "radial-gradient(circle, #000000, #00007F)"}}
                >
                    <div className="flex items-center">
                      <Image
                        src={
                          "http://localhost:1337" + masterCourse.image.url
                        }
                        className="rounded-t-3xl pt-4"
                        width={375}
                        height={400}
                        alt={`${masterCourse.title}'s profile picture`}
                        style={{height:"200px"}}
                      />
                      <span className="absolute top-2 right-5 bg-blue-300 font-bold text-black text-xm px-2 py-1 rounded-full">
                        Best Seller
                      </span>
                    </div>
                  <div className="px-2">
                    <div className="flex justify-between items-center pt-3" style={{height:"90px"}}>
                      <div style={{width:"200px"}}>
                        <p className="text-white font-bold text-lg">{masterCourse.Title}</p>
                        <div className="text-sm text-white">
                          {masterCourse.Student_per_batch} students per batch
                        </div>
                      </div>
                      <div className="flex flex-col text-sm items-end">
                        <div className="pr-2 text-red-500 font-bold">{masterCourse.rating}/5</div>
                        <div className="flex">
                          {[...Array(Math.ceil(masterCourse.rating))].map((_, index) => (
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
                    <div className="flex py-5 text-white text-xl font-bold items-center justify-center">
                      {formatCurrency(masterCourse.cost)}
                    </div>
                    <div className="flex justify-around pb-5 text-white">
                      <div className="flex">
                        <Image
                          src="https://edu.saralgroups.com/assets/courses/book-open.svg"
                          className="mr-1"
                          width={15}
                          height={15}
                          alt="book"
                        />
                        {masterCourse.numberOfClasses} classes
                      </div>
                      <div className="flex">
                        <Image
                          src="https://edu.saralgroups.com/assets/courses/users.svg"
                          className="mr-1"
                          width={15}
                          height={15}
                          alt="book"
                        />
                        {masterCourse.total_student} students
                      </div>
                    </div>
                    <div className="w-full border-b mb-5"></div>
                    <div className="flex justify-center">
                      {masterCourse.Scholarship > 0 ? (
                        <div className="text-white">
                          <button className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded w-80">
                            Apply for Scholarship 
                          </button>
                          <h6 className="text-center pt-1 font-bold">Upto <span className="text-red-500">{masterCourse.Scholarship}% </span>scholarship available</h6>
                        </div>
                      ) : (
                        <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded w-80">
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
