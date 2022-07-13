import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Repositories from "./components/Repositories";
import Footer from "./components/Footer";

function Portfolio() {
  return (
    <div className="main">
      <Header title="Meu Portfólio da Reprograma" />
      <About
        image="./src/images/profile.png"
        title="Olá, sou a Juliana!"
        text="Sou aluna da turma On17 da Reprograma, atualmente trabalhando como Tech Recruiter e com uma vontade imensa de me aprofundar cada vez mais nesse universo tech."
      />
      <hr></hr>
      <Skills title="4 projetos realizados durante a reprograma" />
      <Projects />
      <Skills title="Outros projetos no meu GitHub" />
      <div className="repositories-container">
        <Repositories />
      </div>
      <Footer text="Feito com amor, Juliana" />
    </div>
  );
}

export default Portfolio