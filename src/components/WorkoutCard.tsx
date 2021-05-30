import React from 'react';
import './WorkoutCard.scss';

interface WorkoutCardProps {
    name: string,
    id: string,
    user_id: string,
    workout_id: string,
}

export default function WorkoutCard(props: WorkoutCardProps): JSX.Element{
    const {name, id} = props;
    const dragStart = (e: any): void => {
        const target = e.target;
        e.dataTransfer.setData('cardId', target.id);
        console.log(target.id)
        setTimeout(() => {
            target.style.display = 'none';
        }, 0);
    }

    const dragOver = (e: { stopPropagation: () => void; }): void => {
        e.stopPropagation();
    }

    function handleCopy(e: any){
        const el = e.target.parentElement.parentElement.parentElement;
        const pEl = e.target.parentElement.parentElement.parentElement.parentElement;
        const clone = e.target.parentElement.parentElement.parentElement.cloneNode(true);
        clone.id = `cardId`;
        if(el.childNodes.length <= 2 && el.childNodes[0].className === 'title-wrapper' ){
        clone.childNodes[1].childNodes[1].addEventListener('click', handleCopy);
        clone.childNodes[1].childNodes[2].addEventListener('click', handleDelete);
        pEl.appendChild(clone);
        }
    }
    function handleDelete(e: any){
        const el = e.target.parentElement.parentElement.parentElement;
        const pEl = e.target.parentElement.parentElement.parentElement.parentElement;
        console.log(el.childNodes);
        if(el.childNodes.length <= 2 && el.childNodes[0].className === 'title-wrapper' ){
          pEl.removeChild(el);
        }
    }

    return(
        <div className="outer-card" id={id} draggable="true" onDragStart={dragStart} onDragOver={dragOver} style={window.outerWidth > 1500 ? {width: "13vw", height: "12vh"} : {width: "90%", height: "15vh"}}>
            <div className="title-wrapper"><p className="title">{name}</p></div>
            <div className="button-wrapper">
                <div className="circle"><img src="https://img.icons8.com/material/24/ffffff/edit--v1.png" alt="" className="img"/></div>
                <div className="circle" onClick={handleCopy}><img src="https://img.icons8.com/ios-glyphs/30/ffffff/duplicate.png" alt="" className="img" id="to-view"/></div>
                <div className="circle" onClick={handleDelete}><img src="https://img.icons8.com/windows/32/ffffff/delete-forever.png" alt="" className="img"/></div>
            </div>
        </div>
    )
}