import ai from './Images/ai.png';
import wiki from './Images/wiki.png'
import proj_card from './Images/projects_card.png'
import docs from './Images/docs.png'
import React, { useState } from 'react';
import './Cards.css';
function Cards() {
    return (
        <div className='total'>
            <div className="card1">
                <div className="head_card1">
                    <img src={ai} className='ai_card_image' />
                    <div className="head_ai">AI</div>
                </div>
                <div className='txt_card1'>Ask Literally anything. Notion will answer.</div>
                <div className='link_card1'>Learn More &rarr;</div>
            </div>

            <div className="card2">
                <div className="head_card1">
                    <img src={wiki} className='ai_card_image' />
                    <div className="head_ai">WiKi</div>
                </div>
                <div className='txt_card1'>Centralize your knowledge. No more hunting for answer.</div>
                <div className='link_card2'>Learn More &rarr;</div>
            </div>

            <div className="card3">
                <div className="head_card1">
                    <img src={proj_card} className='ai_card_image' />
                    <div className="head_ai">Projects</div>
                </div>
                <div className='txt_card1'>Manage complex projects without the chaos.</div>
                <div className='link_card3'>Learn More &rarr;</div>
            </div>

            <div className="card4">
                <div className="head_card1">
                    <img src={docs} className='ai_card_image' />
                    <div className="head_ai">Docs</div>
                </div>
                <div className='txt_card1'>Simple, powerful, beautiful. Next-gen notes & docs.</div>
                <div className='link_card4'>Learn More &rarr;</div>
            </div>
        </div>

    );
}
export default Cards;