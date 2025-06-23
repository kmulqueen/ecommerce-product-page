import Container from "../../utility/Container/Container";
import NavItem from "./NavItem";

type NavProps = {
  onItemClick?: () => void;
};

export default function Nav({ onItemClick }: NavProps) {
  const navItems = ["collections", "men", "women", "about", "contact"];

  return (
    <Container as="nav">
      <Container as="ul">
        {navItems.map((item) => (
          <NavItem
            key={item}
            name={item}
            location={`/${item}`}
            onClick={onItemClick}
          />
        ))}
      </Container>
    </Container>
  );
}
