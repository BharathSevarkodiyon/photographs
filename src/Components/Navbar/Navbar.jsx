import { useState } from 'react';
import camera_img from '../../asserts/cam_img.jpg'
import './navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
const [menu, setMenu] = useState("home");
    return (
        <div className="nav">
            <ul className="nav-lists">
                <li className="nav-list"><AnchorLink className='anchor-link' offset={10} href='#home'><p onClick={()=>{setMenu("home")}}>Home</p></AnchorLink>{menu === "home"}</li>
                <li className="nav-list"><AnchorLink className='anchor-link' offset={5} href='#photographs'><p onClick={()=>{setMenu("photographs")}}>Photographs</p></AnchorLink>{menu === "photographs"}</li>
                <li><img className="logo" src={camera_img} alt=""/></li>
                <li className="nav-list"><AnchorLink className='anchor-link' offset={5} href='#mosaic'><p onClick={()=>{setMenu("mosaic")}}>Mosaic</p></AnchorLink>{menu === "mosaic"}</li>
                <li className="nav-list"><AnchorLink className='anchor-link' offset={5} href='#costing'><p onClick={()=>{setMenu("costing")}}>Pricing</p></AnchorLink>{menu === "costing"}</li>
            </ul>
        </div>
    );
};
export default Navbar;
