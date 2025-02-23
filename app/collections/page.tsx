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
    <div className="collections-page">
      <Link href="/" className="back-link">
        <FiChevronLeft />
      </Link>
      <h1 className="collections-title">
        collections
      </h1>
      <div className="collections-container">


        {collections.map((collection) => (
          <CollectionsCard
            key={collection.id}
            collection={collection}
            onClick={() => setSelectedCollection(collection)}
          />
        ))}
      {selectedCollection && (
        <CollectionModal
          album={selectedCollection}
          onClose={() => setSelectedCollection(null)}
        />
      )}
      </div>
    </div>
  );
}
