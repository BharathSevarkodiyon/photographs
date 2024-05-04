import listImage1 from '../../asserts/list-image1.jpg'
import listImage2 from "../../asserts/list-image2.jpg";
import listImage3 from "../../asserts/list-image3.jpg";
import listImage4 from "../../asserts/list-image4.jpg";
import listImage5 from '../../asserts/list-image5.jpg'
import listImage6 from "../../asserts/list-image6.jpg";
import './photographs.css'

const Photographs = ()=>{
    return (
        <div id='photographs' className="photographs">
            <head>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
                </style>
            </head>
            <div className="title">
                <h1>Photographs</h1>
                <p>Through photographs, we can travel back in time and relive cherished moments</p>
            </div>
            <div className="list-images">
                <div className="list-image">
                    <img src={listImage1} alt=""/>
                    <p className='text'>Sea</p>
                </div>
                <div className="list-image">
                    <img src={listImage2} alt=""/>
                    <p className='text'>Camel</p>
                </div>
                <div className="list-image">
                    <img src={listImage3} alt=""/>
                    <p className='text'>Siblings</p>
                </div>
                <div className="list-image">
                    <img src={listImage4} alt=""/>
                    <p className='text'>Couples</p>
                </div>
                <div className="list-image">
                    <img src={listImage5} alt=""/>
                    <p className='text'>Sunset</p>
                </div>
                <div className="list-image">
                    <img src={listImage6} alt=""/>
                    <p className='text'>Children</p>
                </div>
            </div>
        </div>
    )
}
export default Photographs