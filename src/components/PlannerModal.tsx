import React from 'react';
import './PlannerModal.scss';
import WorkoutCard from './WorkoutCard';

interface WorkoutCardProps{
    wkotData: Array<Workout>,
}

type Workout = {
    workout_id: string,
    user_id: string,
    name: string,
}

export default function PlannerModal(props: WorkoutCardProps): JSX.Element{
    const {wkotData} = props;

    function handleSubmit(e: any){
        if(e.keyCode === 13){
        e.target.replaceWith(e.target.value);
        }
    }

    function handleClick(e: any){
        console.log(e.target.parentNode.parentNode.childNodes[2]);
        const newWorkout = e.target.parentNode.parentNode.childNodes[2].childNodes[0].cloneNode(true);
        e.target.parentNode.parentNode.childNodes[2].insertBefore(newWorkout, e.target.parentNode.parentNode.childNodes[2].childNodes[0]);
        console.log(newWorkout.childNodes[0].childNodes[0]);
        const workoutTitle = document.createElement('input');
        workoutTitle.placeholder='name workout here';
        workoutTitle.className="workout-title";
        newWorkout.childNodes[0].childNodes[0].replaceWith(workoutTitle)
        workoutTitle.onkeydown=handleSubmit;
    }
    return(
        <div className="p-m-content-wrapper">
                <div className="workout-header">Workouts</div>
                <div className="button-div">
                  <button onClick={handleClick} className="workout-button">Create new workout</button>
                </div>
                <div className="pm-content" style={window.outerWidth > 1500 ? {justifyContent: "flex-start"} : {justifyContent: "center"}}>
                    {wkotData.length > 0 ? wkotData.sort((a: { name: string; }, b: { name: string; }) => (Number(a.name.slice(8, a.name.length)) > Number(b.name.slice(8, b.name.length))) ? 1 : -1).map((e: any) => {
                        return <WorkoutCard id={e.name} workout_id={e.workout_id} name={e.name} user_id={e.user_Id}/>
                    }): <h1 style={{fontSize: '20px', width: '100%',textAlign: 'center', marginTop: '4rem', fontWeight: 400}}>it appears you have no workouts, try creating one! </h1>}
                </div>
        </div>
    )
}