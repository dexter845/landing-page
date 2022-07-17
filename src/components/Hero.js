
import { Link } from "react-router-dom";

const Hero = (props)=>{
    return(
        <>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-6 hero_wrapper">
                <div className="hero_text text-center md:text-left flex md:block flex-col items-center">
                    <h1 className="hero_heading text-4xl md:text-6xl">{ props.heading }</h1>
                    <p className="text-lg text-gray-500 my-4 w-3/4 ">{props.paragraph}</p>
                    <Link to="/contact" className="text-white bg-[#217BF4] py-4 my-4 text-lg px-16 rounded-full">Get A Quote</Link>
                </div>
                <div>
                    <img src={ process.env.PUBLIC_URL + '/hero-image.png' }/>
                </div>

            </div>
        </>
    )



}


export default Hero;