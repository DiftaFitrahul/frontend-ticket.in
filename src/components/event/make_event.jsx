export default function MakeEvent({}) {
  return (
    <div className="flex flex-col min-[800px]:flex-row items-center relative justify-center bg-[#FFF1E1] w-full mb-[100px] py-12 mt-[150px]">
      <img
        src="/home/person.png"
        alt="coba"
        className="w-[400px] h-[500px]  min-[800px]:absolute  min-[800px]:left-[-20px] xl:left-[100px] 2xl:left-[200px] bottom-[-120px] "
      />

      <div className="flex flex-col ">
        <h1 className="text-black font-bold text-[34px]">
          Make your own Event
        </h1>
        <p className="text-black text-[18px] my-4 w-[360px] font-normal">
          Craft memories with a click. Create your event now
        </p>
        <button className="bg-[#F5167E] py-4 w-[300px] rounded-full shadow-lg font-medium">
          Create Events
        </button>
      </div>
    </div>
  );
}
