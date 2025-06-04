import { Metadata } from "next";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import styles from "./page.module.css";
import TechnicalSpecifications from "./components/TechnicalSpecifications/TechnicalSpecifications";
import ConstructionFeatures from "./components/ConstructionFeatures/ConstructionFeatures";
import BestChoice from "./components/BestChoice/BestChoice";
import Certificates from "./components/Certificates/Certificates";
import Video from "./components/Video/Video";
import Application from "./components/Application/Application";

export const metadata: Metadata = {
  title: "РИКОМ – рудничная взрывозащищённая светодиодная лента RSD-Ex",
  description:
    "Безопасное освещение от РИКОМ: рудничная взрывозащищённая лента RSD-Ex для промышленных зон. Сертифицировано, надёжно, готово к эксплуатации.",
  authors: [{ name: "РИКОМ" }],
  creator: "РИКОМ",
  publisher: "РИКОМ",
};

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />
      <Features />
      <TechnicalSpecifications />
      <ConstructionFeatures />
      <BestChoice />
      <Certificates />
      <Video />
      <Application />
    </main>
  );
}
