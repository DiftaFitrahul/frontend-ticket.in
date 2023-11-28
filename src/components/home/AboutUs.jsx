export default function AboutUs({setShowAbout}) {
  return (
    <main className="bg-black/40 backdrop-blur-[8px] w-screen h-screen fixed top-0 flex justify-center items-center z-[9999999]">
      <div className="bg-white p-10 flex flex-col justify-center items-center text-black gap-3 w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] rounded-[20px]">
        <h1 className="text-[24px] font-bold">About Us</h1>
        <p className="text-[18px]">
          Kami adalah platform pemesanan tiket film terkemuka di Indonesia.
          Dengan koleksi film terbaru dan pemesanan yang mudah, kami hadir untuk
          memastikan pengalaman menonton Anda menjadi lebih menyenangkan. Dengan
          beragam pilihan acara dan bioskop top, TICKET.IN memudahkan Anda
          menikmati film favorit tanpa repot. Mari kita ciptakan momen tak
          terlupakan di layar lebar bersama-sama.
        </p>
        <button className="bg-[#DF1875] py-2 px-8 text-white font-medium rounded-full text-[18px]" onClick={() => setShowAbout(false)}>
          Get Ticket
        </button>
      </div>
    </main>
  );
}
