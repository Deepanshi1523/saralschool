import Image from "next/image";
import { formatDateToLocal, formatCurrency } from "@/app/lib/utils";

export default async function InvoicesTable({
  courses,
}: {
  courses: object[];
}) {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
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
                          src={
                            "http://localhost:1337" + course.image.url
                          }
                          className="mr-2 rounded-full"
                          width={28}
                          height={28}
                          alt={`${course.title}'s profile picture`}
                        />
                        <p>{course.title}</p>
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
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Course
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Student per batch
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Cost
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {courses?.map((course: any) => (
                <tr
                  key={course.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={
                          "http://localhost:1337" + course.image.url
                        }
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${course.title}'s profile picture`}
                      />
                      <p>{course.title}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {course.Student_per_batch}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(course.cost)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {course.rating}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
