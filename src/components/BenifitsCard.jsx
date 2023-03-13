import React from 'react'

export const BenifitsCard = (props) => {
    return (
        <div className={props.cardclass}>
            <div>
                <h3>Complete interior</h3>
            </div>
            <div className={props.class}  >
                <div className='dot1' />
                <div className='dot2' />
                <div className='card-name-container'>
                    <p className='card-name'>Master Credit Card</p>
                </div>
                <div className='card-no-container'>
                    <p className='card-n0'>James Bond</p>
                    <p className='card-n0'>8111-7111-6111-5111</p>
                </div>
            </div>
            {
                props.gold && <div className={props.goldclass}>
                    <a >{props.gold}</a>
                </div>

            }
            <div className='benifit-card-paragraph'>
                <p> {props.paragraph}</p>
            </div>
            <div className='explore-btn-container'>
                <a className={props.linkclass} href={props.link} alt="link">Explore More </a>
            </div>
        </div>
    )
}
