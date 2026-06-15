import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import ArtistaCard from "./ArtistaCard";
import Artista from "./Artista";
import Spotify from "./Spotify";
import Colecao from "./Colecao";
import Series from "./Series";
import SeriesModal from "./SeriesModal";
import Conexoes from "./Conexoes";
import Footer from "./Footer";

const Index = () => {
    const [seriesOpen, setSeriesOpen] = useState(false);

    return (
      <main>
        <Header onOpenSeries={() => setSeriesOpen(true)} />
        <Hero />
        <ArtistaCard />
        <Artista />
        <Spotify />
        <Colecao />
        {/*<Carrosel selectedImage={selectedImage} onSelect={setSelectedImage} />*/}
        <Series />
        <Conexoes />
        <Footer />
        {seriesOpen && <SeriesModal onClose={() => setSeriesOpen(false)} />}
      </main>
    );
  };

  export default Index;