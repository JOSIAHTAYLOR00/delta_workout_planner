import React from 'react';
import './WorkoutCard.scss';

interface WorkoutCardProps {
    title: string,
    edit: boolean,
    copy: boolean,
    delete: boolean,
    id: string,
}

export default function WorkoutCard(props: WorkoutCardProps){
    const {title, id} = props;
    const dragStart = (e: any): void => {
        const target = e.target;
        e.dataTransfer.setData('cardId', target.id);
        console.log(target.id)
        setTimeout(() => {
            target.style.display = 'none';
        }, 0);
    }

    const dragOver = (e: any): void => {
        e.stopPropagation();
    }

    return(
        <div className="outer-card" id={id} draggable="true" onDragStart={dragStart} onDragOver={dragOver} style={window.outerWidth > 1500 ? {width: "13vw", height: "12vh"} : {width: "90%", height: "15vh"}}>
            <div className="title-wrapper"><p className="title">{title}</p></div>
            <div className="button-wrapper">
                <div className="circle"><img src="https://img.icons8.com/material/24/ffffff/edit--v1.png" alt="" className="edit-img"/></div>
                <div className="circle"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/duplicate.png" alt="" className="edit-img"/></div>
                <div className="circle"><img src="https://img.icons8.com/windows/32/ffffff/delete-forever.png" alt="" className="edit-img"/></div>
            </div>
        </div>
    )
}