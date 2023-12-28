import './Faces.css';
import fimg from './Images/faces.png';
import face2 from './Images/face2.png';
import face3 from './Images/face3.png'


function Faces() {
    return (
        <div className='total_face'>
            <div className="head">
                <span className="head1">Join a global movement.</span>
                <br /><div className="head2">Unleash your creativity.</div>
            </div>
            <div className="face_desc">
                <span className="desc1">Our vibrant community produces content, teaches courses, and leads events all over</span>
                <br /><span className="desc2">the world.</span>
                <br /><div className="link1">Learn More &rarr;</div>
            </div>
            <div className="face_img">
                <img src={fimg} alt="" srcset="" />
            </div>
            <div className="face_stat">
                <div className="memebers">
                    <div className="mem1" data-count="100">1M+</div>
                    <div className="mem_desc">community members</div>
                </div>
                <div className="memebers">
                    <div className="mem1" data-count="100">150+</div>
                    <div className="mem_desc">community groups</div>
                </div>
                <div className="memebers">
                    <div className="mem1" data-count="100">50+</div>
                    <div className="mem_desc">countries represented</div>
                </div>
            </div>

            <div className="face_conc">
                <div className="conc1">
                    <div className="conc_head">An always-on support network</div>
                    <div className="conc_1">Swap setups and share tips in over 149 online</div>
                    <div className="conc_2">communities.</div>
                    <img src={face2} alt="" srcset="" className='face2'/>
                </div>
                <div className="conc1">
                    <div className="conc_head">Choose your language</div>
                    <div className="conc_1">Notion currently supports English, Korean, Japanese,</div>
                    <div className="conc_2">French, German, Spanish, and Portuguese. With more to come!</div>
                    <img src={face3} alt="" srcset="" className='face3'/>
                </div>
            </div>
        </div>
    );
}
export default Faces;