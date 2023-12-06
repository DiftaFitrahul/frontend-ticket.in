import { IoIosArrowDown } from "react-icons/io";

export default function FilterButton({ title, className }) {
  const defaultClasses =
    "flex justify-between items-center bg-[#DFE4FF] h-[48px] w-[170px] rounded-full px-5 mx-3";

  const combinedClasses = `${defaultClasses} ${className}`;
  return (
    <button className={combinedClasses}>
      <div className="text-[#1D275F]">{title}</div>
      <IoIosArrowDown className="text-[#242565]" />
    </button>
  );
}
