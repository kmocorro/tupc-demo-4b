import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OurMission from "../components/OurMission";
import OurVision from "../components/OurVision";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TUPC</title>
        <meta
          name="description"
          content="Technological University of the Philippines - Cavite"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <OurVision />
      <OurMission />
    </div>
  );
}
