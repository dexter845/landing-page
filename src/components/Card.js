

const Card = (props)=>{
    return(
        <>
            <div className="inline-flex lg:w-1/4 w-full  bg-opacity-20 items-center shadow-md bg-white rounded-lg p-4 flex-col m-4">
                <div className="flex items-center my-4">
                    <span className="text-blue-600" dangerouslySetInnerHTML={{__html: props.icon}}>
                    </span>
                    <h1 className="font-semibold text-3xl">
                        {props.heading}
                    </h1>
                </div>
                <p className="w-3/4 text-center mb-4">
                    {props.paragraph}
                </p>
            </div>

        </>

    )
    
}


export default Card;