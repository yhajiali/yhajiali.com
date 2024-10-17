import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Logo = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href="/" className="font-bold flex items-center">
      {!imageError ? (
        <Image
          src="/path/to/your/logo.png"
          alt="YH Logo"
          width={40}
          height={40}
          onError={() => setImageError(true)}
        />
      ) : (
        <span>YH</span>
      )}
    </Link>
  );
};

export default Logo;
