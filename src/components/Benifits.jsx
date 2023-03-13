import React from 'react';
import { BenifitsCard } from './BenifitsCard';
import '../css/Benifits.css';
const card = [
    {
        id: 1,
        class: "master-card1",
        cardclass: "benifit-card",
        linkclass: "explore-btn",
        paragraph: "General living space advices Rennovation advices        Interior design advices Furniture reorganization Up to 5 hours meetings ",
        link: "/#"
    },
    {
        id: 2,
        class: "master-card2",
        cardclass: "benifit-card2",
        goldclass: "gold-section",
        linkclass: "explore-btn2",
        paragraph: "Complete home redesign Interior and exterior works      Modular interior planning Kitchen design Garages organization ",
        gold: "Most Popular Plans",
        link: "/#"
    },
    {
        id: 3,
        class: "master-card3",
        cardclass: "benifit-card",
        linkclass: "explore-btn",
        paragraph: " General living space advices Rennovation advices        Interior design advices Furniture reorganization Up to 5 hours meetings  ",
        link: "/"
    }
]

export const Benifits = () => {
    return (
        <div className='benifits-container'>
            <div className='benifits-heading'>
                <div className='benifits-lists'>
                    <h3 className='benifit-category' style={{ "color": "#97999B" }}>SILVER</h3>
                    <p className='benfit-range'>Free to join</p>
                </div>
                <div className='benifits-lists'>
                    <h3 className='benifit-category' style={{ "color": " #E0BE0C" }}>GOLD</h3>
                    <p className='benfit-range'>Spend $350/yr</p>
                </div>
                <div className='benifits-lists'>
                    <h3 className='benifit-category' style={{ "color": "#000000" }}>BLACK</h3>
                    <p className='benfit-range'>Spend $1000/yr</p>
                </div>
            </div>
            <div className='benifits-section'>
                {
                    card.map((item, index) => {
                        return (
                            <BenifitsCard
                                key={index}
                                class={item.class}
                                linkclass={item.linkclass}
                                goldclass={item.goldclass}
                                cardclass={item.cardclass}
                                gold={item.gold}
                                paragraph={item.paragraph}
                                link={item.link}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
