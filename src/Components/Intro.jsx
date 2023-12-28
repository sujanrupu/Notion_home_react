import arrow from './Images/right_arrow.png'
import hero from './Images/home-hero.png'
import './Intro.css';
function Intro() {
    return (
        <div className='total_intro'>
            <div className="first">Write, plan, share.</div>
            <div className="second">With AI at your side.</div>
            <div className="desc">Notion is the connected workspace where better, faster work happens.</div>
            <button className='btn1'>Get Notion free
            <img src={arrow} className='arrow_img'/>
            </button>
            <img src={hero} className='hero' />
        </div>
    );
}
export default Intro;