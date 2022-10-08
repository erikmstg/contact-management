import {
  MdMenu,
  MdChevronLeft,
  MdChevronRight,
  MdSearch,
  MdOutlineForum,
  MdPhone,
  MdMoreHoriz,
} from "react-icons/md";

const SubSider = () => {
  return (
    <div className="w-2/5 bg-primary border-r border-r-gray-200">
      <div className="flex border-b border-b-gray-200 px-8 py-6 items-center justify-between">
        <div className="flex flex-row items-center">
          <div className="border bg-white border-gray-200 rounded-lg p-2">
            <MdMenu size={22} className="fill-icon" />
          </div>
          <h3 className="text-xl px-4">Contacts</h3>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="bg-white border border-x-gray-200 rounded-lg p-2">
            <MdChevronLeft size={22} className="fill-icon" />
          </div>
          <div className="bg-white border border-x-gray-200 rounded-lg p-2">
            <MdChevronRight size={22} className="fill-icon" />
          </div>
        </div>
      </div>
      <div className="px-8 pt-7">
        <span className="text-xs">Search for a contact</span>
        <div className="flex flex-row pr-3">
          <span className="flex-1 text-sm font-semibold">
            Name, email or phone number
          </span>
          <MdSearch size={18} />
        </div>
      </div>
      <div className="pt-5 space-y-4">
        {Array.from(Array(9)).map((user, i) => {
          return <Users key={i} />;
        })}
      </div>
    </div>
  );
};

const Users = () => {
  return (
    <div className="flex flex-row items-center px-8 py-2">
      <div className="w-9 h-9 rounded-lg bg-gray-200 mr-4 relative">
        <span className="bg-green-400 w-3 h-3 rounded-full border-4 border-white p-1 absolute -right-1 -bottom-1"></span>
      </div>
      <div className="flex-1 text-base flex flex-col">
        <span className="font-semibold">Erik</span>
        <span className="text-gray-primary">Developer</span>
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
  );
};

export default SubSider;
