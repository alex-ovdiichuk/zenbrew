import Image from "next/image";

export const Separator: React.FC<{ bg?: "white" | "accent" }> = ({
  bg = "white",
}) => {
  const imgSrc =
    bg === "accent"
      ? "/assets/separator-accent.svg"
      : "/assets/separator-white.svg";

  return (
    <div className="relative w-[168px] h-[26px] mx-auto">
      <Image src={imgSrc} fill alt="" />
    </div>
  );
};
