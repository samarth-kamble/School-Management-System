import React from "react";
import { menuItems } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <div className={"mt-4 text-sm"}>
      {menuItems.map((index) => (
        <div className={"flex flex-col gap-2"} key={index.title}>
          <span className={"hidden lg:block text-gray-400 font-light my-4"}>
            {index.title}
          </span>
          {index.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className={
                "flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
              }
            >
              <Image src={item.icon} alt={item.label} width={20} height={20} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};
export default LeftSidebar;
