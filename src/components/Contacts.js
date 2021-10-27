import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doeeeee",
          email: "jdoe@gmail.com",
          phone: "555-555-5555",
        },
        {
          id: 2,
          name: "Karen Smith",
          email: "karen@gmail.com",
          phone: "333-333-3333",
        },
        {
          id: 3,
          name: "Henry Johnson",
          email: "henry@gmail.com",
          phone: "111-111-1111",
        },
      ],
    };
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map((contact) => (
          <h1>{contact.name}</h1>
        ))}
      </div>
    );
  }
}

export default Contacts;
