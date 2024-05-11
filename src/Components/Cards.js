import { useState } from "react";


function Cards({id,name,image,description,price,removeGames}){

    const [readMore,setReadMore] = useState(false);
    const info = readMore ? description : `${description.substring(0,200)}....`
    function readMoreHandler(){
        setReadMore(!readMore);
    }
    return(
        <div className="card">
            <img src={image} className='image' alt="" />
            <div className="game-info">
                <div className="game-details">
                    <h4 className="game-price">{price}</h4>
                    <h4 className="game-name">{name}</h4>
                </div>
                <div className="description">
                    {info}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readMore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={()=> removeGames(id)}>
                BUY
            </button>
        </div>
    );
}

export default Cards;