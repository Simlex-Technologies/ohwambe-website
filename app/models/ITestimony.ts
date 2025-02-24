import { StaticImageData } from "next/image";

export type Testimony = {
    image: string | StaticImageData;
    name: string;
    text: string;
    reviewLink: string;
    ratingNumber: number;
  };
  