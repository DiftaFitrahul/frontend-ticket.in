export default function CardEvent({ title, subtitle, imagePath, month, date }) {
  return (
    <div className="flex flex-col w-[410px] h-[400px]  bg-white rounded-3xl">
      <img
        src={imagePath}
        alt="coba"
        className="w-full h-[250px] object-fill"
      />
      <div className="flex items-start justify-start  mt-4 mx-6">
        <div className="flex flex-col items-center mr-5">
          <p className="text-[#3D37F1] font-bold text-[15px] mt-1">{month}</p>
          <p className="text-black font-bold text-[35px]">{date}</p>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-black font-bold text-[21px]">{title}</h1>
          <p className="text-[#6A6A6A] f">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
