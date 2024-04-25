import Image, { StaticImageData } from "next/image";

export default function SkillCard({
  image,
  altText,
  cardText,
}: {
  image: StaticImageData;
  altText: string;
  cardText: string;
}) {
  return (
    <div className="xl:w-[100px] xl:h-[100px] 2xl:w-[150px] 2xl:h-[150px] p-4 bg-custom_accent2 border-gray-600 rounded-lg shadow hvr-glow flex flex-col items-center justify-center">
      <Image
        className="h-1/2 w-1/2 object-contain grow"
        src={image}
        alt={altText}
      />
      <div className="leading-none xl:pb-1 2xl:pb-2 font-light">{cardText}</div>
    </div>
  );
}
