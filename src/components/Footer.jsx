import React, { memo } from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-sm">
        
        <p className="break-all">
          +1234567890 | info@ironcraft.com
        </p>

        <p>
          © 2026 IronCraft. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);