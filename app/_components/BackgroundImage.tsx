import { IBackgroundImageProps } from "@/_types/background-image";
import "./background-image.css";

export default function BackgroundImage({
  imageUrl,
  overlayColor = "rgba(100, 100, 100, 0.3)",
  children,
}: IBackgroundImageProps) {
  return (
    <div
      className="background-container"
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
