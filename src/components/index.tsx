import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { smoothScrollToHash } from "../utils/scrollToHash";
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
    const { hash } = useLocation();

    // Ao chegar em "/" com um #hash vindo de outra rota (ex: /series/:slug),
    // a seção alvo ainda não existe no DOM no momento do load — precisamos
    // aguardar a renderização e então rolar até ela manualmente.
    useEffect(() => {
      if (!hash) return;
      smoothScrollToHash(hash);
    }, [hash]);

    return (
      <main>
        <Header />
        <Hero />
        <Artista />
        <Spotify />
        <Colecao />
        {/*<Carrosel selectedImage={selectedImage} onSelect={setSelectedImage} />*/}
        <Entregas />
       {/*  <Series /> */}
        <Instagram />
        <Conexoes />
        <Footer />
      </main>
    );
  };

  export default Index;
