import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Learning from "./components/Learning";
import Footer from "./components/Footer";
import NavLink from "./components/NavLink";

function App() {
  return (
    <div className="main">
      <Header title="Meu Diário da Reprograma" />
      <About
        image="/src/images/profile.png"
        title="Prazer, Juliana"
        text="Sou aluna da turma On17 da Reprograma, atualmente trabalhando como Tech Recruiter e com uma vontade imensa de me aprofundar cada vez mais nesse universo tech."
      />
       <hr></hr>
      <Skills title="O que eu aprendi até o momento?" />
      <Learning
        subtitle="Github"
        gif="https://media.giphy.com/media/jIRPOnUASNsQw/giphy.gif"
        text="Github foi uma caixinha de surpresas pra mim, pois no começo parecia muito fácil, mas ainda hoje me pego batendo cabeça pra resolver algo simples nele haha"
      />
      <Learning
        subtitle="HTML"
        gif="https://media.giphy.com/media/TilmLMmWrRYYHjLfub/giphy.gif"
        text="Eu adorei aprender HTML, já tinha tido uma breve experiência com ele quando fazia blogs mais nova e poder me aprofundar nas aulas da reprograma me motivou muito!"
      />
      <Learning
        subtitle="CSS"
        gif="https://media.giphy.com/media/VuDjPypv6aem4/giphy.gif"
        text="Adoro o CSS! Às vezes passo horas enfeitando o código e cuidando da perfumaria. Não tive muita dificuldade, mas fico certa que isso se deu graças às aulas que tive com as professoras da reprograma."
      />
      <Learning
        subtitle="JavaScript"
        gif="https://media.giphy.com/media/5xtDaru7nxqniasZjgY/giphy.gif"
        text="Socorro Deus! Um baita desafio, considero que ainda estou em aprendizado, é uma linguagem muito bacana, mas bem complexa pra quem está iniciando."
      />
            <NavLink href="/portfolio.html" name="Meu portfólio" />
      <Footer text="Semana 14 - Introdução ao React" />
    </div>
  );
}

export default App;