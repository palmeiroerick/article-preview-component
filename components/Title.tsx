type TitleProps = {
  children: string;
};

export default function Title({ children }: TitleProps) {
  return (
    <h1 className="font-bold text-veryDarkGrayishBlue lg:text-xl">
      {children}
    </h1>
  );
}
