"use client";
import "@/_components/header.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="header">
      <div className="logo">
        <Link href="/" className="link">
          <Image
            src="/images/logo/typewriter.svg"
            alt=""
            width={200}
            height={200}
          />
        </Link>
      </div>
      <nav>
        <ul className="navlinks">
          {!isHome && (
            <li>
              <Link href="/" className="navlink">
                <span className="span">Home</span>
              </Link>
            </li>
          )}
          <li>
            <Link href="/collections" className="navlink">
              <span className="span">Collections</span>
            </Link>
          </li>
          <li>
            <Link href="/about" className="navlink">
              <span className="span">About</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
