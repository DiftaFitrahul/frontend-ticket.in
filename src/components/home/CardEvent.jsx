export default function CardEvent({ title, subtitle, imagePath, quota, price }) {
  const IDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <div className="flex flex-col w-[410px] h-[400px]  bg-white rounded-3xl">
      <img
        src={imagePath}
        alt="coba"
        className="w-full h-[250px] object-fill"
      />
      <div className="flex items-start justify-start  mt-4 mx-6">
        <div className="flex flex-col items-center mr-5 mt-4">
          <p className="text-[#3D37F1] text-center font-bold text-[15px] mt-1">{IDR.format(price)}</p>
          <p className="text-black font-bold text-[20px]">{quota} Pcs</p>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-black font-bold text-[21px]">{title}</h1>
          <p className="text-[#6A6A6A] f">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
