import { useState } from "react";
import Button from "../../utility/Button/Button";
import Container from "../../utility/Container/Container";
import Icon from "../../utility/Icon/Icon";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import HamburgerMenuNav from "../HamburgerMenuNav/HamburgerMenuNav";
import ShoppingCart from "../Cart/ShoppingCart";
import Badge from "../../utility/Badge/Badge";
import Nav from "../Nav/Nav";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }
  function closeMenu() {
    setIsMenuOpen(false);
  }
  function toggleCart() {
    setIsCartOpen((prevState) => !prevState);
  }
  function closeCart() {
    setIsCartOpen(false);
  }

  // TODO - Remove this dummy product and items.
  const dummyProduct = {
    name: "Fall Limited Edition Sneakers",
    productPrice: "125.00",
    quantity: 3,
  };
  const items = [dummyProduct];

  return (
    <>
      <Container
        as="header"
        className="relative flex flex-row items-center justify-between p-6 sm:px-20 sm:py-8 sm:before:absolute sm:before:right-20 sm:before:bottom-0 sm:before:left-20 sm:before:h-0.5 sm:before:bg-grey-50"
      >
        <Container className="flex flex-row items-center gap-6 lg:gap-16">
          {/*// TODO - Change from hamburger menu to list on desktop/larger viewports  */}
          <Button
            aria-label="Open the navigation menu."
            onClick={toggleMenu}
            className="lg:hidden"
          >
            <Icon name="menu" height={16} width={16} />
          </Button>
          <Icon name="logo" height={20} width={140} />
          <Nav className="hidden lg:block" />
        </Container>
        <Container className="flex flex-row items-center gap-6 sm:gap-10">
          <Button
            className="relative"
            aria-label="View your shopping cart."
            onClick={toggleCart}
          >
            {items?.length > 0 && (
              <Badge
                numItems={items?.length}
                screenReaderText={
                  items?.length === 1 ? " item in cart." : " items in cart."
                }
              />
            )}
            <Icon
              name="cart"
              width={22}
              height={20}
              className="[&>path]:fill-grey-950"
            />
          </Button>
          <ProfilePicture />
        </Container>
      </Container>
      <HamburgerMenuNav isOpen={isMenuOpen} onClose={closeMenu} />
      <ShoppingCart isOpen={isCartOpen} onClose={closeCart} items={items} />
    </>
  );
}
