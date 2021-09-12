import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./home.css";
import Footer from "../../Components/Footer/Footer";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
    };
    this.loadFilmes = this.loadFilmes.bind(this);
  }

  componentDidMount() {
    this.loadFilmes();
  }

  loadFilmes() {
    let url = "https://sujeitoprogramador.com/r-api/?api=filmes";
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        this.setState({ filmes: json });
        console.log(json);
      });
  }

  render() {
    return (
      <>
        <div className="container">
          {this.state.filmes.length === 0 && <Loading />}
          {this.state.filmes.length !== 0 && (
            <div className="listaFilmes">
              {this.state.filmes.map((filme) => {
                return (
                  <>
                    <article className="filme" key={filme.id}>
                      <strong>{filme.nome}</strong>
                      <img src={filme.foto} alt="Capa" />
                      <Link to={`/filme/${filme.id}`}>Acessar</Link>
                    </article>
                  </>
                );
              })}
            </div>
          )}
        </div>
        {this.state.filmes.length !== 0 && <Footer />}
      </>
    );
  }
}

export default Home;
