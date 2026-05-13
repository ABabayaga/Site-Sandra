import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import ArtistaCard from "./ArtistaCard";
import Artista from "./Artista";
import Colecao from "./Colecao";
import Carrosel from "./Carrosel";
import Series from "./Series";
import Conexoes from "./Conexoes";
import Footer from "./Footer";

const Index = () => {
    const [selectedImage, setSelectedImage] = useState<string>('/IMAGE 6.png');

    return (
      <main>
        <Header />
        <Hero />
        <ArtistaCard />
        <Artista />
        <Colecao selectedImage={selectedImage} />
        <Carrosel selectedImage={selectedImage} onSelect={setSelectedImage} />
        <Series />
        <Conexoes />
        <Footer />
      </main>
    );
  };
  
  export default Index;