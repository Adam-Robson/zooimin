import React from "react";
import "./background-image.css";

interface BackgroundImageProps {
  imageUrl: string;
  overlayColor?: string;
  children?: React.ReactNode;
}

export default function BackgroundImage({
  imageUrl,
  overlayColor = "rgba(0, 0, 0, 0.5)",
  children,
}: BackgroundImageProps) {
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
