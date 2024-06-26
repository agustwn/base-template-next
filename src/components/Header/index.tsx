import React from "react";

const Header = () => {
  return (
    <div className="w-full block py-[12px] px-[16px]">
      <div className="w-full flex justify-between items-center">
        <div className="logo">
          <span>Logo</span>
        </div>
        <div className="flex items-center gap-[12px]">
          <span>About</span>
          <span>Gallery</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
