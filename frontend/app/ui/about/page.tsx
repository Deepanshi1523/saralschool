
import Image from "next/image";

export default function About() {
  return (
    <main className="flex md:h-screen ">
      <div className="flex-1 col-span-6 flex flex-col justify-evenly">
        <div className = "flex gap-2 mx-auto lg:mx-0">
            <Image alt="check image" loading ="lazy" width="20" height="20" decoding="async" data-nimg="1" src="https://edu.saralgroups.com/assets/banner/check.svg" />
            <h3 className="text-green-500 text-sm font-semibold text-center lg:text-start">Upto 100% scholarship available</h3>       
        </div>
        <h1 className= "text-midnightblue-500 text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">Advance your &nbsp; engineering skills with &nbsp;&nbsp; us .</h1>
        <div className="flex items-center lg:justify-between sm:justify-center ">
            <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm-inset-auto">
                <button className="text-blueviolet-500 border border-semiblueviolet-500 text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-sky-200 hover:text-white hover:bg-blue-500" fdprocessedid="vjx74f">Consult our Career Experts</button>
            </div>
        </div>
        <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-10 lg:pt-5">"Build skills with our courses and mentor from world-class companies. We are on mission to prepare every indiviual for the job market , and become independent ."</h3>
        <div className="flex items-center justify-between pt-10 lg:pt-4">
            <div className="flex gap-2">
                <Image alt="check-image" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" className="smallImage" src="https://edu.saralgroups.com/assets/banner/check-circle.svg" />
                <p className="text-sm sm:text-lg font-normal text-black">Flexible</p>
            </div> 
            <div className="flex gap-2">
                <Image alt="check-image" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" className="smallImage" src="https://edu.saralgroups.com/assets/banner/check-circle.svg" />
                <p className="text-sm sm:text-lg font-normal text-black">Learning Path</p>
            </div> 
            <div className="flex gap-2">
                <Image alt="check-image" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" className="smallImage" src="https://edu.saralgroups.com/assets/banner/check-circle.svg" />
                <p className="text-sm sm:text-lg font-normal text-black">Community</p>
            </div> 
        </div>

  </div>
  <div className="flex-1 col-span-6 justify-center">
    <Image src="/home_img.png"  loading="lazy" decoding="async"  width={500} height={500} alt="logo"/>
  </div>
    </main>
  );
}