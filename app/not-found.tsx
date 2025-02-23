'use client';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from "next/link";
import './not-found.css';
export default function NotFoundPage() {
  return (
    <motion.div
      className="page "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl">Oops! Page not found.</p>
      <Image src="/images/record.webp" alt="record" width={500} height={500} className="rounded-xl" />
      <Link href="/">
        <button className="mt-12 rounded-xl bg-black px-5 py-2 text-white hover:bg-blue-900 transition">
          Go Home
        </button>
      </Link>
    </motion.div>
  );
}
