import Header from "./Header";
import Hero from "./Hero";
import Artista from "./Artista";
import Spotify from "./Spotify";
import Colecao from "./Colecao";
import Entregas from "./Entregas";
import Series from "./Series";
import Instagram from "./Instagram";
import Conexoes from "./Conexoes";
import Footer from "./Footer";

const Index = () => {
    return (
      <main>
        <Header />
        <Hero />
        <Artista />
        <Spotify />
        <Colecao />
        {/*<Carrosel selectedImage={selectedImage} onSelect={setSelectedImage} />*/}
        <Entregas />
        <Series />
        <Instagram />
        <Conexoes />
        <Footer />
      </main>
    );
  };

  export default Index;
