import HeaderComp from "@/components/HeaderComp";

export default function About() {
  return (
    <main>
      <div className="flex flex-col justify-start items-start bg-neutral-100">
        <div className="relative flex justify-center items-center w-full min-h-screen">
          <img
            src="/home/bg_image.png"
            alt="Picture of the author"
            className="absolute w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#922455] to-[#C6B13F] opacity-[0.9]"></div>

          <HeaderComp />

          <div className="text-black relative z-[2] flex flex-col justify-center items-center">
            <div className="w-[700px] bg-red-500/20">
              <h4 className="text-[25px] text-white text-center">
                Kami adalah platform pemesanan tiket film terkemuka di
                Indonesia. Dengan koleksi film terbaru dan pemesanan yang mudah,
                kami hadir untuk memastikan pengalaman menonton Anda menjadi
                lebih menyenangkan. Dengan beragam pilihan acara dan bioskop
                top, TICKET.IN memudahkan Anda menikmati film favorit tanpa
                repot. Mari kita ciptakan momen tak terlupakan di layar lebar
                bersama-sama.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
