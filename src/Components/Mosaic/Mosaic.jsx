import mosaicImage1 from '../../asserts/mosaicImg1.jpg'
import mosaicImage2 from '../../asserts/mosaicImg2.jpg'
import './mosaic.css'

const Mosaic = ()=>{

    return(
        <div id='mosaic' className='mosaic'>
            <head>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
                </style>
            </head>
            <div className="title">
                <h1>Mosaic</h1>
                <p>A mosaic is a pattern or image made of small regular or irregular 
                    pieces of colored stone, glass or ceramic, held in place by plaster/mortar, 
                    and covering a surface.</p>
            </div>
            <div className="images">
                <div className="left">
                    <img src={mosaicImage1} alt="" />
                </div>
                <div className="right">
                    <img src={mosaicImage2} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Mosaic