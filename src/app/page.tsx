import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
export default function Home() {
  const info = ["This is the next music curation platform", "Amplofi"]
  return (
    <>   
      <Hero name="Amplofi" genre="Pop" info={info}/>
      Hello Guys, My Name is Edward Chikasa
      <Card name="4 Your Eyez Only" genre="Rap" info="This is the 5th studio album realesed by J.Cole exploring the tale of a fallen friend from the persective of that which he will be missing."/>
      <Card name="Born Sinner" genre="Rap/Hip-Hop" info="This is the 3th studio album realesed by J.Cole exploring the life, ups and downs as a rising artist finding his sound."/>
      
      </> 
  );
}
