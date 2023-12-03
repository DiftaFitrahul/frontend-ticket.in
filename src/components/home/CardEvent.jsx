export default function CardEvent({
  title,
  subtitle,
  imagePath,
  quota,
  price,
}) {
  const IDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <div className="flex flex-col w-[240px] min-[370px]:w-[350px] md:w-[380px]  xl:w-[410px] h-[400px] shadow-xl  bg-white rounded-3xl">
      <img
        src={imagePath}
        alt="coba"
        className="w-full h-[250px] object-fill"
      />
      <div className="flex items-start justify-start  mt-4 mx-3 min-[330px]:mx-6">
        <div className="flex flex-col items-center mr-2 min-[330px]:mr-5 mt-4">
          <p className="text-[#3D37F1] text-center font-bold text-[10px] min-[330px]:text-[15px] mt-1">
            {IDR.format(price)}
          </p>
          <p className="text-black font-bold text-[10px] min-[330px]:text-[20px]">
            {quota} Pcs
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-black font-bold text-[21px]">{title}</h1>
          <p className="text-[#6A6A6A] text-start text-[10px] sm:text-[13px]">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
