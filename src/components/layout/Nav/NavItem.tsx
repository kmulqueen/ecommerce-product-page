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
        className="relative block py-3 text-preset-3-bold text-grey-950 capitalize hover:mb-[-2px] hover:border-b-2 hover:border-b-orange-500 focus:mb-[-2px] focus:border-b-2 focus:border-b-orange-500 sm:py-6 lg:text-preset-3-regular lg:text-grey-500 lg:before:absolute lg:before:right-0 lg:before:bottom-[-32px] lg:before:left-0 lg:before:h-0.5 lg:before:bg-orange-500 lg:before:opacity-0 lg:before:transition-opacity lg:hover:mb-0 lg:hover:border-b-0 lg:hover:before:opacity-100 lg:focus:mb-0 lg:focus:border-b-0 lg:focus:before:opacity-100"
      >
        {name}
      </a>
    </li>
  );
}
