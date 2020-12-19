import React, { Component } from "react";
import List from "../components/list/List";
import Btn from "../components/btn/Btn";
import {SearchBox} from '../components/searchbox/searchbox.component'

class MainPage extends Component {
  state = {
    employees: [],
    searchTerm: "",
  };

  componentDidMount() {
    this.getEmployees();
  }

  // clearFilter = () => {
  //   this.setState({
  //     employeesToDisplay: this.state.employees,
  //     searchTerm: "",
  //   });
  // };

  getEmployees = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((workers) => this.setState({employees: workers}));
  };

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value}, ()=> {
      console.log(this.state.searchTerm);
    })
  };

  render() {
    const { employees, searchTerm } = this.state;
    const filteredEmployee = employees.filter(employee =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <form>
                <div className="row">
                  <div className="col-sm-2" />
                  <div className="col-sm-8">
                    <div className="form-group">
                      <SearchBox 
                        placeholder="Search employees by first or last name"
                        handleChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <List employees={filteredEmployee} />
      </>

    );
  }
}

export default MainPage;      

