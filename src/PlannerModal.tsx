import React, {useState} from 'react';
import './PlannerModal.scss';
import WorkoutCard from './WorkoutCard';

interface WorkoutCardProps{
    id: string,
    title: string,
    edit: boolean,
    copy: boolean,
    delete: boolean,
}

const workoutCardAr: WorkoutCardProps[] = [
    {id: 'Push Day 1', title: 'Push Day 1', edit: false, copy: false, delete: false},
    {id: 'Push Day 2', title: 'Push Day 2', edit: false, copy: false, delete: false},
    {id: 'Pull Day 1', title: 'Pull Day 1', edit: false, copy: false, delete: false},
    {id: 'Pull Day 2', title: 'Pull Day 2', edit: false, copy: false, delete: false},
    {id: 'Cardio Blast', title: 'Cardio Blast', edit: false, copy: false, delete: false},
    {id: 'Core Focus', title: 'Core Focus', edit: false, copy: false, delete: false}
];

export default function PlannerModal(){
    const [wkotAr, setWkotAr] = useState(workoutCardAr);

    function handleClick(e: any){
        setWkotAr([...wkotAr, {id: 'Core Focus 2', title: 'Core Focus', edit: false, copy: false, delete: false}]);
        console.log(wkotAr)
    }
    return(
        <div className="p-m-content-wrapper">
                <div className="workout-header">Workouts</div>
                <div className="button-div">
                  <button onClick={handleClick} className="workout-button">Create new workout</button>
                </div>
                <div className="pm-content" style={window.outerWidth > 1500 ? {justifyContent: "flex-start"} : {justifyContent: "center"}}>
                    {wkotAr.length > 0 ? workoutCardAr.map((e: WorkoutCardProps) => {
                        return <WorkoutCard workoutCardAr={wkotAr} id={e.id} title={e.title} edit={e.edit} copy={e.copy} delete={e.delete}/>
                    }): <h1 style={{fontSize: '20px', width: '100%',textAlign: 'center', marginTop: '4rem', fontWeight: 400}}>it appears you have no workouts, try creating one! </h1>}
                </div>
        </div>
    )
}