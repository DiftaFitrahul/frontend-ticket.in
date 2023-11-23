import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.png";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/authSlice';
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export default function HeaderComp() {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const dispatch = useDispatch();

	console.log(isLoggedIn);

	const handleLogout = () => {
    dispatch(logout());
		Cookies.remove("Auth");
		toast.success("Logout Berhasil!"), {
			zIndex: 9999,
		};
  };

	return (
		<nav className="flex w-full bg-[#242565] flex-row items-center justify-between fixed top-0 px-14 z-10 py-[22px] min-[700px]:py-0">
			<Link
				href="/"
			>
				<Image
					src={Logo}
					alt="Picture of the author"
					unoptimized
					className="w-[180px] hidden min-[700px]:block mr-5"
				/>
			</Link>

			<div className="flex flex-shrink-0 gap-5 items-center justify-center hidden xl:block">
				<Link href="" className=" text-white py-10 px-5">
					Schedule
				</Link>
				<Link href="" className="text-white py-10 px-5">
					Ticket
				</Link>
				<Link href="/about" className="text-white py-10 px-5">
					About
				</Link>
				<Link href="" className="text-white py-10 px-5">
					Contact
				</Link>
				{isLoggedIn ? (
						<Link
							href="/"
							onClick={handleLogout}
							className="border text-white border-white py-2 px-9 rounded-full mr-5"
						>
							Logout
						</Link>
				) : (
					<Link
						href="/auth/login"
						className="border text-white border-white py-2 px-9 rounded-full mr-5"
					>
						Login
					</Link>
				)}
			</div>
		</nav>
	);
}
