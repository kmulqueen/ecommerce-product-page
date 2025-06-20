import Button from "../../utility/Button/Button";
import Container from "../../utility/Container/Container";
import Icon from "../../utility/Icon/Icon";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

export default function Header() {
  return (
    <Container
      as="header"
      className="flex flex-row justify-between items-center p-6"
    >
      <Container className="flex flex-row items-center gap-6">
        {/*// TODO - Change from hamburger menu to list on desktop/larger viewports  */}
        <Button aria-label="Open the navigation menu.">
          <Icon name="menu" height={16} width={16} />
        </Button>
        <Icon name="logo" height={20} width={140} />
      </Container>
      <Container className="flex flex-row items-center gap-6">
        <Button aria-label="View your shopping cart.">
          <Icon name="cart" width={22} height={20} />
        </Button>
        <ProfilePicture width={32} />
      </Container>
    </Container>
  );
}
