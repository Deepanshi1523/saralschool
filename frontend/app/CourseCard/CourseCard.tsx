import React from "react";
import Image from "next/image";

export type CourseCardProps = {

  title: string;
  rating : string;
  imageUrl: string;
};

const CourseCard = (props: CourseCardProps) => {
  const { title, rating , imageUrl} = props;
  const imageSrc = imageUrl ? `http://localhost:1337${imageUrl}` : '';
  return (
    
    <main>
 <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
      <div className=" rounded-lg w-40 p-3 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 relative">
      <div className="max-w-sm w-36 h-30 rounded-lg bg-white-300 border-white-200 bg-opacity-50 shadow dark:border-gray-700" >
    <a href="#">
        <Image className="rounded-t-lg" src={imageSrc} width={150} height={10} alt="" />
    </a>
    <div className="p-2">
        <a href="#">
            <h6 className="mb-2 text-l font-bold tracking-tight text-black dark:text-black" >{title}</h6>
        </a>

       <div className="flex justify-between">
<div>
        <a href="#" className="inline-flex items-center mt-1 px-2 py-3 text-sm font-medium w-20 h-5 text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Explore
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a></div>
        <h3 className="mb-3 font-normal-bold text-black dark:text-black">
  <span className="flex items-center pb-1">
  <span className="text-2xl">{rating}</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#FCD12A"
      aria-hidden="true"
      className="h-6 w-6 text-gold"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      ></path>
    </svg>
  </span>
</h3>
</div>
    </div>
    </div>
        </div>
      
    </div>

</main>
  );
};

export default CourseCard;