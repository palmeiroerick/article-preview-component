import Image from "next/image";

export default function Drawers() {
  return (
    <div className="relative h-52 w-full overflow-hidden">
      <Image src="/drawers.jpg" alt="drawers" width={320} height={256} />
    </div>
  );
}
