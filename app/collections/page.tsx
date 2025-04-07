'use client';

import CollectionsCard from '@/collections/collections-card';
import CollectionModal from '@/collections/modal';
import { Collection, collections } from '@/_data/_collections';
import { useState } from 'react';
import "./collections.css";

export default function CollectionsPage() {
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);

  return (
    <div className="collections-page">
      <h1 className="collections-title text-blue-200">
        collections
      </h1>
        <div className="collections-container">
          {collections.map((collection: Collection) => (
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
