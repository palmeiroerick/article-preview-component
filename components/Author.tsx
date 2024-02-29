import Image from "next/image";

export default function Author() {
  return (
    <div className="flex items-center justify-between">
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
          <h3 className="text-sm font-medium text-grayishBlue">28 Jun 2020</h3>
        </div>
      </div>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lightGrayishBlue">
        <Image src="/icon-share.svg" alt="icon share" width={15} height={13} />
      </div>
    </div>
  );
}
