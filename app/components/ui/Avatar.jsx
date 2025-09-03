import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <figure className="animate-popout size-16 md:size-20 rounded-full overflow-hidden object-cover">
      <Image
        src={"/avatar.jpg"}
        alt="Yusuf Haji Ali"
        width={200}
        height={200}
        className="size-full"
      ></Image>
    </figure>
  );
};

export default Avatar;
