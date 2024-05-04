import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        </style>
      </head>
      <div className="container">
        <p>Copyright &copy; 2024 Phoby</p>
        <p>Terms & Conditons</p>
      </div>
      <div className="connect">
        <div className="connect-content">
          <p>Follow Us:</p>
          <div className="anchor">
            <a href="#">Youtube</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
