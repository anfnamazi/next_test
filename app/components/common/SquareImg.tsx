import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FunctionComponent } from "react";

interface SquareImgProps {
  className?: string | undefined;
  src: string | StaticImport;
  alt: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
}

const SquareImg: FunctionComponent<SquareImgProps> = ({
  className,
  src,
  alt,
  height,
  width,
}) => {
  return (
    <div
      className={`flex justify-center items-center overflow-hidden flex-none rounded-lg bg-gray-50 group-hover:bg-white ${className}`}
    >
      <Image
        className="object-cover w-full aspect-square"
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  );
};

export default SquareImg;
