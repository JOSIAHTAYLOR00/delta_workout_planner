import React, { useState } from 'react';
import './PlanSection.scss';
import WeekDayCard from './WeekDayCard';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import forward from '../assets/forward.png'
import backward from '../assets/backward.png'
import { setDate } from 'date-fns/esm';


interface PlanSectionProps {
    planData: Array<WorkoutPlan>
}
type WorkoutPlan = {
    workout_plan_id: string,
    user_id: string,
    date: string,
    workouts: Array<WorkoutPlanDay>
}

type WorkoutPlanDay = {
    workout_ids: Array<string>,
    is_rest_day: boolean
}

export default function PlanSection(props: PlanSectionProps): JSX.Element{
    const {planData} = props;
    const [startDate, setStartDate] = useState(new Date());
    let state = planData.length - 2;

    //   function handleSelect(e: any){
    //       //smooth scroll: .scrollIntoView({ behavior: 'smooth' })
    //       document?.getElementById(moment(e).startOf('week').format('DD/MM/YYYY'))?.scrollIntoView();
    //       window.scrollTo(0,0);
    //       setStartDate(e);
    //   }

      function handleForward(e: any){
          if(state > 0 && state <= planData.length - 2){state += 1;}
        if(e.target.parentElement.parentElement.parentElement.childNodes[state] !== undefined){
        e.target.parentElement.parentElement.parentElement.childNodes[state].scrollIntoView();
        window.scrollTo(0,0);
        }
    }

    function handleBackward(e: any){
        if(state >= 0 && state <= planData.length - 1){state -= 1;}
        if(e.target.parentElement.parentElement.parentElement.childNodes[state] !== undefined){
        e.target.parentElement.parentElement.parentElement.childNodes[state].scrollIntoView();
        window.scrollTo(0,0);
        }
    }

    return(
        <div className="ps-content-wrapper">
        <div className="ps-header"><p className="plan">Plan</p></div>
        <div className="ps-content">
            <div className="week-holder">
            {planData.sort((a: WorkoutPlan, b: WorkoutPlan) => (`${moment(a.date).year()}${moment(a.date).week()}` < `${moment(b.date).year()}${moment(b.date).week()}`) ? 1 : -1).map((e) => {
      return  <div className="week-wrapper" id={moment(e.date).startOf('week').format('DD/MM/YYYY')}>
                <div className="calendar-bundle">
                <p className="top-date">{`${moment(e.date).startOf('week').format('MMM D')} - ${moment(e.date).startOf('week').add(6, 'days').format(moment(e.date).startOf('week').format('MM') === moment(e.date).startOf('week').add(6, 'days').format('MM')? 'D' : 'MMM D')}`}</p>
                {/* <div className="spacer"/>
                <DatePicker selected={startDate} onChange={handleSelect} className="cal"/> */}
                </div>
                <div className="paginate-wrapper">
                <img src={backward} alt='' className="paginate" onClick={handleBackward}/>
                <img src={forward} alt='' className="paginate" onClick={handleForward}/>
                </div>
                <div className="plan-day-card-wrapper">
                <WeekDayCard name ={'Sunday'} id={e.workout_plan_id} workouts={e.workouts}/>
                <WeekDayCard name ={'Monday'} id={e.workout_plan_id} workouts={e.workouts}/>
                <WeekDayCard name ={'Tuesday'} id={e.workout_plan_id} workouts={e.workouts}/>
                <WeekDayCard name ={'Wednesday'} id={e.workout_plan_id} workouts={e.workouts}/>
                <WeekDayCard name ={'Thursday'} id={e.workout_plan_id} workouts={e.workouts}/>
                <WeekDayCard name ={'Friday'} id={e.workout_plan_id} workouts={e.workouts}/>
                <WeekDayCard name ={'Saturday'} id={e.workout_plan_id} workouts={e.workouts}/>
                <WeekDayCard name ={'Extras'} id={e.workout_plan_id} workouts={e.workouts}/>
                </div>
              </div>})}
            </div>
        </div>
    </div>
    )
}