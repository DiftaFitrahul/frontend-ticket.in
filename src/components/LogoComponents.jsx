import Image from "next/image";
import LogoImage from "../../public/logo-ticketin.svg";

export default function Page() {
  return (
    <Image
      src={LogoImage}
      width={197}
      height={98}
      class="bg-contain"
      alt="logo"
    />
  )
}
