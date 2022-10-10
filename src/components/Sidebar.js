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
          <MdOutlineHome size={40} className="fill-icon p-2" />
        </li>
        <li className="py-6 relative">
          <span className="w-2 h-2 bg-[#28C345] absolute rounded-full -right-1 top-6" />
          <MdOutlineForum size={40} className="fill-icon p-2" />
        </li>
        <li className="py-6 relative">
          <span className="w-2 h-2 bg-[#28C345] absolute rounded-full -right-1 top-6" />
          <MdPhone size={40} className="fill-icon p-2" />
        </li>
        <li className="py-6">
          <MdPhonelink size={40} className="fill-icon p-2" />
        </li>
        <li className="py-6">
          <MdGroup
            size={40}
            className="fill-icon p-2 cursor-pointer hover:border hover:fill-blue-500 hover:border-blue-500 hover:rounded-lg"
          />
        </li>
        <li className="py-6">
          <MdDriveFolderUpload size={40} className="fill-icon p-2" />
        </li>
        <li className="py-6 relative">
          <span className="w-2 h-2 bg-[#28C345] absolute rounded-full -right-1 top-6" />
          <MdOutlineAssignment size={40} className="fill-icon p-2" />
        </li>
        <li className="py-6">
          <MdOutlineSettings size={40} className="fill-icon p-2" />
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
