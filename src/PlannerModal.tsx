import React from 'react';
import './PlannerModal.scss';
import WorkoutCard from './WorkoutCard';

export default function PlannerModal(){
    return(
        <div className="p-m-content-wrapper">
                <div className="workout-header">Workouts</div>
                <div className="button-div">
                  <button className="workout-button">Create new workout</button>
                </div>
                <div className="pm-content" style={window.outerWidth > 1500 ? {justifyContent: "flex-start"} : {justifyContent: "center"}}>
                    <WorkoutCard title={"Push Day 1"} edit={false} copy={false} delete={false}/>
                    <WorkoutCard title={"Push Day 2"} edit={false} copy={false} delete={false}/>
                    <WorkoutCard title={"Pull Day 1"} edit={false} copy={false} delete={false}/>
                    <WorkoutCard title={"Pull Day 2"} edit={false} copy={false} delete={false}/>
                    <WorkoutCard title={"Cardio Blast"} edit={false} copy={false} delete={false}/>
                    <WorkoutCard title={"Core Focus"} edit={false} copy={false} delete={false}/>
                    
                </div>
        </div>
    )
}