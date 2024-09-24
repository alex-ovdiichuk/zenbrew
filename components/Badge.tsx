import Image from "next/image";

export const Badge: React.FC<{ containerStyles?: string }> = ({
  containerStyles,
}) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image src="/assets/badge.svg" fill alt="" className="object-contain" />
    </div>
  );
};
