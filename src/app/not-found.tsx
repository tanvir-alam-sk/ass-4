/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function NotFoundCatchAll() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <img className="w-1/3" src="https://support.heberjahiz.com/hc/article_attachments/21013076295570" alt="" />
      <div>
        <Link href="/">Go back to Home</Link>
      </div>
    </div>
  );
}
