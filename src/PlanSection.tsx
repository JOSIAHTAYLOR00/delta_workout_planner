import React from 'react';
import './PlanSection.scss';
import moment from 'moment';

export default function PlanSection(){
    return(
        <div className="ps-content-wrapper">
            <div className="ps-header">Plan</div>
            <div className="ps-content">
                <div className="week-holder">
                <p>{`${moment().startOf('week').format('MMM Do')} - ${moment().startOf('week').add(6, 'days').format(moment().startOf('week').format('MMM') === moment().startOf('week').add(6, 'days').format('MMM')? 'Do' : 'MMM Do')}`}</p>
                </div>
            </div>
        </div>
    )
}