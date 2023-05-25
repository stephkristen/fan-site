import background from "../images/got-background.jpeg"
import '../index.css';

const containerStyle= {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

export default function Home() {

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Welcome Game of Thrones Fans!</h1>
            <div className="container"
            style={containerStyle}>
            </div>
        </div>
      );
    
}