import Footer2_img from './Images/footer2.png'
import './Footer2.css';
function Footer2() {
    return (
        <div>
            <div className="footer2_head">Get started for free</div>
            <div className="footer2_head1">Play around with it first. Pay and add your team later.</div>
            <div className="footer2_hero">
                <div className="btn_footer2">
                    Try Notion Free
                </div>
                <div className="Footer2_btn">
                    Request a demo &rarr;
                </div>
            </div>
            <img src={Footer2_img} alt="" srcset="" className='Footer2_img'/>
        </div>
    );
}
export default Footer2;