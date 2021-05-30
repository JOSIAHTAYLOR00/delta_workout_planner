import React from 'react';
import './PlannerModal.scss';
import WorkoutCard from './WorkoutCard';

interface WorkoutCardProps{
    wkotData: any,
}

// const workoutCardAr: WorkoutCardProps[] = [
//     {workout_id: 'Push Day 1', name: 'Push Day 1'},
//     {workout_id: 'Push Day 2', name: 'Push Day 2'},
//     {workout_id: 'Pull Day 1', name: 'Pull Day 1'},
//     {workout_id: 'Pull Day 2', name: 'Pull Day 2'},
//     {workout_id: 'Cardio Blast', name: 'Cardio Blast'},
//     {workout_id: 'Core Focus', name: 'Core Focus'}
// ];

export default function PlannerModal(props: WorkoutCardProps){
    const {wkotData} = props;
    // const [wkotAr, setWkotAr] = useState(workoutCardAr);

    function handleClick(e: any){
        
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