'use client';
import { useState } from 'react';
import CollectionsCard from '@/collections/collections-card';
import CollectionModal from '@/collections/modal';
import PageTemplate from '@/_components/page-template';
import { collections } from '@/_data/collections';

import { ICollection } from '@/_types/collections';

import "./collections.css";

export default function CollectionsPage() {
  const [selectedCollection, setSelectedCollection] = useState<ICollection | null>(null);
  return (
    <PageTemplate title="collections" backgroundImage={`/images/7.svg`}>
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
    </PageTemplate>
  );
}
