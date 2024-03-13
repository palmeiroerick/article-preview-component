"use client";
import { ShareContext } from "@/context/ShareContext";
import Image from "next/image";
import { useContext } from "react";

type IconShareProps = {
  onClick: () => void;
  shareState: boolean;
  className?: string;
};

function IconShare({ onClick, shareState, className }: IconShareProps) {
  return (
    <button
      onClick={onClick}
      className={`${shareState ? "bg-desaturatedDarkBlue" : "bg-lightGrayishBlue"} ${className} flex h-8 w-8 items-center justify-center rounded-full outline-none`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
        <path
          fill={shareState ? "#ffffff" : "#6E8098"}
          d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
        />
      </svg>
    </button>
  );
}

export default function Author() {
  const { shareState, useChangeShareState } = useContext(ShareContext);

  return (
    <div>
      <div className="flex items-center justify-between px-8 pb-4">
        <div className="flex items-center gap-4">
          <Image
            className="h-10 w-10 rounded-full"
            src="/avatar-michelle.jpg"
            alt="michelle photo"
            width={40}
            height={40}
          />
          <div>
            <h2 className="text-sm font-bold text-veryDarkGrayishBlue">
              Michelle Appleton
            </h2>
            <h3 className="text-sm font-medium text-grayishBlue">
              28 Jun 2020
            </h3>
          </div>
        </div>
        <IconShare onClick={useChangeShareState} shareState={shareState} />
      </div>
      {shareState ? (
        <div className="relative bottom-14 -mb-14 lg:bottom-32 lg:left-[243px] lg:-mb-[66px] lg:flex lg:w-max lg:flex-col lg:items-center">
          <div className="flex justify-between bg-veryDarkGrayishBlue px-8 py-3 lg:rounded-xl lg:py-[18px] lg:shadow-lg">
            <div className="flex items-center gap-6">
              <h2 className="text-sm font-medium uppercase tracking-[0.3rem] text-grayishBlue">
                Share
              </h2>
              <div className="flex gap-4">
                <Image
                  src="/icon-facebook.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                />
                <Image
                  src="/icon-twitter.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                />
                <Image
                  src="/icon-pinterest.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <IconShare
              onClick={useChangeShareState}
              shareState={shareState}
              className="lg:hidden"
            />
          </div>
          <div className="hidden h-0 w-0 border-l-[10px] border-r-[10px] border-t-[10px] border-solid border-[#48556a_transparent_transparent_transparent] lg:block lg:shadow-lg" />
        </div>
      ) : null}
    </div>
  );
}
