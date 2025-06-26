import { useState } from "react";
import Button from "../../utility/Button/Button";
import Container from "../../utility/Container/Container";
import Icon from "../../utility/Icon/Icon";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import HamburgerMenuNav from "../HamburgerMenuNav/HamburgerMenuNav";
import ShoppingCart from "../Cart/ShoppingCart";
import Badge from "../../utility/Badge/Badge";

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
        className="flex flex-row justify-between items-center p-6"
      >
        <Container className="flex flex-row items-center gap-6">
          {/*// TODO - Change from hamburger menu to list on desktop/larger viewports  */}
          <Button aria-label="Open the navigation menu." onClick={toggleMenu}>
            <Icon name="menu" height={16} width={16} />
          </Button>
          <Icon name="logo" height={20} width={140} />
        </Container>
        <Container className="flex flex-row items-center gap-6">
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
          <ProfilePicture width={32} />
        </Container>
      </Container>
      <HamburgerMenuNav isOpen={isMenuOpen} onClose={closeMenu} />
      <ShoppingCart isOpen={isCartOpen} onClose={closeCart} items={items} />
    </>
  );
}
