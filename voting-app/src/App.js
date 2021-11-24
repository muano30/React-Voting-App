import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function VotingApp() {

  const [voting, setVoting] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    district: '',
    partyName: '',
  })

  const [votingList, setVotingList] = useState([])

  const handleDelete = (index) => {
    const newVotingList = [...votingList];
    newVotingList.splice(index, 1)
    setVotingList(newVotingList)
  }

const resetRadioButton = (checkedValues) => {
  
}

  const handleChange = (e) => {
    setVoting({ ...voting, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    setVotingList([...votingList, voting])
    setVoting({
      firstName: '',
      lastName: '',
      idNumber: '',
      district: '',
      partyName: '',
    }
    )

  }

  return (
    <div className="App">
      <h1>VOTING APP</h1>
      <form onSubmit={handleSubmit}>
        <div className="first-input">
          {/* <label for="firstName">First Name:</label> */}
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={voting.firstName}
            placeholder="First Name"
          />
          {/* <label>Last Name:</label> */}
          <input className="lastName-Space"
            type="text"
            name="lastName"
            onChange={handleChange}
            value={voting.lastName}
            placeholder="Last Name"
          />

        </div>

        <div>
          {/* <label>Id Number:</label> */}
          <input
            style={{width: "24rem"}}
            type="number"
            name="idNumber"
            onChange={handleChange}
            value={voting.idNumber}
            placeholder="Id Number"

          />
        </div>

        <div>
          {/* <label>District:</label> */}
          <input
            style={{ width: "24rem" }}
            type="text"
            name="district"
            onChange={handleChange}
            value={voting.district}
            placeholder="District"
          />
        </div>
        <div className="radioButton" onChange={handleChange} value={voting.partyName}>
          <fieldset>
          <legend>Choose Your Party</legend>
          <label>ANC</label>
          <input type="radio" name="partyName"
            value="ANC"
          />

          <label>DA</label>
          <input type="radio" name="partyName"
            value="DA"
          />

          <label>EFF</label>
          <input type="radio" name="partyName"
            value="EFF"
          />

          <label> ASA </label>
          <input type="radio" name="partyName"
            value="ASA"
          />
          </fieldset>
        </div>

        <button type="submit">Vote</button>

      </form>


      {votingList.map((item, index) => {
        return (
          <div key={index}>
            <h3>First-Name: {item.firstName}</h3>
            <h3>Last-Name: {item.lastName}</h3>
            <h3>Id-Number: {item.idNumber}</h3>
            <h3>District: {item.district}</h3>
            <h3>Vote: {item.partyName}</h3>
            <h3>Delete List: <button type="delete" onClick={() => handleDelete()}>Delete</button></h3>

          </div>
        );
      })}
    </div>

  );
}

export default VotingApp;
