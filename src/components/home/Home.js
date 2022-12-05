import RenderQuote from "../renderQuote/RenderQuote";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import {Button, Carousel} from "react-bootstrap";
import {useState} from "react";

const Home = ()=>
{
    //<RenderQuote index='3'></RenderQuote> put this in qouteContainer
        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

    return(
        <>
            <div className="block ">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <div className="quoteContainer pt-5">
                            <RenderQuote index='1'></RenderQuote>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="quoteContainer pt-5">
                            <RenderQuote index='2'></RenderQuote>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="quoteContainer pt-5">
                            <RenderQuote index='3'></RenderQuote>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );

}
export default Home;