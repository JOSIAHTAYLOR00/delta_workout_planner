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
                    <WeekDayCard id ={'Sunday'} day={'Sunday'} restDay={false}/>
                    <WeekDayCard id ={'Monday'} day={'Monday'} restDay={false}/>
                    <WeekDayCard id ={'Tuesday'} day={'Tuesday'} restDay={true}/>
                    <WeekDayCard id ={'Wednesday'} day={'Wednesday'} restDay={false}/>
                    <WeekDayCard id ={'Thursday'} day={'Thursday'} restDay={false}/>
                    <WeekDayCard id ={'Friday'} day={'Friday'} restDay={false}/>
                    <WeekDayCard id ={'Saturday'} day={'Saturday'} restDay={false}/>
                    <WeekDayCard id ={'Extras'} day={'Extras'} restDay={false}/>
                </div>
            </div>
        </div>
    )
}