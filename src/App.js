import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  CardTitle,
  CardText,
} from "reactstrap";
import { Navbar, NavbarBrand } from "reactstrap";

function App() {
  const [randomJoke, setRandomJoke] = useState([]);

  const url = "https://official-joke-api.appspot.com/jokes/programming/random";

  const fetchJokes = async () => {
    const res = await fetch(url);
    const joke = await res.json();
    setRandomJoke(joke);
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <>
      <Navbar className="navbar navbar-dark bg-dark">
        <NavbarBrand href="/" className="m-auto p-1">
          Random Programming Jokes
        </NavbarBrand>
      </Navbar>
      <main>
        <div className="container">
          {randomJoke.map((joke) => {
            const { id, setup, punchline } = joke;
            return (
              <Card
                body
                className="text-center card"
                style={{ width: "18rem" }}
                key={id}
              >
                <CardBody className="m-auto p-2">
                  <CardTitle tag="h5">{setup}</CardTitle>
                  <CardText>{punchline}</CardText>
                  <Button onClick={fetchJokes} className="btn btn-dark">
                    Generate Joke
                  </Button>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
