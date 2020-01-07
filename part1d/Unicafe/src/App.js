import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = (props) => {

  if(props.all >= 1){
    return(
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <Stat text="good" value={props.good}/>
            <Stat text="neutral" value={props.neutral}/>
            <Stat text="bad" value={props.bad}/>
            <Stat text="total" value={props.all}/>
            <Stat text="Average" value={props.all/3}/>
            <Stat text="Positive" value={props.good/props.all *100} />
            </tbody>
        </table>
      </div>
    )
  }

  return(
     <div> No Feedback given </div>
  )
}

const Stat = (props) => {

  return(

  <tr>
    <th>{props.text}:</th>
    <th>{props.value}</th>
  </tr>
  )
}

const Button = ({onClick, text}) => {

  return(
    <button onClick={onClick}>{text}</button>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(2)
  const [neutral, setNeutral] = useState(1)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad



  const handleClick = (text) => {
    if(text === 'good'){
      return () =>  setGood(good + 1)
 
    }

    if(text === 'neutral'){
      return () =>  setNeutral(neutral + 1)
    }

    if(text === 'bad'){
      return () => setBad(bad + 1)
    }
  }


  return (
    <div>
      <h1> Give Feedback</h1>
      <Button onClick={handleClick('good')} text='good' />
      <Button onClick={handleClick('neutral')} text='neutral' />
      <Button onClick={handleClick('bad')} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

export default App