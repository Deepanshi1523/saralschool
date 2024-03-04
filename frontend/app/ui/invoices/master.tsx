import Image from "next/image";
import { formatCurrency } from "@/app/lib/utils";
import Link from "next/link";

export default async function MastersTable({
  masterCourses,
}: {
  masterCourses: object[];
}) {
  return (
    <div className=" flow-root">
      <div className="inline-block min-w-full align-middle">
        <h1 className="text-3xl font-bold text-center pb-3">Master Course</h1>
        <div className="md:pt-0 flex flex-wrap items-start justify-evenly ">
              {masterCourses?.map((masterCourse: any) => (
                <div
                  key={masterCourse.id}
                  className="bg-white mb-8 px-2 rounded-2xl flex flex-col relative shadow-2xl transition-transform hover:scale-105"
                  style={{width: "350px", height:"450px", background: "radial-gradient(circle, #000000, #00007F)"}}
                >
                    <div className="flex items-center">
                      <Image
                        src={
                          "http://localhost:1337" + masterCourse.image.url
                        }
                        className="rounded-t-3xl pt-3"
                        width={350}
                        height={350}
                        alt={`${masterCourse.title}'s profile picture`}
                        style={{height:"180px"}}
                      />
                      <span className="absolute top-1 right-4 bg-blue-300 font-bold text-black text-sm px-2 py-1 rounded-full">
                        Best Seller
                      </span>
                    </div>
                  <div className="px-1">
                    <div className="flex justify-between items-center pt-2" style={{height:"85px"}}>
                      <div style={{width:"175px"}}>
                        <p className="text-white font-bold text-md">{masterCourse.Title}</p>
                        <div className="text-xs text-white">
                          {masterCourse.Student_per_batch} students per batch
                        </div>
                      </div>
                      <div className="flex flex-col text-xs items-end">
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
                    <div className="flex py-2 text-white text-lg font-bold items-center justify-center">
                      {formatCurrency(masterCourse.cost)}
                    </div>
                    <div className="flex justify-around pb-3 text-white">
                      <div className="flex text-sm">
                        <Image
                          src="https://edu.saralgroups.com/assets/courses/book-open.svg"
                          className="mr-1"
                          width={15}
                          height={15}
                          alt="book"
                        />
                        {masterCourse.numberOfClasses} classes
                      </div>
                      <div className="flex text-sm">
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
                    <div className="w-full border-b mb-4"></div>
                    <div className="flex justify-center">
                      {masterCourse.Scholarship > 0 ? (
                        <div className="text-white">
                          <button className="bg-green-500 hover:bg-green-700 text-black font-bold py-1.5 px-4 rounded w-80">
                            Apply for Scholarship 
                          </button>
                          <h6 className="text-center pt-2 font-bold text-sm">Upto <span className="text-red-500">{masterCourse.Scholarship}% </span>scholarship available</h6>
                        </div>
                      ) : (
                        <Link 
                        href="/BuyEnquiry"
                        className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-1.5 px-4 rounded w-80 text-center">
                          Buy Now
                        </Link>
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
