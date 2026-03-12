import Image from "next/image";

interface LogoProps {
  height?: number;
  className?: string;
}

export default function Logo({ height = 44, className }: LogoProps) {
  const width = Math.round(height * (1600 / 750));
  return (
    <Image
      src="/assets/honey-pot-media-logo.png"
      alt="Honey Pot Media"
      width={width}
      height={height}
      className={className}
    />
  );
}
