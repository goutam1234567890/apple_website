import './index.css'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <a href='https://www.apple.com/shop/buy-watch/apple-watch' target="_blank" rel="noreferrer">
                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&amp;hei=52&amp;fmt=jpeg&amp;qlt=90&amp;.v=1566849941844" alt="logo" className="logo" />
            </a>
            <div className="heading-container">
                <h1>
                    <span className="span-1 displaying">Apple Watch Studio</span>
                    <span className="span-2 displaying">Choose a case.</span>
                    <span className="span-3 displaying">Pick a band.</span>
                    <span className="span-4 displaying">Create your own style.</span>
                </h1>
                <Link to='/customize' className="link">
                    <div className="buttons-container">
                        <button className="btn">Get started</button>
                    </div>
                </Link>
            </div>
            <div className='bottom-container'>
                <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM" alt="band" className="band-img" />
                <img src="https://res.cloudinary.com/dqhagljvz/image/upload/v1734965841/watch-case-46-aluminum-jetblack-nc-s10_VW_PF_watch-face-46-aluminum-jetblack-s10_VW_PF_hg86m1.png" alt="case" className="case-img" />
            </div>
        </div>
    );
};

export default HomePage;