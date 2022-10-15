import {
  MdPersonAdd,
  MdSearch,
  MdForum,
  MdPhone,
  MdDriveFolderUpload,
  MdMoreHoriz,
} from "react-icons/md";

import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { FaPinterestP, FaLinkedinIn, FaGoogle } from "react-icons/fa";

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
      <div className="px-16 pt-28 container mx-auto">
        <div className="flex flex-row mx-auto justify-center">
          <img
            src="https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="profile"
            className="object-cover w-28 h-28 rounded-3xl"
          />
          <div className="flex flex-col ml-6 space-y-5">
            <div className="flex flex-col">
              <span className="text-xl font-semibold">Johanna Stevens</span>
              <span className="text-base text-gray-primary">
                UI/UX Designer
              </span>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <div className="cursor-pointer bg-violet-500 flex flex-row items-center rounded-lg px-1">
                <MdForum size={42} className="fill-white p-2" />
                <span className="text-white text-base font-medium pr-2">
                  Message
                </span>
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
        <div className="flex-1 w-full text-base pr-6 pt-16">
          <div className="flex flex-col space-y-8">
            <div className="flex gap-8">
              <span className="w-2/12 text-right text-gray-primary">Bio</span>
              <span className="w-full">
                When I first got into the advertising, I was looking for the
                magical combination that would put website into the top search
                engine rankings
              </span>
            </div>
            <div className="flex gap-8">
              <span className="w-2/12 text-right text-gray-primary">Email</span>
              <div className="flex flex-col w-full">
                <div className="flex items-start">
                  <span className="flex-1">erikfreecss@gmail.com</span>
                  <span className="bg-gray-second px-3 p-2 rounded-md text-gray-700 font-semibold text-xs">
                    Primary
                  </span>
                </div>
                <span className="">erikmikaelstg@gmail.com</span>
              </div>
            </div>
            <div className="flex gap-8">
              <span className="w-2/12 text-right text-gray-primary">Dial</span>
              <span className="w-full">erikfreecss@gmail.com</span>
            </div>
            <div className="flex gap-8">
              <span className="w-2/12 text-right text-gray-primary">
                Meeting
              </span>
              <span className="w-full">erikfreecss@gmail.com</span>
            </div>
            <div className="flex gap-8">
              <span className="w-2/12 text-right text-gray-primary">Phone</span>
              <div className="flex flex-col w-full">
                <div className="flex items-start justify-items-center">
                  <span className="flex-1">081808253226</span>
                  <span className="bg-gray-second text-xs font-semibold rounded-md text-gray-700 px-3 p-2">
                    Primary
                  </span>
                </div>
                <span className="">021</span>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <span className="w-2/12 text-right text-gray-primary">
                Social
              </span>
              <div className="flex w-full gap-2">
                <GrFacebookOption
                  size={40}
                  className="fill-icon border border-gray-200 rounded-lg p-3 cursor-pointer"
                />
                <FaPinterestP
                  size={40}
                  className="fill-icon border border-gray-200 rounded-lg p-3 cursor-pointer"
                />
                <GrTwitter
                  size={40}
                  className="fill-icon border border-gray-200 rounded-lg p-3 cursor-pointer"
                />
                <FaLinkedinIn
                  size={40}
                  className="fill-icon border border-gray-200 rounded-lg p-3 cursor-pointer"
                />
                <FaGoogle
                  size={40}
                  className="fill-icon border border-gray-200 rounded-lg p-3 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
