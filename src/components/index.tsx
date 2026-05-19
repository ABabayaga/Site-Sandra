import Header from "./Header";
import Hero from "./Hero";
import ArtistaCard from "./ArtistaCard";
import Artista from "./Artista";
import Colecao from "./Colecao";
import Series from "./Series";
import Conexoes from "./Conexoes";
import Footer from "./Footer";

const Index = () => {
    return (
      <main>
        <Header />
        <Hero />
        <ArtistaCard />
        <Artista />
        <Colecao />
        {/*<Carrosel selectedImage={selectedImage} onSelect={setSelectedImage} />*/}
        <Series />
        <Conexoes />
        <Footer />
      </main>
    );
  };
  
  export default Index;