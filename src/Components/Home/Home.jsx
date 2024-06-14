import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsListTask } from 'react-icons/bs';
import { FaTripadvisor } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { TbApps } from 'react-icons/tb';
import video from '../../Assets/video1.mp4';
import './home.scss';




const  Home = () => {
  return (
    <div>
      <section className='home'>
        <div className='overlay'></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>

        <div className="homeContent container">

          <div className="textDiv">

            <span className="smallText">
              Our Packages
            </span>

            <h1 className="homeTitle">
              Search Your Holiday
            </h1>
            
          </div>
         
          <div className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city">Search Your Destination</label>
              <div className="input flex">
               <input type="text" placeholder='Enter Name here....'/>
               <GrLocation className='icon'/>
              </div>

              <div className="dateInput">
              <label htmlFor="date">Select Your Date:</label>
              <div className="input flex">
               <input type="date"/>
              </div>
            </div>

            <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
            </div>


            </div>

            <div className="searchOptions flex">
              <HiFilter className="icon"/>
              <span>MORE FILTERS</span>
            </div>
          </div>

          <div className="homeFooterIcons flex">
            <div className="rightIcons">
              <FiFacebook className="icon"/>
              <FaTripadvisor className="icon"/>
              <AiOutlineInstagram className="icon"/> 
            </div>

            <div className="leftIcons">
            <BsListTask className="icon"/> 
            <TbApps className="icon"/> 


            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Home;
