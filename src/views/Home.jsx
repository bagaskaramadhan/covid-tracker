import React from 'react'
import CovidImage from '../assets/image/covid19.png'
import {} from '../assets/css/style.css'
import { Image } from 'react-bootstrap'
const Home = () => {
    return (
        <div className="container">
            <div className="centre">
                <Image src={CovidImage} />
            </div>
        </div>
    )
}

export default Home