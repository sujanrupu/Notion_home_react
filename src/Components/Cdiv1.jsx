import myImg1 from './Images/cdiv_img1.png';
import myImg3 from './Images/cdiv_img3.png';
import myImg2 from './Images/cdiv_img2.png';
import myImg4 from './Images/cdiv_img4.png';
import myImg5 from './Images/cdiv_img5.png';

import './Cdiv1.css';

function Cdiv() {
    return (
        <div className="cdiv1">
            <div className="cdiv1_card">
                <div className="cdiv1_card_left">
                    <img src={myImg1} alt="" className='myImg1' />
                    <div className='cdiv_head'>Customize the info you track</div>
                    <div className='cdiv_text1'>Create your own labels, tags, owners, and more, so ev-</div>
                    <div className='cdiv_text2'>eryone has context and everything stays organized.</div>
                    <img src={myImg3} alt="" className='myImg3' />
                </div>
                <div className="cdiv1_card_right">
                    <img src={myImg2} alt="" className='myImg1' />
                    <div className='cdiv_head'>Build any page, communicate any idea</div>
                    <div className='cdiv_text1'>Everything is drag and drop in Notion — images, tog-</div>
                    <div className='cdiv_text2'>gles, to-do’s, even embedded databases.</div>
                    <img src={myImg4} alt="" className='myImg3' />
                </div>
            </div>

            <div className="cdiv_footer">
                <div className="cdiv_footer_first">"Notion adapts to your needs. It’s as minimal or as</div>
                <div className="cdiv_footer_second">powerful as you need it to be."</div>
                <div className="cdiv_footer_manager">
                    <img src={myImg5} alt="" srcset="" className='myImg5'/>
                    <div className="name">
                        <span className='Name'>Rahim Makani</span>
                        <br /><span className='desg1'>Director of Product, Matchgroup</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cdiv;