import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="font-bold flex items-center">
      <Image
        src="/path/to/your/logo.png"
        alt="YH Logo"
        width={100}
        height={20}
      />
    </Link>
  );
};

export default Logo;
