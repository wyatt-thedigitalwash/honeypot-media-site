import Image from "next/image";

interface LogoProps {
  height?: number;
  className?: string;
}

export default function Logo({ height = 40, className }: LogoProps) {
  const width = height * 2;
  return (
    <Image
      src="/assets/honeypot-media-logo.png"
      alt="Honey Pot Media"
      width={width}
      height={height}
      className={className}
    />
  );
}
