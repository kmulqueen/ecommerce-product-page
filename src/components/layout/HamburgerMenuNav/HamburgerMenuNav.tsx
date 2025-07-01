import { useRef, useEffect } from "react";
import Container from "../../utility/Container/Container";
import Nav from "../Nav/Nav";
import Icon from "../../utility/Icon/Icon";
import Button from "../../utility/Button/Button";

type HamburgerMenuNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function HamburgerMenuNav({
  isOpen,
  onClose,
  ...props
}: HamburgerMenuNavProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  /**
   * Handles clicking outside of the dialog element to close the dialog element.
   *
   * @param {React.MouseEvent<HTMLDialogElement>} e
   */
  function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
    const rect = dialogRef.current?.getBoundingClientRect();
    if (rect) {
      //* Checks if user's mouse is within the dialog element.
      const isInDialog =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      //* If the user's mouse is outside of the dialog, close the dialog.
      if (!isInDialog) {
        onClose();
      }
    }
  }

  return (
    <Container
      as="dialog"
      ref={dialogRef}
      onCancel={onClose}
      {...props}
      onClick={handleBackdropClick}
      className="m-0 h-screen max-h-none w-64 max-w-none border-none p-6 outline-none backdrop:bg-backdrop sm:w-80 sm:px-20 sm:py-12"
    >
      <Button
        onClick={onClose}
        aria-label="Close menu"
        className="mb-14"
        autoFocus
      >
        <Icon name="close" width={14} height={14} />
      </Button>
      <Nav onItemClick={onClose} />
    </Container>
  );
}
