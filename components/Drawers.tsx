import Image from "next/image";

export default function Drawers() {
  return (
    <div className="h-52 w-full overflow-hidden rounded-s-xl lg:h-full">
      <div className="h-64 w-80">
        <Image src="/drawers.jpg" alt="drawers" width={320} height={256} />
      </div>
    </div>
  );
}
