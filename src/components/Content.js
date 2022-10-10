import {
  MdPersonAdd,
  MdSearch,
  MdForum,
  MdPhone,
  MdDriveFolderUpload,
  MdMoreHoriz,
} from "react-icons/md";

const Content = () => {
  return (
    <div className="flex-1">
      <div className="flex justify-end items-center py-6 px-8 border-b border-b-gray-200 space-x-3">
        <MdPersonAdd
          size={40}
          className="fill-icon bg-white border border-gray-200 rounded-lg p-2"
        />
        <div className="px-5">
          <div className="h-6 border-r border-r-gray-200" />
        </div>
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
      <div className="px-14 py-28">
        <div className="border border-red-300 flex flex-row">
          <img
            src="https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="profile"
            className="object-cover w-28 h-28 rounded-3xl"
          />
          <div className="flex flex-col">
            <span className="text-base font-semibold">Johanna Stevens</span>
            <span className="text-sm">UI/UX Designer</span>
            <div className="flex flex-wrap items-center space-x-3">
              <div className="cursor-pointer bg-violet-500 flex flex-row items-center rounded-lg px-1">
                <MdForum size={42} className="fill-white p-2" />
                <span className="text-white font-medium pr-2">Message</span>
              </div>
              <MdPhone
                size={42}
                className="fill-icon cursor-pointer border border-gray-200 rounded-lg p-2"
              />
              <MdDriveFolderUpload
                size={42}
                className="fill-icon cursor-pointer border border-gray-200 rounded-lg p-2"
              />
              <MdMoreHoriz
                size={42}
                className="fill-icon cursor-pointer border border-gray-200 rounded-lg p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
