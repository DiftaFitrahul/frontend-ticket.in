import Image from "next/image";

export default function Login() {
  return (
    <div className=" flex flex-row justify-center items-center h-screen w-screen bg-neutral-100">
      <div className="h-[calc(100vh-20px)] w-1/2 relative bg-red-300 mt-20 mb-20 rounded-lg ml-[10px]"></div>
      <div className="flex flex-col justify-center items-center h-[calc(100vh-20px)] w-1/2 relative bg-dark-blue rounded-lg mr-[10px] ml-[10px] ">
        <Image
          src="/logo.png"
          alt="Picture of the author"
          width={100}
          height={100}
          className="absolute top-3 right-5" // just an example
        />

        <Image
          src="/auth_image.png"
          alt="Picture of the author"
          width={600}
          height={600}
          className="mb-20" // just an example
        />
        <h1 className="self-start pl-[120px] font-semibold text-[40px]">
          Sign in to TICKET.IN
        </h1>
        <p className="self-start pl-[120px] mb-[100px] font-light text-[20px]">
          Welcome back! Please enter your credentials to access your Ticket.in
          account.
        </p>
      </div>
    </div>
  );
}
