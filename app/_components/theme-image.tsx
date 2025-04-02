"use client";
import { useTheme } from "@/_contexts/ThemeProvider";
import Image from "next/image";

export default function ThemeImage() {
  const theme = useTheme();

  const image = theme ? "/images/signssdark.svg" : "/images/signsslight.svg";

  return <Image src={image} alt="logo" width={700} height={700} />;
}
