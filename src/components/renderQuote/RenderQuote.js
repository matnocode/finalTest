import {useEffect, useState} from "react";
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RenderQuote = (index=0) =>
{
    const[quote,setQuote] = useState([]);
    useEffect(()=>
    {
        fetch("https://strangerthings-quotes.vercel.app/api/quotes/50").then(response => response.json()).then((data)=>
        {
            //console.log(data[index.index].quote);
            setQuote(data[index.index]);

        })

    },[])
    return(
        <div className='quote'>
            <p><span> <FontAwesomeIcon icon={faQuoteLeft}  className="icon"/></span>{quote.quote}<span> <FontAwesomeIcon icon={faQuoteLeft}  className="icon"/></span></p>
            <small> - {quote.author} <i>Stranger Things</i></small>
        </div>
    )
}
export default RenderQuote;