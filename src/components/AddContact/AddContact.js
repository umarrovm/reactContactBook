import React, { useState } from "react";
import "../Styles/Style.css";

const AddContact = (props) => {
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [phone, setPhone] = useState("");

  //   console.log(name, surname, phone);

  function handleClick() {
    let newContact = {
      name,
      surname,
      phone,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setSurname("");
    setPhone("");
  }

  return (
    <div className="container">
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Имя"
        value={name}
      />
      <input
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="Фамилия"
        value={surname}
      />
      <input
        onChange={(e) => setPhone(e.target.value)}
        type="number"
        placeholder="Номер телефона"
        value={phone}
      />
      <button onClick={handleClick}>Add Contact</button>
    </div>
  );
};

export default AddContact;
