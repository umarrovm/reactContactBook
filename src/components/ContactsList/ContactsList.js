import React from "react";

const ContactsList = (props) => {
  return (
    <div className="container-2">
      {props.contacts.map((item, index) => (
        <ul className="ul-1" key={item.id}>
          <li>{item.name}</li>
          <li>{item.surname}</li>
          <li>{item.phone}</li>
          <li>
            <button onClick={() => props.handleDeleteContact(item.id)}>
              Delete
            </button>
            <button onClick={() => props.handleEditeIndex(index)}>Edit</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ContactsList;
