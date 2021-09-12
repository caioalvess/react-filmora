import React, { Component } from "react";
import Footer from "../../Components/Footer/Footer";
import Loading from "../Loading/Loading";
import "./filme.css";

export class Filme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filme: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
    fetch(url)
      .then((r) => r.json())
      .then((json) => this.setState({ filme: json }));
  }

  render() {
    return (
      <>
        {this.state.filme.length === 0 && <Loading />}
        <div className="filme-info">
          <h1>{this.state.filme.nome}</h1>
          <img src={this.state.filme.foto} />
          {this.state.filme.length !== 0 && <h3>Sinopse</h3>}
          {this.state.filme.sinopse}
        </div>
        <Footer />
      </>
    );
  }
}

export default Filme;
