import {
  MdOutlineMic,
  MdOutlineHome,
  MdOutlineForum,
  MdPhone,
  MdPhonelink,
  MdGroup,
  MdDriveFolderUpload,
  MdOutlineAssignment,
  MdOutlineSettings,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <nav className="px-5 border-r bg-white border-r-gray-200 h-screen">
      <div className="bg-[#6B59CC] rounded-[14px] w-10 h-10 flex justify-center items-end mt-6">
        <MdOutlineMic size={32} color="#FFF" />
      </div>
      <ul className="flex flex-col justify-center items-center mt-28">
        <li className="py-6">
          <MdOutlineHome size={25} className="fill-icon" />
        </li>
        <li className="py-6 relative">
          <span className="w-2 h-2 bg-[#28C345] absolute rounded-full -right-3 top-4" />
          <MdOutlineForum size={25} className="fill-icon" />
        </li>
        <li className="py-6 relative">
          <span className="w-2 h-2 bg-[#28C345] absolute rounded-full -right-3 top-4" />
          <MdPhone size={25} className="fill-icon" />
        </li>
        <li className="py-6">
          <MdPhonelink size={25} className="fill-icon" />
        </li>
        <li className="py-6">
          <MdGroup size={25} className="fill-icon" />
        </li>
        <li className="py-6">
          <MdDriveFolderUpload size={25} className="fill-icon" />
        </li>
        <li className="py-6 relative">
          <span className="w-2 h-2 bg-[#28C345] absolute rounded-full -right-3 top-4" />
          <MdOutlineAssignment size={25} className="fill-icon" />
        </li>
        <li className="py-6">
          <MdOutlineSettings size={25} className="fill-icon" />
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
