import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="font-bold flex items-center">
      {/* <Image
        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
        alt="YH Logo"
        width={30}
        height={30}
      /> */}
      YH
    </Link>
  );
};

export default Logo;
