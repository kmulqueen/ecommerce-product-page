import Container from "../../utility/Container/Container";
import NavItem from "./NavItem";

type NavProps = {
  onItemClick?: () => void;
  className?: string;
};

export default function Nav({ onItemClick, className }: NavProps) {
  const navItems = ["collections", "men", "women", "about", "contact"];

  return (
    <Container as="nav" className={className}>
      <Container as="ul" className="lg:flex lg:flex-row lg:gap-8">
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
