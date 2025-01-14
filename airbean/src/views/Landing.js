import { Link, useNavigate } from 'react-router-dom';
import './Landing.css';
import airbeanlanding from '../assets/graphics/airbean-landing.svg';
import leftFlower from '../assets/graphics/intro-graphic-left.svg';
import rightFlower from '../assets/graphics/intro-graphic-right.svg';
import { useEffect } from 'react';

function Landing() {

    let navigate = useNavigate();
    
    useEffect(() => {
        setTimeout(() => {navigate("/menu")}, 3000);
    }, [])

    return (
        <div>
            <div className="landing">
                <div className="left">
                    <img className="left-flower" src={leftFlower} /> 
                </div>
                
                <div className="right">
                    <img className="right-flower" src={rightFlower} />
                </div>
            </div>
            <div className="center">
                <Link to="/menu" ><img className="logo" src={airbeanlanding} /></Link>
            </div>
        </div>
    )
}

export default Landing;
