import avatarImage from "../../../assets/images/image-avatar.png";

export default function ProfilePicture() {
  return (
    <img
      src={avatarImage}
      alt="Someone's profile picture"
      className="w-8 sm:w-12"
    />
  );
}
