import React, { useState } from 'react';
import './WeekDayCard.scss'

interface WeekDayCardProps {
    day: string,
    restDay: boolean,
    id: string,
}

export default function WeekDayCard(props: WeekDayCardProps): JSX.Element{
    const {day, restDay, id} = props;
    const [rest, setRest] = useState(restDay);
    const [classs, setClasss] = useState('drag-box');
    const drop = (e: any): void => {
        e.preventDefault();
        const cardId = e.dataTransfer.getData('cardId');
        const card = document.getElementById(cardId);
        if(card){
            card.style.transition = 'heigth 2s';
          card.style.display = 'inline-flex';
          card.style.width = '90%';
          card.style.height = '6vh';
          card.style.paddingTop = '.5rem';
          card.style.paddingBottom = '4rem';
        }
        e.target.appendChild(card);
        setClasss('drag-box');
    }
    const dragOver = (e: any): void => {
        e.preventDefault();
        setClasss('drag-box-hover');
    }
    const dragExit = (e: any): void => {
        e.preventDefault();
        setClasss('drag-box');
    }

    return(
        <div className="outer-bound" style={rest ? {backgroundColor: 'rgba(128, 128, 128, 0.267)', borderRadius: '6px', padding: '1.5rem'} : {}}>
            <div className="day-title-wrapper"><p className="day-title">{day}</p><p className="rest-text" onClick={(e) => {setRest(!rest)}}>{rest ? `Unmark as rest day`:`Mark as rest day`}</p></div>
            <input className="notes-bar" placeholder="Enter notes"/>
            {rest ? <div className="rest-day"><p style={{marginTop: '2rem'}}>Rest day</p></div> : <div className={classs} id={id} onDragOver={dragOver} onDragLeave={dragExit} onDrop={drop}>
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/plus-math.png" alt="" className={classs === 'drag-box-hover' ? 'plus-hover' : 'plus'}/>
                        <p className="drag-text">Drag to add workout</p>
                    </div>
            }
            <div/>
        </div>
    )
}