import Navbar from './Components/Navbar/Navbar'
import Home from "./Components/Home/Home";
import Photographs from './Components/Photographs/Photographs';
import Mosaic from './Components/Mosaic/Mosaic';
import Costing from './Components/Costing/Costing';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Photographs/>
            <Mosaic/>
            <Costing/>
            <Footer/>
        </div>
    );
}

export default App;
