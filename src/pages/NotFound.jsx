import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
    return (
        <div className='not-found-page'>
            <div className='error-code'>404</div>
            <div className='error-message'>Oops! Page not found...</div>
            <Link to="/" className='home-link'>Go Back Home</Link>
        </div>
    );
}
