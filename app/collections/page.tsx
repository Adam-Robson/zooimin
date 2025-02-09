'use client';

import { collections } from '@/_data/collections';
import { ICollection } from '@/_types/collections';
import CollectionsCard from '@/collections/collections-card';
import CollectionModal from '@/collections/modal';
import Link from 'next/link';
import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import "./collections.css";


export default function CollectionsPage() {
  const [selectedCollection, setSelectedCollection] = useState<ICollection | null>(null);

  return (
    <div className="collections min-h-screen p-8 max-w-screen-sm mx-auto">
      <Link href="/" className="back-link">
        <FiChevronLeft />
      </Link>
      <h1 className="text-4xl font-extralight tracking-widest text-center mb-8">Collections</h1>
      <div className="card-container max-w-lg md:max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {collections.map((collection) => (
          <CollectionsCard
            key={collection.id}
            collection={collection}
            onClick={() => setSelectedCollection(collection)}
          />
        ))}
      </div>
      {selectedCollection && (
        <CollectionModal
          album={selectedCollection}
          onClose={() => setSelectedCollection(null)}
        />
      )}

    </div>
  );
}
