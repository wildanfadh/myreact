import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron } from "react-bootstrap";
import NavbarTop from "components/navbar/NavbarTop";
import DataTable from "react-data-table-component";
import DefaultFooter from "components/footer/Footer";
import axios from "axios";
// import Loader from "react-loader-spinner";

const data = [
  { id: 1, title: "Conan the Barbarian", year: "1982" },
  { id: 2, title: "Conan the Barbarian", year: "1982" },
  { id: 3, title: "Conan the Barbarian", year: "1982" },
];
// var data = "";
// axios.get(`http://localhost:8080/api/post`).then((res) => {
//   console.log(res.data.data);
//   data = res.data.data;
// });

const columns = [
  {
    name: "Title",
    selector: "title",
    sortable: true,
  },
  {
    name: "Content",
    selector: "content",
    sortable: true,
    right: true,
  },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // loader: undefined,
      post: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/post`).then((res) => {
      console.log(res.data.data);
      // const post = res.data.data;
      // this.setState({ post });
    });
  }

  render() {
    return (
      <Fragment>
        <NavbarTop />
        <Jumbotron fluid>
          <Container>
            <h1>Hello this is React Js</h1>
            <h2>This is Home Page</h2>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>
        <Container>
          <DataTable title="API List" columns={columns} data={data} />
        </Container>
        <DefaultFooter />
      </Fragment>
    );
  }
}

export default Home;
