export default function AboutOverlay({setIsOpen}) {
  return (
    <main className="bg-black/40 backdrop-blur-[8px] w-screen h-screen fixed top-0 z-[99999999999999999999999] flex justify-center items-center">
      <div className="p-10 bg-white rounded-[20px] text-black w-[60%] flex flex-col justify-center items-center gap-3">
        <h1 className="font-bold text-[24px]">About Us</h1>
        <p className="text-[18px]">
          Kami adalah platform pemesanan tiket film terkemuka di Indonesia.
          Dengan koleksi film terbaru dan pemesanan yang mudah, kami hadir untuk
          memastikan pengalaman menonton Anda menjadi lebih menyenangkan. Dengan
          beragam pilihan acara dan bioskop top, TICKET.IN memudahkan Anda
          menikmati film favorit tanpa repot. Mari kita ciptakan momen tak
          terlupakan di layar lebar bersama-sama.
        </p>
        <button className="bg-[#DF1875] w-fit px-5 py-2 text-white font-medium rounded-full text-[18px]" onClick={() => setIsOpen(false)}>
          Close
        </button>
      </div>
    </main>
  );
}
