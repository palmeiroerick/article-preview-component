type TextProps = {
  children: string;
};

export default function Text({ children }: TextProps) {
  return (
    <p className="text-[13px] font-medium text-desaturatedDarkBlue">
      {children}
    </p>
  );
}
