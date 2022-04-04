import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <header>
      <Navbar bg="primary" variant="dark" className="shadow" expand="md">
        <Container fluid="md" >

          
        <Link to="/" class="text-decoration-none">
                <Navbar.Brand href="#home">Anime Insight</Navbar.Brand>
              </Link>
              <Navbar.Toggle />

              <Navbar.Collapse>
                <Form className="d-flex mt-3 mt-md-0">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Button variant="outline-light">Search</Button>
                </Form>
              </Navbar.Collapse>



        </Container>
      </Navbar>
    </header>
  );

  // <nav className="navbar navbar-dark bg-primary shadow">
  //       <div className="container fluid">
  //         {/* TODO: maybe add a book with a eye as a logo */}
  //         <Link to="/">
  //           <div className="navbar-brand">Anime Insight</div>
  //         </Link>
  //         <form className="d-flex">
  //           <input
  //             className="form-control me-2"
  //             type="search"
  //             placeholder="Search"
  //             aria-label="Search"
  //             value={inputValue}
  //             onChange={(e) => setInputValue(e.target.value)}
  //           />
  //           {/* TODO: change search for a eye-glass, maybe a input-group*/}
  //           <button className="btn btn-outline-light" type="submit">
  //             Search
  //           </button>
  //         </form>
  //       </div>
  //     </nav>
};

export default Header;
