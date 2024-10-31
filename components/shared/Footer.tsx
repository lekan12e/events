import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const years = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col ga4 p5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p>{years} Eventy. All Rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
