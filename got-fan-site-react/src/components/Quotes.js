import { Link } from 'react-router-dom';
import background from '../images/fire-unsplash.jpg';
import axios from 'axios';
import { useEffect, useState } from 'react';

const containerStyle= {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // display: 'block',
    // padding: '1em',
}

const outerContainerStyle= {
    width: '100vw',
    height: '100vh',
    background:'#000000',
    backgroundSize: 'cover',
    // margin: '0',
    // padding: '1em',
}

export default function Quotes() {
    const [quote, setQuote] = useState('');
    const [character, setCharacter] = useState('');

        // async function getGOTObject({object}) {
        //     let gameOfThronesObject = [];
        //     try {
        //         const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
        //         if (response.status === 200) {
        //             const gameOfThronesObject = await response.json();
        //             console.log(gameOfThronesObject);
        //             // how to access what is inside this json? destructure with props?
        //         }
                
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }

        // try {
        //     // setQuote(gameOfThronesObject.sentence);
        //     // console.log(arrayOfQuotes.sentence);
        //     // setCharacter(gameOfThronesObject.character.name);
        // } catch (error) {
        //     console.log(error);
        // }
    

    // const getGOTObject = async () => {
    //     let arrayOfQuotes = [];
    //     try {
    //         const data = axios.get('https://api.gameofthronesquotes.xyz/v1/random');
    //         // console.log(data);

    //         arrayOfQuotes = (await data).data;
            
    //     } catch (error) {
    //         console.log(error);
    //     }

    //     try {
    //         setQuote(arrayOfQuotes.sentence);
    //         // console.log(arrayOfQuotes.sentence);
    //         setCharacter(arrayOfQuotes.character.name);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     getGOTObject();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return (
        <div className='container-fluid' style={outerContainerStyle}>
            <div className='p-5 mb-4 bg-body-tertiary rounded-3' style={containerStyle}>
                <div className='p-3 mb-2 bg-transparent text-light'>
                    <div className='container-fluid py-5 rounded-3' style={{textAlign:'center'}}>
                        <h1>Game of Thrones Quote Generator</h1>
                        <div className='container-fluid my-3 p-3'>
                            <h5 id='quote'>
                            "{quote}"
                            </h5>
                            <h6>
                                --from {character} in 
                                <cite title='Game of Thrones'>Game of Thrones</cite>
                            </h6>
                        </div>
                        <p id='description'>
                            Click the button to generate a quote from a random character.
                        </p>
                        <div className='my-3'>
                            <button className='btn btn-dark'>Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}