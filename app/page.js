import { Poppins } from "next/font/google";
import Hero from "./components/Hero";
import Navbar from "@/app/components/navbar";
import styles from "../app/components/styles/navbar.module.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <>
      {/* <div>

      <Hero heading='Spotify Api' message='search your favorite music' />

      
</div> */}
      <main className={poppins.className}>
        <Navbar />
        <div className={styles.contentContainer}>
          <div className={styles.header}>
            <Hero heading="Spotify Api" message="search your favorite artist" />
          </div>
        </div>
      </main>
    </>
  );
}
