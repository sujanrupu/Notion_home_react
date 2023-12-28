import one from './Images/Companies/1.png'
import two from './Images/Companies/2.png'
import three from './Images/Companies/3.png'
import four from './Images/Companies/4.png'
import five from './Images/Companies/5.png'
import six from './Images/Companies/6.png'

import seven from './Images/Companies/7.png'
import eight from './Images/Companies/8.png'
import nine from './Images/Companies/9.png'
import ten from './Images/Companies/10.png'
import eleven from './Images/Companies/11.png'
import twelve from './Images/Companies/12.png'

import thirteen from './Images/Companies/13.png'
import fourteen from './Images/Companies/14.png'

import './Client.css';

function Client() {
    return (
        <div>
            <div className='client_top'>
                <div className='client_head'>
                    Millions run on Notion every day
                </div>
                <div className="client_desc">
                    <span>Powering the world’s best teams, from next-generation startups</span>
                    <br /><span>to established enterprises.</span>
                </div>
                <div className="client_link">
                    Read customer stories &rarr;
                </div>
            </div>

            <div className="client_logo">
                <div className="frow">
                    <img src={one} alt="" srcset="" className='client_img'/>
                    <img src={two} alt="" srcset="" className='client_img'/>
                    <img src={three} alt="" srcset="" className='client_img'/>
                    <img src={four} alt="" srcset="" className='client_img'/>
                    <img src={five} alt="" srcset="" className='client_img'/>
                    <img src={six} alt="" srcset="" className='client_img'/>
                </div>

                <div className="srow">
                    <img src={seven} alt="" srcset="" className='client_img'/>
                    <img src={eight} alt="" srcset="" className='client_img'/>
                    <img src={nine} alt="" srcset="" className='client_img'/>
                    <img src={ten} alt="" srcset="" className='client_img'/>
                    <img src={eleven} alt="" srcset="" className='client_img'/>
                    <img src={twelve} alt="" srcset="" className='client_img'/>
                </div>

                <div className="trow">
                    <img src={thirteen} alt="" srcset="" className='client_img'/>
                    <img src={fourteen} alt="" srcset="" className='client_img'/>
                </div>
            </div>
        </div>
    );
}
export default Client;