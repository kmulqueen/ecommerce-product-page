import type { ComponentProps } from "react";

type NavItemProps = ComponentProps<"li"> & {
  name: string;
  location: string;
  onClick?: () => void;
};

export default function NavItem({
  name,
  location,
  onClick,
  ...props
}: NavItemProps) {
  /**
   * Closes the hamburger menu when a nav item is clicked.
   *
   */
  function handleClick() {
    onClick?.();
  }
  return (
    <li {...props}>
      <a
        href={location}
        onClick={handleClick}
        className="block py-3 text-preset-3-bold text-grey-950 capitalize hover:mb-[-2px] hover:border-b-2 hover:border-b-orange-500 focus:mb-[-2px] focus:border-b-2 focus:border-b-orange-500 sm:py-6"
      >
        {name}
      </a>
    </li>
  );
}
