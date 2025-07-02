import product1Thumbnail from "../../../assets/images/image-product-1-thumbnail.jpg";
import product1 from "../../../assets/images/image-product-1.jpg";
import product2Thumbnail from "../../../assets/images/image-product-2-thumbnail.jpg";
import product2 from "../../../assets/images/image-product-2.jpg";
import product3Thumbnail from "../../../assets/images/image-product-3-thumbnail.jpg";
import product3 from "../../../assets/images/image-product-3.jpg";
import product4Thumbnail from "../../../assets/images/image-product-4-thumbnail.jpg";
import product4 from "../../../assets/images/image-product-4.jpg";
import { type ComponentProps } from "react";

export const pictures = {
  product1: product1,
  product1Thumbnail: product1Thumbnail,
  product2: product2,
  product2Thumbnail: product2Thumbnail,
  product3: product3,
  product3Thumbnail: product3Thumbnail,
  product4: product4,
  product4Thumbnail: product4Thumbnail,
} as const;

export type PictureName = keyof typeof pictures;

export interface ProductPictureProps extends ComponentProps<"img"> {
  name: PictureName;
  alt: string;
}

export default function ProductPicture({
  name,
  alt,
  ...props
}: ProductPictureProps) {
  const pictureURL = pictures[name];
  return <img src={pictureURL} alt={alt} {...props} />;
}
