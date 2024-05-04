import { useState } from "react";
import "./costing.css";

const Costing = () => {
  let [price, setPrice] = useState(0);
  let [album, setAlbum] = useState(0);

  const pop = () => {
    let inp1 = document.getElementById("inp1").value;
    let inp2 = document.getElementById("inp2").value;
    if (inp1 && inp2 != null) {
      document.getElementsByClassName("popup")[0].classList.add("active");
      let num2 = parseInt(inp2);
      let count = 0;
      while (num2 >= 50) {
        count++;
        num2 = num2 - 50;
      }
      setPrice(inp1 * 417);
      setAlbum(count);
    } else {
      alert("Please Enter the value");
    }
  };

  const dismiss = () => {
    document.getElementsByClassName("popup")[0].classList.remove("active");
    let inp1 = document.getElementById("inp1");
    let inp2 = document.getElementById("inp2");
    inp1.value = "";
    inp2.value = "";
  };

  return (
    <div id="costing" className="costing">
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        </style>
      </head>

      <div className="heading">
        <h1>Pricing</h1>
        <p>To calculate the pricing</p>
      </div>

      <div className="popup center">
        <div className="logo"></div>
        <div className="title">
          <h2>Estimated Price:</h2>
        </div>
        <div className="description">
          <p>
            The estimated cost for the album will be Rs. {price}, and it will 
            consist of {album} photo {album <= 1 ? "print" : "prints"}.
          </p>
        </div>
        <div className="dismiss-btn">
          <button onClick={dismiss} id="dismiss">
            Dismiss
          </button>
        </div>
      </div>

      <div className="pricing-container">
        <div className="work">
          <label htmlFor="">Enter the Amount Of Working Hours</label>
          <span>*Enter the Hours in number</span>
          <input
            id="inp1"
            className="data"
            type="number"
            placeholder="Enter the hours"
          />
        </div>
        <div className="photo">
          <label htmlFor="">Enter the number of photos for Album</label>
          <span>*Enter the photos count</span>
          <input
            id="inp2"
            className="data"
            type="number"
            placeholder="Enter the count"
          />
        </div>
      </div>

      <div className="submitClass">
        <button onClick={pop} type="submit" id="sub">
          Submit
        </button>
      </div>
    </div>
  );
};
export default Costing;
