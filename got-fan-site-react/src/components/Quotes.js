import { Link } from 'react-router-dom';

export default function Quotes() {
    return (
        <div className='p-5 mt-5 mb-4 bg-body-tertiary rounded-3'>
            <div className='container-fluid py-5 rounded-3'>
                <h1 style={{textAlign:'center'}}>Game of Thrones Quote Generator</h1>
                <p id='description' style={{textAlign:'center'}}>
                    Click here to generate a random quote.
                </p>
                <div className='my-3'>
                    <p id='quote'>
                    Insert text from API
                    </p>
                </div>
                <div className='my-3'>
                    <button className='btn btn-dark'>Quote</button>
                </div>
            </div>
        </div>
    );
}