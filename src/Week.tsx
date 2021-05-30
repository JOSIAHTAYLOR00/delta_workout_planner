import React, { useState } from 'react';
import './Week.scss';
import WeekDayCard from './WeekDayCard';
import {DateRangePicker } from 'react-date-range';
import moment from 'moment';

interface WeekProps {
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

export default function Week(props: WeekProps){
    const {planData} = props;
    const [cal, setCal] = useState(false);
    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      }

      function handleDate(){
          setCal(true);
      }
      console.log(moment().week() + moment().year())
    return(
        <div className="ps-content-wrapper">
        <div className="ps-header">Plan</div>
        <div className="ps-content">
            <div className="week-holder">
              {cal ?
              <div className="calendar-wrapper">
    <DateRangePicker
    ranges={[selectionRange]}
    // onChange={this.handleSelect}
    className="calendar"
  /> 
  </div>
//   moment(e.date).startOf('week').format('MMM Do')} - ${moment(e.date).startOf('week').add(6, 'days').format(moment(e.date).startOf('week').format('MMM') === moment(e.date).startOf('week').add(6, 'days').format('MMM')? 'Do YYYY' : 'MMM Do')}`}
  : planData.sort((a: WorkoutPlan, b: WorkoutPlan) => (`${moment(a.date).year()}${moment(a.date).week()}` > `${moment(b.date).year()}${moment(b.date).week()}`) ? 1 : -1).map((e) => {
      return  <div className="week-wrapper" id={moment(e.date).startOf('week').format('DD/MM/YYYY')}>
                <p onClick={handleDate}>{`${moment(e.date).startOf('week').format('MMM Do YYYY')} - ${moment(e.date).startOf('week').add(6, 'days').format(moment(e.date).startOf('week').format('MMM YYYY') === moment(e.date).startOf('week').add(6, 'days').format('MMM YYYY')? 'Do YYYY' : 'MMM Do YYYY')}`}</p>
                <div className="plan-day-card-wrapper">
                <WeekDayCard id ={'Sunday'} workout_plan_id={e.workout_plan_id} workouts={e.workouts}/>
                <WeekDayCard id ={'Monday'} workout_plan_id={e.workout_plan_id} workouts={e.workouts}/>
                <WeekDayCard id ={'Tuesday'} workout_plan_id={e.workout_plan_id} workouts={e.workouts}/>
                <WeekDayCard id ={'Wednesday'} workout_plan_id={e.workout_plan_id} workouts={e.workouts}/>
                <WeekDayCard id ={'Thursday'} workout_plan_id={e.workout_plan_id} workouts={e.workouts}/>
                <WeekDayCard id ={'Friday'} workout_plan_id={e.workout_plan_id} workouts={e.workouts}/>
                <WeekDayCard id ={'Saturday'} workout_plan_id={e.workout_plan_id} workouts={e.workouts}/>
                <WeekDayCard id ={'Extras'} workout_plan_id={e.workout_plan_id} workouts={e.workouts}/>
                </div>
              </div>})}
            </div>
        </div>
    </div>
    )
}