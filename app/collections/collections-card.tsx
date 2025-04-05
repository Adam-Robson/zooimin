import Image from "next/image";
import "./collections.css";
export default function CollectionsCard({
  collection,
  onClick,
}: {
  collection: { title: string; cover: string; releaseDate: string };
  onClick: () => void;
}) {
  return (
    <div
      className="collections-card"
      onClick={onClick}
    >
      <Image
        src={collection.cover}
        alt={collection.title}
        height={500}
        width={500}
        className="collections-card-image"
      />
      <div className="collections-card-text">
        <h2 className="caption-title">{collection.title}</h2>
        <p className="caption-body">Released: {collection.releaseDate}</p>
      </div>
    </div>
  );
}
