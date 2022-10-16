import {
  MdMenu,
  MdChevronLeft,
  MdChevronRight,
  MdSearch,
} from "react-icons/md";

import Users from "./Users";

const SubSider = () => {
  return (
    <div className="w-2/5 bg-primary border-r border-r-gray-200">
      <div className="flex border-b border-b-gray-200 px-8 py-6 items-center justify-between">
        <div className="flex flex-row items-center">
          <MdMenu
            size={40}
            className="fill-icon border border-gray-200 bg-white rounded-lg p-2"
          />
          <h3 className="text-xl px-4">Contacts</h3>
        </div>
        <div className="flex flex-row space-x-2">
          <MdChevronLeft
            size={40}
            className="fill-icon border border-gray-200 bg-white rounded-lg p-2"
          />
          <MdChevronRight
            size={40}
            className="fill-icon border border-gray-200 bg-white rounded-lg p-2"
          />
        </div>
      </div>
      <div className="px-8 pt-7">
        <span className="text-sm text-gray-primary">Search for a contact</span>
        <div className="flex flex-row pr-3">
          <span className="flex-1 text-base font-semibold">
            Name, email or phone number
          </span>
          <MdSearch size={18} />
        </div>
      </div>
      <div className="pt-5 space-y-4">
        <Users />
      </div>
    </div>
  );
};

export default SubSider;
