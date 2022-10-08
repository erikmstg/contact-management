import { MdPersonAdd, MdSearch } from "react-icons/md";

const Content = () => {
  return (
    <div className="flex-1">
      <div className="flex justify-end items-center py-6 px-8 border-b border-b-gray-200">
        <MdPersonAdd
          size={40}
          className="fill-icon bg-white border border-gray-200 rounded-lg p-2"
        />
        <MdSearch
          size={40}
          className="fill-icon bg-white border border-gray-200 rounded-lg p-2"
        />
        <img
          src="https://images.pexels.com/photos/157606/girl-black-dress-portrait-hair-157606.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="profile"
          className="w-10 h-10 rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Content;
