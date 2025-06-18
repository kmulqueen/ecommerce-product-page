import avatarImage from "../../../assets/images/image-avatar.png";

type ProfilePictureProps = {
  width?: number;
  height?: number;
};

export default function ProfilePicture({ width, height }: ProfilePictureProps) {
  return (
    <img
      src={avatarImage}
      alt="Someone's profile picture"
      width={width}
      height={height}
    />
  );
}
