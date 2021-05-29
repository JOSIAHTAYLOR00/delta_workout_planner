import React from 'react';
import './PlanSection.scss';
import moment from 'moment';
import WeekDayCard from './WeekDayCard';

export default function PlanSection(){
    return(
        <div className="ps-content-wrapper">
            <div className="ps-header">Plan</div>
            <div className="ps-content">
                <div className="week-holder">
                  <p>{`${moment().startOf('week').format('MMM Do')} - ${moment().startOf('week').add(6, 'days').format(moment().startOf('week').format('MMM') === moment().startOf('week').add(6, 'days').format('MMM')? 'Do' : 'MMM Do')}`}</p>
                </div>
                <div className="plan-day-card-wrapper">
                    <WeekDayCard onChange={(value: any) => console.log(value)} id ={'Sunday'} day={'Sunday'} restDay={false}/>
                    <WeekDayCard onChange={(value: any) => console.log(value)} id ={'Monday'} day={'Monday'} restDay={false}/>
                    <WeekDayCard onChange={(value: any) => console.log(value)} id ={'Tuesday'} day={'Tuesday'} restDay={false}/>
                    <WeekDayCard onChange={(value: any) => console.log(value)} id ={'Wednesday'} day={'Wednesday'} restDay={false}/>
                    <WeekDayCard onChange={(value: any) => console.log(value)} id ={'Thursday'} day={'Thursday'} restDay={false}/>
                    <WeekDayCard onChange={(value: any) => console.log(value)} id ={'Friday'} day={'Friday'} restDay={false}/>
                    <WeekDayCard onChange={(value: any) => console.log(value)} id ={'Saturday'} day={'Saturday'} restDay={false}/>
                    <WeekDayCard onChange={(value: any) => console.log(value)} id ={'Extras'} day={'Extras'} restDay={false}/>
                </div>
            </div>
        </div>
    )
}