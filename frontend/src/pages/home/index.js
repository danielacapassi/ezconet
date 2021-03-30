import React from "react";
import logo from "../../assets/imagens/bemvindo.png";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const goCadastro = () => history.push("/usuario/");
  const goRelatorio = () => history.push("/relatorios/");
  return (
    <>
      <header className="jumbotron jumbotron-fluid pt-4 h-25 section-1"></header>

      <main className=" justify-content-center principal m-0">
      <div
        style={{ padding: "60px 2px 60px 1px" }}
        className="col-lg-2 col-sm-12 mx-auto"
      >
        <img alt="bem vindo" src={logo} />
      </div>

      <ButtonToolbar
        className="mb-3"
        style={{
          padding: "0px 10px 10px 630px",
        }}
        aria-label="Toolbar with Button groups"
      >
        <ButtonGroup className="mr-2" aria-label="First group">
          <Button
            type="submit"
            variant="outline-primary"
            size="md"
            onClick={() => {
              goCadastro();
            }}
            active
          >
            Cadastro
          </Button>
          <Button
            type="submit"
            variant="outline-primary"
            size="md"
            onClick={() => {
              goRelatorio();
            }}
            active
          >
            Relatório
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
      </main>
    </>
  );
}

export default Home;
