import React from "react";
import { useState, useEffect } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { IoIosCheckbox, IoIosCloseCircle } from "react-icons/io";

function Relatorio() {
  const [relatorio, setRelatorio] = useState("");
  const [update, setUpdate] = useState(false);
  const history = useHistory();
  const goEdicao = (usuarioid) => history.push("/edicao/" + usuarioid);
  const goHome = () => history.push("/");

  const goDelete = async (usuarioid) => {
    console.log("Excluindo usuario " + usuarioid);
    const resposta = await fetch(
      `http://localhost:3333/relatorios/` + usuarioid,
      { method: "DELETE" }
    );
    setUpdate(!update);
  };

  useEffect(() => {
    async function fetchData() {
      const resposta = await fetch(`http://localhost:3333/relatorios`);
      const dados = await resposta.json();
      console.log(dados);
      setRelatorio(dados);
    }
    fetchData();
  }, [update]);

  return (
    <>
      <header className="jumbotron jumbotron-fluid pt-4 h-25 section-1"></header>

      <main className="row d-flex justify-content-center principal m-0">
        <div className="h5 bg-white ">
          <h3>Relatório de Usuários:</h3>
          <hr />

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Data Nascimento</th>
                <th>E-mail</th>
                <th>Sexo</th>
                <th>Ativo</th>
                <th>Editar</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {relatorio &&
                relatorio.map((item) => (
                  <tr>
                    <td>{item.nome}</td>
                    <td>{item.datanascimento}</td>
                    <td>{item.email}</td>
                    <td>{item.descricao}</td>
                    <td>
                      {item.ativo == "1" ? (
                        <IoIosCheckbox size={25} color="green" />
                      ) : (
                        <IoIosCloseCircle size={25} color="red" />
                      )}
                    </td>
                    <td>
                      <Button
                        type="submit"
                        variant="outline-primary"
                        size="md"
                        active
                        onClick={() => {
                          goEdicao(item.usuarioid);
                        }}
                      >
                        Editar
                      </Button>
                    </td>
                    <td>
                      <Button
                        type="submit"
                        variant="outline-primary"
                        size="md"
                        active
                        onClick={() => goDelete(item.usuarioid)}
                      >
                        Excluir
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <h5>
            {" "}
            Ativo = <IoIosCheckbox size={20} color="green" /> Inativo ={" "}
            <IoIosCloseCircle size={20} color="red" />
          </h5>
          <ButtonGroup
            aria-label="Basic example"
            style={{
              padding: "0px 10px 10px  1px",
            }}
          >
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
        </div>
      </main>
    </>
  );
}

export default Relatorio;
