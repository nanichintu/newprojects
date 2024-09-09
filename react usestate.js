import  { useState } from "react";
import "./App.css";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const saveFirstName = (e) => {
    setFirstName(e.target.value);
  };
  
  const handlerSubmit = (e) => {
    e.preventDefault(); //to avoid the refresh browser.
    //to store the values in firstname,lastName,email,data,number.
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(date);
    console.log(number);
    //to clear the form of input value or empty array
    setFirstName(""); 
    setLastName("");
    setEmail("");
    setDate("");
    setNumber("");
  };

  // last name
  const [lastName, setLastName] = useState("");
  const saveLastName = (e) => {
    setLastName(e.target.value);
  };

        //email 
  const [email, setEmail] = useState("");
  const saveEmail = (e) => {
    setEmail(e.target.value);
  };

         //data 
  const [date, setDate] = useState("");
  const saveDate = (e) => {
    setDate(e.target.value);
  };

        //number 
  const [number, setNumber] = useState("");
  const saveNumber = (e) => {
    setNumber(e.target.value);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <center>
         <label>first name</label> &nbsp;
         <input type="text" placeholder="firstname" value={firstName} onInput={saveFirstName}/>
         <br />
         <label>last name</label>&nbsp;
         <input type="text" placeholder="lastname" value={lastName} onInput={saveLastName}/>
         <br />
         <label>E-mail</label>
         <input type="email"placeholder="enter the email" value={email} onInput={saveEmail}/>
         <br />
         <label>Date of birth</label>&nbsp;
         <input type="date" value={date} onInput={saveDate}/>
         <br />
         <label>phone-number</label>&nbsp;
         <input type="number" placeholder="phone-number" value={number} onInput={saveNumber}/>
         <br />
         <button type="submit">Submit</button>
         <button>reset</button>
         </center>
    </form>
  );
};
export default App;