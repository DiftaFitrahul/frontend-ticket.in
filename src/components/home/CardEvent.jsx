import Image from "next/image";
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
  const maxLengthTitle = 17;
  const trimmedTitle =
    title.length > maxLengthTitle
      ? `${title.slice(0, maxLengthTitle)}...`
      : title;

  const maxLengthSubtitle = 100;
  const trimmedSubtitle =
    subtitle.length > maxLengthSubtitle
      ? `${subtitle.slice(0, maxLengthSubtitle)}...`
      : subtitle;

  return (
    <div className="flex flex-col w-[240px] min-[370px]:w-[350px] md:w-[380px]  xl:w-[410px] h-[400px] shadow-xl  bg-white rounded-3xl ">
      <Image
        src={imagePath}
        alt="coba"
        width={1000} // Set a large number to allow for a responsive width
        height={300}
        unoptimized={true}
        objectFit="cover"
        className="self-center  rounded-xl min-h-[250px] max-h-[250px]"
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
          <h1 className="text-black text-start font-bold text-[17px] md:text-[21px]">
            {trimmedTitle}
          </h1>
          <p className="text-[#6A6A6A] text-start text-[10px] sm:text-[13px]">
            {trimmedSubtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
