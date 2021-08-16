import React, { useState } from "react";
import "../css/home.css";
import logo from "../images/logo.png";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({
    number: "",
    country: "",
  });

  const [result, setResult] = useState();

  let name, value;
  const Inputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const getData = async (e) => {
    e.preventDefault();

    if (!data.number) {
      alert("please enter phone number");
    } else if (!data.country) {
      alert("please select country");
    } else {
      const res = await axios.get(
        `http://apilayer.net/api/validate?access_key=7c36f9a1b3ab4845b73c4be89deb96e4&number=${data.number}&country_code=${data.country}&format=1`
      );

      setResult(res.data);

      if (res.data.valid === false) {
        alert("Wrong Details");
      }
    }
  };

  return (
    <div>
      <header id="heads">
        <img src={logo} alt={logo} id="logo" />
        <h1>WELCOME TO NUMBER DETAILS</h1>
      </header>

      <form method="POST">
        <span> Phone Number</span>{" "}
        <input
          type="text"
          name="number"
          id="number"
          placeholder="eg 123456789"
          value={setData.number}
          onChange={Inputs}
        />
        <br />
        <span>Country Code </span>
        <select name="country" value={setData.country} onChange={Inputs}>
          <option value="N/A">Empty (Default)</option>
          <option value="IN">India</option>
          <option value="AF">Afganistan</option>
        </select>
        <br />
        <a href="#databox">
          <button onClick={getData}>Get Details</button>
        </a>
      </form>
      <div className="data" id="databox">
        <div className="top">
          DETAILS{" "}
          <a href="#heads">
            <button>Try another</button>
          </a>
        </div>

        {result ? (
          <>
            {" "}
            <li>
              <span className="left">NUMBER: </span>
              <span className="right">{result.number}</span>
            </li>
            <li>
              <span className="left">COUNTRY PREFIX: </span>
              <span className="right">{result.country_prefix}</span>
            </li>
            <li>
              <span className="left">COUNTRY CODE: </span>
              <span className="right">{result.country_code}</span>
            </li>
            <li>
              <span className="left">COUNTRY NAME: </span>
              <span className="right">{result.country_name}</span>
            </li>
            <li>
              <span className="left">LOCATION: </span>
              <span className="right">{result.location}</span>
            </li>
            <li>
              <span className="left">CARRIER: </span>
              <span className="right">{result.carrier}</span>
            </li>
            <li>
              <span className="left">LOCAL FORMAT: </span>
              <span className="right">{result.local_format}</span>
            </li>
            <li>
              <span className="left">INTERNATION FORMAT: </span>
              <span className="right">{result.international_format}</span>
            </li>
            <li>
              <span className="left">LINE TYPE: </span>
              <span className="right">{result.line_type}</span>
            </li>{" "}
          </>
        ) : (
          <>
            <li>
              <span className="left">NUMBER: </span>
              <span className="right">N/A</span>
            </li>
            <li>
              <span className="left">COUNTRY PREFIX: </span>
              <span className="right">N/A</span>
            </li>
            <li>
              <span className="left">COUNTRY CODE: </span>
              <span className="right">N/A</span>
            </li>
            <li>
              <span className="left">COUNTRY NAME: </span>
              <span className="right">N/A</span>
            </li>
            <li>
              <span className="left">LOCATION: </span>
              <span className="right">N/A</span>
            </li>
            <li>
              <span className="left">CARRIER: </span>
              <span className="right">N/A</span>
            </li>
            <li>
              <span className="left">LOCAL FORMAT: </span>
              <span className="right">N/A</span>
            </li>
            <li>
              <span className="left">INTERNATION FORMAT: </span>
              <span className="right">N/A</span>
            </li>
            <li>
              <span className="left">LINE TYPE: </span>
              <span className="right">N/A</span>
            </li>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
