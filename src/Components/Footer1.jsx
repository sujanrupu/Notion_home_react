import './Footer1.css';

import footer1_one_img from './Images/Footer1/1-removebg-preview.png';
import footer1_two_img from './Images/Footer1/2.png';
import footer1_three_img from './Images/Footer1/3-removebg-preview.png';
import footer1_five_img from './Images/Footer1/5-removebg-preview.png'
import footer1_six_img  from './Images/Footer1/6-removebg-preview.png'
import footer1_seven_img from './Images/Footer1/7-removebg-preview.png'
import footer1_nine_img from './Images/Footer1/9-removebg-preview.png'
import eight_footer1 from './Images/Footer1/8.png'

function Footer1() {
    return (
        <div className="total_footer1">
            <div className="footer1_head">
                <div className="footer1_head_left">
                    <div className="footer1_one">Endless ways to use it</div>
                    <div className="footer1_two">Browse all templates→</div>
                </div>
                <img src={eight_footer1} alt="" srcset="" className='eight_footer1'/>
            </div>

            <div className="footer1_cards">
                <div className="footer1_cards_left">
                    <img src={footer1_one_img} alt="" srcset="" className='footer1_one_img'/>
                    <div className="head12">Company wiki</div>
                    <div className="footer1_two1">Get template→</div>
                    <img src={footer1_two_img} alt="" srcset="" className='footer1_two_img'/>
                </div>

                <div className="footer1_cards_right">
                    <div className="footer1_frow">
                        <div className="footer_card1">
                            <img src={footer1_three_img} alt="" srcset="" className='footer1_three_img'/>
                            <div className="footer1_1">Product roadmap</div>
                            <div className="footer1_two2">Get template→</div>
                        </div>
                        <div className="footer_card1">
                            <img src={footer1_five_img} alt="" srcset="" className='footer1_three_img'/>
                            <div className="footer1_11">OKRS</div>
                            <div className="footer1_two2">Get template→</div>
                        </div>
                    </div>
                    <div className="footer1_frow">
                        <div className="footer_card1">
                            <img src={footer1_six_img} alt="" srcset="" className='footer1_three_img'/>
                            <div className="footer1_111">Meeting notes</div>
                            <div className="footer1_two2">Get template→</div>
                        </div>
                        <div className="footer_card1">
                            <img src={footer1_seven_img} alt="" srcset="" className='footer1_three_img'/>
                            <div className="footer1_11111">Vacation Planner</div>
                            <div className="footer1_two2">Get template→</div>
                        </div>
                    </div>
                    <div className="footer1_frow">
                        <div className="footer_card1">
                            <img src={footer1_nine_img} alt="" srcset="" className='footer1_three_img'/>
                            <div className="footer1_11111">Editorial Calendar</div>
                            <div className="footer1_two2">Get template→</div>
                        </div>
                        <div className="footer_card1">
                            <img src={footer1_three_img} alt="" srcset="" className='footer1_three_img'/>
                            <div className="footer1_111">Habit Tracker</div>
                            <div className="footer1_two2">Get template→</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer1;