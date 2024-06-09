import Image, { ImageProps } from "next/image";
import Link from "next/link";
import Logo from "../../../../public/asset/logo/logo.png";

type Props = Omit<ImageProps, "alt" | "src">;

export function LogoButton({ width = 120, height = 66, ...props }: Props) {
  return (
    <Link href={"/"}>
      <Image
        src={Logo.src}
        width={width}
        height={height}
        alt="logo"
        style={{ cursor: "pointer" }}
        {...props}
      />
    </Link>
  );
}
