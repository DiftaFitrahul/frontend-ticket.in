import Image from "next/image";

export default function EventsRegisteredComp({
  title,
  description,
  code,
  name,
  email,
  imagePath,
}) {
  return (
    <div className="w-3/4 bg-white rounded-3xl shadow-md mt-[45px] lg:mt-[30px]">
      <div className="flex flex-col lg:flex-row items-center  w-full  py-5 ">
        <div className="flex w-[140px] min-[280px]:w-[180px] min-[350px]:w-[250px] min-[480px]:w-[340px] sm:w-[400px]  ml-5 justify-center">
          <Image
            src={imagePath}
            alt="coba"
            width={1000}
            height={230}
            unoptimized={true}
            objectFit="cover"
            className="self-center"
          />
        </div>
        <div className="flex  flex-col  justify-start items-start w-full items-start justify-start ml-20  mt-5 lg:mt-0 lg:ml-4 xl:ml-10 mr-5">
          <h1 className="text-black font-bold text-[16px] min-[280px]:text-[20px] sm:text-[26px]">
            {title}
          </h1>
          <p className="text-black text-[11px] sm:text-[15px]">
            Buyer Name: {name}
          </p>
          <p className="text-black text-[11px] sm:text-[15px]">
            Email: {email}
          </p>
          <p className="text-black text-[11px] sm:text-[15px]">
            Code: {code}
          </p>
          <p className="text-black text-[11px] sm:text-[15px]">
            Status: {description}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
