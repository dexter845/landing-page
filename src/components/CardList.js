import { useState } from "react";
import Card from "./Card.js";
import '../custom.css';



const CardList = ()=>{
    const [data, setData] = useState([
        {
            icon : `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" className="h-6 w-6 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>`,
            heading : "5.0 Rating",
            paragraph : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan."
        },
        {
            icon : `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" className="h-6 w-6 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>`,
            heading : "100% Secure",
            paragraph : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan."
        },
        {
            icon : `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" className="h-6 w-6 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>`,
            heading : "5M+ Downloads",
            paragraph : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan."
        }
    ])


    return(
        <div className="cardList md:flex-row flex-col flex justify-around flex-wrap my-16">
        {
            data.map((card , index) =>{
                console.log(card.heading)
                return (
                    <Card key={index.toString()} heading={card.heading} paragraph={card.paragraph} icon={card.icon}/>
                )
            })
        }
     </div>
    )


}

export default CardList;