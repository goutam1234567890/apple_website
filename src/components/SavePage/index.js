import { useLocation } from 'react-router-dom';
import './index.css';

function SavePage() {
    const location = useLocation();
    const { selectedCase, selectedBand } = location.state || {};

    if (!selectedCase || !selectedBand) {
        return <div>No data available!</div>;
    }

    const totalPrice = selectedCase.price + selectedBand.price;

    const shareableLink = `${window.location.origin}/save?case=${encodeURIComponent(
        selectedCase.name
    )}&band=${encodeURIComponent(selectedBand.name)}`;

    return (
        <div className="save-page">
            <h2>Your Selection</h2>
            <div className="selection-details">
                <div>
                    <h4>Case</h4>
                    <img
                        src={`${process.env.PUBLIC_URL}/${selectedCase.image}.png`}
                        alt={selectedCase.name}
                        className="case-image"
                    />
                    <p>{selectedCase.name}</p>
                    <p>Price: ${selectedCase.price}</p>
                </div>
                <div>
                    <h4>Band</h4>
                    <img
                        src={`${process.env.PUBLIC_URL}/${selectedBand.image}.jpg`}
                        alt={selectedBand.name}
                        className="band-image"
                    />
                    <p>{selectedBand.name}</p>
                    <p>Price: ${selectedBand.price}</p>
                </div>
            </div>
            <h3>Total Price: ${totalPrice}</h3>
            <h4>Shareable Link</h4>
            <p>
                <a href={shareableLink} target="_blank" rel="noreferrer">
                    {shareableLink}
                </a>
            </p>
        </div>
    );
}

export default SavePage;
