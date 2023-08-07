import Link from "next/link";
import styles from "../components/styles/navbar.module.css";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
  return (
    <>
      <div className={poppins.className}>
        <nav className={styles.navbar}>
          <Link href="/">
            <Image
              src="/Spotify_icon.svg.png"
              width={500}
              height={333}
              alt="Logo"
              priority={true}
              className={styles.logo}
            />
          </Link>
          <ul className={styles.navLinks}>
            <li className={styles.list_item}>
              <Link href="/spotifyApi">Spotify Api</Link>
            </li>
            <li className={styles.list_item}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.list_item}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
