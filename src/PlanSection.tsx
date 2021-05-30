import React from 'react';
import './PlanSection.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Week from './Week';


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

export default function PlanSection(props: PlanSectionProps){
    const {planData} = props;


const filerData = [
    {"_id":"607f09c6c283d51aef3fe565","workout_id":"33c0f64157e1464184c8d9bbfe482738","user_id":"webdev@deltatrainer.fit","name":"Workout 492","date":"2021-04-20T17:05:10.112Z"},
    {"_id":"607f09c6c283d51aef3fe567","workout_id":"1bcba398d0e1466f985b65b517846f25","user_id":"webdev@deltatrainer.fit","name":"Workout 494","date":"2021-04-20T17:05:10.112Z"},
    {"_id":"607f09c6c283d51aef3fe569","workout_id":"f5270079417e40b4a60ab2eca278446c","user_id":"webdev@deltatrainer.fit","name":"Workout 496","date":"2021-04-20T17:05:10.112Z"},
    {"_id":"607f09c6c283d51aef3fe56b","workout_id":"6efecba680234811bb61eefb4e063a0e","user_id":"webdev@deltatrainer.fit","name":"Workout 498","date":"2021-04-20T17:05:10.112Z"},
    {"_id":"607f09c6c283d51aef3fe37f","workout_id":"d21419864efa4afdb9ba5263f25148a2","user_id":"webdev@deltatrainer.fit","name":"Workout 6","date":"2021-04-20T17:05:10.112Z"},
    {"_id":"607f09c6c283d51aef3fe392","workout_id":"b403f3e358d04cb4a19323639aca103c","user_id":"webdev@deltatrainer.fit","name":"Workout 25","date":"2021-04-20T17:05:10.112Z"},
    {"_id":"607f09c6c283d51aef3fe393","workout_id":"34f97cf2e1344861a40e1967af4e2c26","user_id":"webdev@deltatrainer.fit","name":"Workout 26","date":"2021-04-20T17:05:10.112Z"},
    {"_id":"607f09c6c283d51aef3fe3c3","workout_id":"b035d11f5b344b7d830119c3c46b360d","user_id":"webdev@deltatrainer.fit","name":"Workout 74","date":"2021-04-20T17:05:10.112Z"},
    {"_id":"607f09c6c283d51aef3fe3d5","workout_id":"2c5982f071ee4ad890db70bbdca568a3","user_id":"webdev@deltatrainer.fit","name":"Workout 92","date":"2021-04-20T17:05:10.112Z"},
    {"_id":"607f09c6c283d51aef3fe3e8","workout_id":"84113e7d5c03449cbbe908ddc5d76130","user_id":"webdev@deltatrainer.fit","name":"Workout 111","date":"2021-04-20T17:05:10.112Z"},
    {"_id":"607f09c6c283d51aef3fe406","workout_id":"e162f52f21f7437dbb2941bf20b792d4","user_id":"webdev@deltatrainer.fit","name":"Workout 141","date":"2021-04-20T17:05:10.112Z"},
    {"_id":"607f09c6c283d51aef3fe418","workout_id":"b3235622e63d4b64a179c445820cbae6","user_id":"webdev@deltatrainer.fit","name":"Workout 159","date":"2021-04-20T17:05:10.112Z"}
]

const otherfil = [
    {id:"607f0858424c157a87168fc0",workout_plan_id:"81725609f29c4cfa95a30baee0861c64",user_id:"webdev@deltatrainer.fit",date:"2020-02-16T00:00:00.000Z",workouts:[{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false}]},
    {id:"607f0858424c157a87168fae",workout_plan_id:"d0ed8842101545fcbfe02283452c3fc5",user_id:"webdev@deltatrainer.fit",date:"2020-06-21T00:00:00.000Z",workouts:[{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false}]},
    {id :"607f0858424c157a87168fc0",workout_plan_id:"81725609f29c4cfa95a30baee0861c64",user_id:"webdev@deltatrainer.fit",date:"2020-02-16T00:00:00.000Z",workouts:[{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false}]},
    {id:"607f0858424c157a87168fae",workout_plan_id:"d0ed8842101545fcbfe02283452c3fc5",user_id:"webdev@deltatrainer.fit",date:"2020-06-21T00:00:00.000Z",workouts:[{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false}]},
    {id:"607f0858424c157a87168fc0",workout_plan_id:"81725609f29c4cfa95a30baee0861c64",user_id:"webdev@deltatrainer.fit",date:"2020-02-16T00:00:00.000Z",workouts:[{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false}]},
    {id:"607f0858424c157a87168fae",workout_plan_id:"d0ed8842101545fcbfe02283452c3fc5",user_id:"webdev@deltatrainer.fit",date:"2020-06-21T00:00:00.000Z",workouts:[{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false},{workout_ids:[],"is_rest_day":false}]},
]

    return(
        <Week planData={planData}/>
    )
}