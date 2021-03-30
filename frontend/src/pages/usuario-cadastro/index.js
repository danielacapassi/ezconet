import React from "react";
import { useState } from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Usuario() {
  const history = useHistory();
  const goHome = () => history.push("/");
  const [nome, setNome] = useState("");
  const [datanascimento, setDatanascimento] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [sexo, setSexo] = useState("Feminino");

  const mandarDados = async (nome, datanascimento, email, senha, sexo) => {
    console.log(sexo);
    const resposta = await fetch(`http://localhost:3333/usuario/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": " application/json",
      },
      body: JSON.stringify({ nome, datanascimento, email, senha, sexo }),
    }).then((response) => {
      alert("Dados inseridos com sucesso");
    });
    setNome("");
    setDatanascimento("");
    setEmail("");
    setSenha("");
    setSexo("");
  };

  return (
    <>
      <header className="jumbotron jumbotron-fluid pt-4 h-25 section-1"></header>

      <main className="row d-flex justify-content-center principal m-0">
        <div className="h5 bg-white ">
          <h3>Cadastro de Usuários:</h3>
          <hr />

          <div class="form-group">
            <label for="nome">Nome:</label>
            <input
              type="text"
              className="form-control"
              id="nome"
              placeholder="Digite seu nome"
              name="nome"
              onChange={(e) => {
                setNome(e.target.value);
              }}
              value={nome}
              required
            />
          </div>

          <div class="form-group">
            <label for="datanascimento">Data de Nascimento:</label>
            <input
              type="datanascimento"
              className="form-control"
              name="datanascimento"
              id="datanascimento"
              placeholder="xxxx/xx/xx"
              onChange={(e) => {
                setDatanascimento(e.target.value);
              }}
              value={datanascimento}
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Digite seu email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              required
            />
          </div>

          <div class="form-group">
            <label for="sexo">Sexo:</label>
            <select
              name="sexo"
              class="form-control"
              id="sexo"
              onChange={(e) => {
                setSexo(e.target.value);
              }}
              placeholder="Qual seu sexo?"
              required
            >
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
            </select>
          </div>

          <div class="form-group">
            <label for="password">Senha:</label>
            <input
              type="password"
              className="form-control"
              name="senha"
              id="senha"
              placeholder="Digite sua senha"
              onChange={(e) => {
                setSenha(e.target.value);
              }}
              value={senha}
              required
            />
          </div>

          <ButtonToolbar
            className="mb-3"
            aria-label="Toolbar with Button groups"
            style={{
              padding: "0px 10px 10px 80px",
            }}
          >
            <ButtonGroup className="mr-2" aria-label="First group">
              <Button
                type="submit"
                variant="outline-primary"
                size="md"
                active
                onClick={() => {
                  mandarDados(nome, datanascimento, email, senha, sexo);
                }}
              >
                Enviar
              </Button>

              <Button
                type="submit"
                variant="outline-primary"
                size="md"
                active
                onClick={() => {
                  goHome();
                }}
              >
                Home
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </main>
    </>
  );
}

export default Usuario;
