import background from '../images/fire-unsplash.jpg';
import { useEffect, useState } from 'react';

const containerStyle= {
    height: '150vh',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

export default function Quotes() {
    const [quote, setQuote] = useState('');
    const [character, setCharacter] = useState('');

        async function getGOTObject() {
            let gameOfThronesObject = [];
            try {
                const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
                if (response.status === 200) {
                    const {sentence, character} = await response.json();
                    
                    setQuote(sentence);
                    setCharacter(character.name);
                }
                
            } catch (error) {
                console.log(error);
            }
        }

    useEffect(() => {
        getGOTObject();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div className='p-5 mb-4 bg-body-tertiary rounded-3' style={containerStyle}>
                <div id='quoteBox' className='p-3 mb-2 bg-transparent text-light'>
                    <div className='py-5 rounded-3' style={{textAlign:'center'}}>
                        <h1>Game of Thrones Quote Generator</h1>
                        <div className='my-3 p-3'>
                            <h5 id='quote'>
                            "{quote}"
                            </h5>
                            <h6>
                                --from {character} in 
                                <cite title='Game of Thrones'> Game of Thrones</cite>
                            </h6>
                        </div>
                        <p id='description'>
                            Get a quote from a character.
                        </p>
                        <div className='my-3'>
                            <button onClick={getGOTObject} className='btn btn-dark'>Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}