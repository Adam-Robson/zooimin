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
      className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={collection.cover}
        alt={collection.title}
        height={500}
        width={500}
        className="w-full h-48 object-cover hover:scale-105 transition-transform"
      />
      <div className="p-4 card">
        <h2 className="text-lg lg:text-xl font-semibold mb-2">{collection.title}</h2>
        <p className="text-sm">Released: {collection.releaseDate}</p>
      </div>
    </div>
  );
}
