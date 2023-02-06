import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

function Carousel() {
    const images = [
        "Images/img1.jpg",
        "Images/img2.png",
        "Images/img1.jpg"
    ];
    return (
        <Slide>

            {/* <div className='crosl'>
                <div>
                    <img src="./Images/img1.jpg" alt="" />
                </div>
                <div>
                    <img src="./Images/img1.jpg" alt="" />
                </div>
            
                <h1 className='hdg'> Basic Template </h1>
                <div className="txt">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Explicabo culpa enim minus quae! Consectetur dolorem voluptate
                        impedit voluptates maxime consequatur vitae assumenda exercitationem reprehenderit, itaque ducimus doloribus officiis vel tempore vero minima aliquam numquam error?</p>
                </div>
                <div>
                    <button className="btn">Read More</button>
                </div>
            </div>  */}

            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>
                        <h1>Dummy Data</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente ut eaque consectetur explicabo, porro exercitationem reprehenderit non delectus quis nemo nam beatae quidem autem aspernatur ratione et? Dolorum, non.</p>
                        <button className='btn'>Read More</button>
                    </span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>
                    <h1>Dummy Data</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente ut eaque consectetur explicabo, porro exercitationem reprehenderit non delectus quis nemo nam beatae quidem autem aspernatur ratione et? Dolorum, non.</p>
                        <button className='btn'>Read More</button>
                    </span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>
                    <h1>Dummy Data</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente ut eaque consectetur explicabo, porro exercitationem reprehenderit non delectus quis nemo nam beatae quidem autem aspernatur ratione et? Dolorum, non.</p>
                        <button className='btn'>Read More</button>
                    </span>
                </div>
            </div>
        </Slide>
    );
};

export default Carousel;