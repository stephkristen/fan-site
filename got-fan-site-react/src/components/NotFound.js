import background from '../images/ned-stark.jpg';

const containerStyle= {
    height: '150vh',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

}

export default function NotFound() {
    return (
		<div className='p-5 ml-3 bg-body-tertiary rounded-3' role='alert' style={containerStyle}>
			<div className='p-3 m1-5 bg-dark text-light' style={{textAlign: 'right'}}>
				
				<div className='p-4 ml-5'>
					<h1>404 NOT FOUND: <br/>The page you requested is unavailable.</h1>
				</div>
			</div>
		</div>
	);
}