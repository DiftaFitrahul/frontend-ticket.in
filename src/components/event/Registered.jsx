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
        <div className="flex w-[140px] min-[280px]:w-[200px] min-[350px]:w-[250px] min-[480px]:w-[340px] sm:w-[400px]  ml-5 justify-center">
          <img
            src={imagePath}
            alt="coba"
            className="w-full h-[230px]  self-center "
          />
        </div>
        <div className="flex  flex-col  justify-start items-start w-full items-start justify-start ml-20  mt-5 lg:mt-0 lg:ml-4 xl:ml-10 mr-5">
          <h1 className="text-black font-bold text-[16px] min-[280px]:text-[20px] sm:text-[26px]">
            {title}
          </h1>
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <p className="text-[18px] sm:text-[23px] lg:text-[30px] text-blue-text font-normal ml-2">
                Code: {code}
              </p>
            </div>
          </div>
          <p className="text-[#6A6A6A] mr-20 lg:mr-0">{description}</p>
          <p className="text-black font-semibold text-[11px] sm:text-[15px] mt-5">
            Buyer Name: {name}
          </p>
          <p className="text-[#3D37F1] text-center font-bold text-[11px] sm:text-[15px] ">
            Email: {email}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
