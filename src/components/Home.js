import Hero from "./Hero.js";
import CardList from "./CardList.js";


const Home = ()=>{
    return(
        <>
        <div className="">
        <Hero heading="Your Solutions For Community" paragraph="More than 2 billion people in over countries use socibook to stay in touch with friends & family."/>
        </div>
        <CardList/>
      </>
    )
}

export default Home;