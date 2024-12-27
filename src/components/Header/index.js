import { useNavigate } from 'react-router-dom';
import './index.css';

function Header({ onSave }) {
    const navigate = useNavigate();

    const handleSave = () => {
        if (onSave) {
            onSave(); // Call the parent's save handler
        } else {
            navigate('/save'); // Fallback navigation
        }
    };

    return (
        <div className="next-line">
            <a
                href="https://www.apple.com/shop/buy-watch/apple-watch"
                target="_blank"
                rel="noreferrer"
                className="anchor"
            >
                <img
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844"
                    alt="logo"
                    className="logo"
                />
            </a>
            <button className="save-button" onClick={handleSave}>
                    Save
                </button>
        </div>
    );
}

export default Header;
