import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* User Card */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type={"student"} />
          <UserCard type={"teacher"} />
          <UserCard type={"parent"} />
          <UserCard type={"staff"} />
        </div>
        {/* Middle Chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
        </div>
      </div>
      {/* RIGHT  */}
      <div className="w-full lg:w-1/3">L</div>
    </div>
  );
};
export default AdminPage;
