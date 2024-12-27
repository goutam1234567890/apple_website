import React, { Component } from 'react'
import Header from '../Header'
import data from '../../data';
import './index.css'
import {useNavigate} from 'react-router-dom'

class CustomizePage extends Component {
    state = {
        activeCaseIndex: 0, // Tracks the active carousel item for "case"
        activeBandIndex: 0, // Tracks the active carousel item for "band"
        activeOption: '',
        size: "size42",
        caseParent: "aluminum",
        caseChild: "aluminum_1",
        bandParent: "stainless_steel",
        bandChild: "stainless_steel_1",
        selectedCategory: "case", // Default selected category
    };

    // Handle carousel selection
    handleSelect = (selectedIndex) => {
        const { selectedCategory } = this.state;
        const dataLength =
            selectedCategory === "case"
                ? this.getCaseData().length
                : this.getBandData().length;

        if (selectedCategory === "case") {
            this.setState({
                activeCaseIndex: (selectedIndex + dataLength) % dataLength, // Wrap index for "case"
            });
        } else {
            this.setState({
                activeBandIndex: (selectedIndex + dataLength) % dataLength, // Wrap index for "band"
            });
        }
    };

    // Handle category selection
    handleCategorySelection = (category) => {
        this.setState({ selectedCategory: category });
    };

    // Fetch case data
    getCaseData = () => {
        return Object.keys(data().cases[this.state.size])
            .map((key) => data().cases[this.state.size][key])
            .flat();
    };

    // Fetch band data
    getBandData = () => {
        return Object.keys(data().bands[this.state.size])
            .map((key) => data().bands[this.state.size][key])
            .flat();
    };

    handleSave = () => {
        const { navigate } = this.props;
        const caseData = this.getCaseData();
        const bandData = this.getBandData();

        const selectedCase = caseData[this.state.activeCaseIndex];
        const selectedBand = bandData[this.state.activeBandIndex];

        navigate('/save', { state: { selectedCase, selectedBand } });
    };
    

    render() {
        const {
            activeCaseIndex,
            activeBandIndex,
            selectedCategory,
            activeOption,
        } = this.state;

        const caseData = this.getCaseData();
        const bandData = this.getBandData();
        const dynamicZindex = selectedCategory === "band" ? 10 : "";

        // Determine the main image based on the last active image of both categories
        const mainImage =
            selectedCategory === "case"
                ? `${process.env.PUBLIC_URL}/${bandData[activeBandIndex].image}.jpg`
                : `${process.env.PUBLIC_URL}/${caseData[activeCaseIndex].image}.png`;
        return (
            <div>
                <Header onSave={this.handleSave} />
                <div className="container1">
                    {/* Main Image */}
                    <img src={mainImage} alt="Main Display" className="image" style={{ zIndex: dynamicZindex, marginTop: '20px' }} />

                    {/* Carousel */}
                    <div id="carouselExample" className="carousel slide" data-bs-interval="false">
                        <div className="carousel-inner">
                            {(selectedCategory === "case" ? caseData : bandData).map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`carousel-item ${index === (selectedCategory === "case" ? activeCaseIndex : activeBandIndex)
                                        ? "active"
                                        : ""
                                        }`}
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/${item.image}.${selectedCategory === "case" ? "png" : "jpg"
                                            }`}
                                        className="d-block w-100"
                                        alt={item.name}
                                        style={{marginTop: '10px'}}
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Carousel Controls */}
                        <button
                            className="carousel-control-prev"
                            style={{zIndex: 20}}
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                            onClick={() =>
                                this.handleSelect(
                                    (selectedCategory === "case" ? activeCaseIndex : activeBandIndex) - 1
                                )
                            }
                        >
                            <span className="carousel-control-prev-icon prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            style={{zIndex: 20}}
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                            onClick={() =>
                                this.handleSelect(
                                    (selectedCategory === "case" ? activeCaseIndex : activeBandIndex) + 1
                                )
                            }
                        >
                            <span className="carousel-control-next-icon prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="case-details">
                        <p className="paragraph1">APPLE WATCH SERIES 10</p>
                        {selectedCategory === "case" ? (
                            <>
                                <h4 className="heading4">{caseData[activeCaseIndex]?.name}</h4>
                                <p>{caseData[activeCaseIndex]?.price}</p>
                            </>
                        ) : (
                            <>
                                <h4 className="heading4">{bandData[activeBandIndex]?.name}</h4>
                                <p>{bandData[activeBandIndex]?.price}</p>
                            </>
                        )}
                    </div>


                    {/* Options (Size, Case, Band) */}
                    <div className="customize-page">
                        <div className="options-container">
                            {/* Size Option */}
                            <div
                                className={`option-group ${activeOption === "size" ? "active-group" : ""}`}
                                onClick={() => this.setState({ activeOption: "size" })}
                            >
                                {activeOption === "size" ? (
                                    <div className="inline-options">
                                        <button
                                            className="inline-option"
                                            onClick={() => this.setState({ size: "size42" })}
                                        >
                                            42mm
                                        </button>
                                        <button
                                            className="inline-option"
                                            onClick={() => this.setState({ size: "size46" })}
                                        >
                                            46mm
                                        </button>
                                    </div>
                                ) : (
                                    <span className="option-label">Size</span>
                                )}
                            </div>

                            {/* Case Option */}
                            <div
                                className={`option-group ${selectedCategory === "case" ? "active-group" : ""
                                    }`}
                                onClick={() => this.handleCategorySelection("case")}
                            >
                                <span className="option-label">Case</span>
                            </div>

                            {/* Band Option */}
                            <div
                                className={`option-group ${selectedCategory === "band" ? "active-group" : ""
                                    }`}
                                onClick={() => this.handleCategorySelection("band")}
                            >
                                <span className="option-label">Band</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const CustomizePageWithNavigate = (props) => {
    const navigate = useNavigate();
    return <CustomizePage {...props} navigate={navigate} />;
};

export default CustomizePageWithNavigate;
