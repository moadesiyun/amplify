import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import styles from "./page.module.css"; // Import CSS module

export default function Home() {
  const info = ["This is the next music curation platform", "Amplofi"];
  return (
    <div>
      <Hero name="Amplofi" genre="Pop" info={info} />
      <div className={styles.cardContainer}>
        <Card
          name="4 Your Eyez Only"
          genre="Rap"
          info="This is the 5th studio album released by J.Cole exploring the tale of a fallen friend from the perspective of that which he will be missing."
        />
        <Card
          name="Born Sinner"
          genre="Rap/Hip-Hop"
          info="This is the 3rd studio album released by J.Cole exploring the life, ups and downs as a rising artist finding his sound."
        />
        {/* Add more Card components here if needed */}
      </div>
    </div>
  );
}
