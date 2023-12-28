import './AddOne.css';
import lineman from './Images/lineman.png'
import line from './Images/line.png'
import metalab from './Images/metalab.png'
function AddOne() {
    return (
        <div className="total_add">
            <div className='add_top'>
                <div className="addone_head">
                    <span>Consolidate tools.</span>
                    <br /><div className='test1'>Cut costs.</div>
                </div>
                <img src={lineman} alt="" className='lman' />
            </div>
            <img src={line} alt="" className='ladd' />
            <div className="text_add">
                <div className="text_one">
                    "We got rid of nearly a dozen different tools because of
                </div>
                <div className="text_two">
                    what Notion does for us."
                </div>
            </div>

            <div className="add_footer">
                <img src={metalab} alt="" className='metalogo'/>
                <div className='add_state'>
                    <div className='justin'>Justin Watt</div>
                    <div className='justin_desg'>Director of Ops & Marketing, MetaLab</div>
                </div>
            </div>
        </div>
    );
}
export default AddOne;
