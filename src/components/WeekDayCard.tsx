import React, { useState } from 'react';
import './WeekDayCard.scss'

interface WeekDayCardProps {
    id: string,
    workouts: Array<object>,
    name: string;
}

export default function WeekDayCard(props: WeekDayCardProps): JSX.Element{
    const {id, name} = props;
    const restDay = false;
    const [rest, setRest] = useState(restDay);
    const [classs, setClasss] = useState('drag-box');
    const [notes, setNotes] = useState(null);
    const [print, setPrint] = useState(false);
    const [value, setValue] = useState('');
    const [swit, setSwit] = useState(false);
    const drop = (e: any): void => {
        e.preventDefault();
        const cardId = e.dataTransfer.getData('cardId');
        const card = document.getElementById(cardId);
        if(card && document){
          card.style.display = 'inline-flex';
          card.style.width = '95%';
          card.style.height = '6vh';
          card.style.paddingTop = '.5rem';
          card.style.paddingBottom = '4rem';
          console.log();
          const eye = document.createElement('img');
          const circ = document.createElement('div');
          circ.className='circle';
          card.childNodes[1].childNodes[1].replaceWith(circ);
          eye.src="https://img.icons8.com/windows/32/ffffff/visible--v1.png";
          eye.className="img";
          card.childNodes[1].childNodes[1].appendChild(eye);
        // console.log(card.childNodes[1].childNodes[1].appendChild(eye));
          e.target.appendChild(card);
        }
        if(!card){
            alert('Try dropping a workout card in here!');
        }
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

    function getData(e: any){
        setValue(e.target.value)
        setNotes(e.target.value);
        setPrint(false);
        e.preventDefault();
    }

    function submit(e: any){
        e.preventDefault();
        setPrint(true);
        e.target.value = '';
        setValue('');
    }
    function handleClick(e: any){
        const dayId = document.getElementById(e.target.parentElement.parentNode.id)
        console.log(e.target.parentElement.parentNode.id);
        if(dayId!.childNodes[3].childNodes.length > 2){
            // alert('Please remove all workouts from a day before marking it as a rest day :)');
            setSwit(true)
        }
        // let parent;
        // for(let e = dayId!.childNodes[3].childNodes.length-1; e > 1; e--){
        //     parent = dayId!.childNodes[3];
        //     parent.removeChild(dayId!.childNodes[3].childNodes[e]);
        // }
        if(dayId!.childNodes[3].childNodes.length <= 2){
        setRest(!rest);
        }
    }

    function dismiss(e: any){
        setSwit(false);
    }


    return(
        <>
        {swit ? <><div className="pop-up" onClick={dismiss}>Remember that all workouts will be cleared before this can be marked as a rest day.<button className="got-it">Got it!</button></div>
                 <div className="outer-bound" id={`${id}${name}`} style={rest ? {backgroundColor: 'rgba(128, 128, 128, 0.267)', borderRadius: '6px', padding: '1.5rem'} : {}}>
                 <div className="day-title-wrapper"><p className="day-title">{name}</p><p className="rest-text" onClick={handleClick}>{rest ? `Unmark as rest day`:`Mark as rest day`}</p></div>
                 <form onSubmit={submit}><input value={value} autoComplete="off" type="text" id="userInput" className="notes-bar" placeholder="Enter notes" onChange={getData}/></form>
                 {print ? <div className="notes">- {notes}</div> : <p/>}
                 {rest ? <div className="rest-day"><p style={{marginTop: '2rem'}}>Rest day</p></div> :
                   <div className={classs} id={id} onDragOver={dragOver} onDragLeave={dragExit} onDrop={drop}>
                     <img src="https://img.icons8.com/ios-glyphs/30/000000/plus-math.png" alt="" className={classs === 'drag-box-hover' ? 'plus-hover' : 'plus'}/>
                     <p className="drag-text" >Drag to add workout</p>
                   </div>
                 }
             </div></>
         :
        <div className="outer-bound" id={`${id}${name}`} style={rest ? {backgroundColor: 'rgba(128, 128, 128, 0.267)', borderRadius: '6px', padding: '1.5rem', paddingTop: '0.8rem'} : {}}>
            <div className="day-title-wrapper"><p className="day-title">{name}</p><p className="rest-text" onClick={handleClick}>{rest ? `Unmark as rest day`:`Mark as rest day`}</p></div>
            <form onSubmit={submit}><input value={value} autoComplete="off" type="text" id="userInput" className="notes-bar" placeholder="Enter notes" onChange={getData}/></form>
            {print ? <div className="notes">- {notes}</div> : <p/>}
            {rest ? <div className="rest-day"><p style={{marginTop: '2rem'}}>Rest day</p></div> :
              <div className={classs} id={id} onDragOver={dragOver} onDragLeave={dragExit} onDrop={drop}>
                <img src="https://img.icons8.com/ios-glyphs/30/000000/plus-math.png" alt="" className={classs === 'drag-box-hover' ? 'plus-hover' : 'plus'}/>
                <p className="drag-text" >Drag to add workout</p>
              </div>
            }
        </div>}
        </>
    )
}