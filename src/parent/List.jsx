import React, { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    setTimeout(() => this.getUsers(), 1000 * 5);
  }

  getUsers() {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          users: json.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.length === 0 ? (
            <tr>
              <td colSpan={99}>No records found.</td>
            </tr>
          ) : (
            this.state.users.map((row) => {
              return (
                <>
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.email}</td>
                    <td>{row.first_name}</td>
                    <td>{row.last_name}</td>
                    <td>
                      <img src={row.avatar} alt="row pic" />
                    </td>
                  </tr>
                </>
              );
            })
          )}
        </tbody>
      </table>
    );
  }
}
