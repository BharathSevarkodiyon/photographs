import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import landscape1 from "../../asserts/689201.jpg";
import landscape2 from "../../asserts/pexels-andy-vu-3244513.jpg";
import landscape3 from "../../asserts/robert-shunev-mS1nlYbq1kA-unsplash.jpg";
import "./home.css";

const Home = () => {
  const img_slide = [landscape1, landscape2, landscape3];

  const slide = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "545px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: "30px",
    marginBottom: "90px",
    // position: "absolute",
  };

  // const spanStyle = {
  //   display: "flex",
  //   justifyContent: "center",
  //   background: "#efefef",
  //   color: "#000000",
  //   fontSize: "20px",
  //   position: "absolute",
  // };

  return (
    <div id="home" className="home">
      <Slide>
        {img_slide.map((image, index) => {
          return (
            <div key={index}>
              <div style={{ ...slide, backgroundImage: `url(${image})` }}></div></div>
          );
        })}
      </Slide>
    </div>
  );
};
export default Home;
