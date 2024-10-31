import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="brightness-0 dark:invert z-50">
      <Image src="/logo.png" alt="YH Logo" width={40} height={40} />
    </Link>
  );
};

export default Logo;
