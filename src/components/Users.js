import { MdOutlineForum, MdPhone, MdMoreHoriz } from "react-icons/md";
import { userData } from "../dummyDatas";

const Users = () => {
  return (
    <>
      {userData.map(({ name, job, img, isActive }, index) => (
        <div key={index} className="flex flex-row items-center px-8 py-2">
          <div className="w-9 h-9 mr-4 relative">
            <img
              src={img}
              alt={name}
              className="w-9 h-9 object-cover rounded-lg"
            />
            <span
              className={`
              ${isActive === "online" && "bg-green-400"} 
              ${isActive === "offline" && "bg-red-400"} 
              ${isActive === "busy" && "bg-orange-400"} 
              rounded-full border-2 border-white p-1 absolute -right-1 -bottom-1`}
            />
          </div>
          <div className="flex-1 text-base flex flex-col">
            <span className="font-semibold">{name}</span>
            <span className="text-gray-primary">{job}</span>
          </div>
          <div className="flex flex-row space-x-2">
            <MdOutlineForum
              size={36}
              className="fill-icon bg-white rounded-lg p-2 border border-gray-200"
            />
            <MdPhone
              size={36}
              className="fill-icon bg-white rounded-lg p-2 border border-gray-200"
            />
            <MdMoreHoriz
              size={36}
              className="fill-icon bg-white rounded-lg p-2 border border-gray-200"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Users;
