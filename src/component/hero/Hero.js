import React from 'react'
import './Hero.css'
import Header from '../header/Header'
import Heart from '../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
    const transition ={type : 'spring',duration:3}
    const mobile=window.innerWidth <=768 ? true : false;
    return (
        <div className='hero' id='home'>

        <div className='blur blur-h'></div>
            <div className='left-h'>
                <Header></Header>

                <div className='the-best-ad'>
                    <motion.div
                        initial ={{left: mobile?"165px":"238px"}}
                        whileInView={{left:'8px'}}
                        transition={{...transition,type:'tween'}}
                    ></motion.div>{/*<div></div>*/}
                    <span>the best fitness club in the town</span>

                </div>

                <div className="hero-text">
                    <div>
                        <spam className ='stroke-text'>Shape </spam><span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your body
                        </span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span><NumberCounter start={100} end={140} delay="4" preFix="+"></NumberCounter></span>
                        <span>export coaches</span>
                    </div>
                    <div>
                        <span><NumberCounter start={900} end={978} delay="4" preFix="+"></NumberCounter></span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span><NumberCounter start={30} end={50} delay="4" preFix="+"></NumberCounter></span>
                        <span>fitness programs</span>
                    </div>

                </div>

                <div className='hero-buttons'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn more</button>
                </div>
            </div>
            <div className='right-h'>
                <button className='btn'>join us</button>

                <motion.div
                    initial={{right:'-1rem'}}
                    transition={transition}
                    whileInView={{right:'4rem'}}
                    className='heart-rate'>
                    <img src={Heart} alt='' />
                    <span>Heart Rate</span><span>116 bpm</span>
                </motion.div>

                <img src={hero_image} alt='' className='hero-image'/>
                <motion.img
                    initial={{right:'12rem'}}
                    whileInView={{right:'20rem'}}
                    transition={transition}
                    src={hero_image_back} alt='' className='hero-image-back'/>

                <motion.div
                    initial={{right:'50rem'}}
                    whileInView={{right:'37rem'}}
                    transition={transition}
                    className='calories'>
                    <img src={Calories} alt=''/>
                    <div>
                        <span>Calories Burned</span><span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>

    )
}

export default Hero