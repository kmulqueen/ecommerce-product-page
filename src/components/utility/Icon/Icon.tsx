import CartIcon from "../../../assets/images/icon-cart.svg?react";
import CloseIcon from "../../../assets/images/icon-close.svg?react";
import DeleteIcon from "../../../assets/images/icon-delete.svg?react";
import MenuIcon from "../../../assets/images/icon-menu.svg?react";
import MinusIcon from "../../../assets/images/icon-minus.svg?react";
import NextIcon from "../../../assets/images/icon-next.svg?react";
import PlusIcon from "../../../assets/images/icon-plus.svg?react";
import PreviousIcon from "../../../assets/images/icon-previous.svg?react";
import Logo from "../../../assets/images/logo.svg?react";
import { type SVGProps } from "react";

const icons = {
  cart: CartIcon,
  close: CloseIcon,
  delete: DeleteIcon,
  menu: MenuIcon,
  minus: MinusIcon,
  next: NextIcon,
  plus: PlusIcon,
  previous: PreviousIcon,
  logo: Logo,
} as const;

type IconName = keyof typeof icons;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  width?: number;
  height?: number;
}

export default function Icon({ name, width, height, ...props }: IconProps) {
  const IconComponent = icons[name];

  return <IconComponent {...props} width={width} height={height} />;
}
