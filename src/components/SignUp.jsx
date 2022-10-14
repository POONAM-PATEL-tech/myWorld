import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./SignUp.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import api  from "../api/contacts";
function SignUp() {
  const LOCAL_STORAGE_KEY = "contacts";
 // const [contacts, setContacts] = useState(
   // JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  //);
  const [contacts ,setContacts]=useState([]);
  //RetrieveContacts
  const retrieveContacts=async()=>{
    const response=await api.get("/contacts");
    return response.data;
  };
  //retrieveContacts();
    const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

   useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
     const getAllContacts=async()=>{
      const allContacts=await retrieveContacts();
      if(allContacts) setContacts(allContacts);
     };
     getAllContacts();
}, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default SignUp;