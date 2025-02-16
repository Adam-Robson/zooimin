import { IBackgroundImageProps } from "@/_types/background-image";
import "./background-image.css";

export default function BackgroundImage({
  imageUrl,
  overlayColor,
  children,
}: IBackgroundImageProps) {
  return (
    <div
      className="background-container opacity-60"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}>
      <div
        className="background-overlay"
        style={{
          backgroundColor: overlayColor
        }}
      />
      <div className="content">{children}</div>
    </div>
  );
};
