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
                    <WorkoutCard id={"Push Day 1"} title={"Push Day 1"} edit={false} copy={false} delete={false}/>
                    <WorkoutCard id={"Push Day 2"} title={"Push Day 2"} edit={false} copy={false} delete={false}/>
                    <WorkoutCard id={"Pull Day 1"} title={"Pull Day 1"} edit={false} copy={false} delete={false}/>
                    <WorkoutCard id={"Pull Day 2"} title={"Pull Day 2"} edit={false} copy={false} delete={false}/>
                    <WorkoutCard id={"Cardio Blast"} title={"Cardio Blast"} edit={false} copy={false} delete={false}/>
                    <WorkoutCard id={"Core Focus"} title={"Core Focus"} edit={false} copy={false} delete={false}/>
                </div>
        </div>
    )
}