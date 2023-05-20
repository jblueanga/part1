import { useState } from 'react'
import Button from './Button'
import Display from './Display'
import Stats from './Stats'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const goodReview = () => {
    console.log(good)
    setGood(good + 1)
    setTotal(total + 1)
  }

  const neutralReview = () => {
    console.log(neutral)
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const badReview = () => {
    console.log(bad)
    setBad(bad + 1)
    setTotal(total + 1)
  }
  
  return (
    <div>
      <h1>Select a review</h1>
      <Button handleClick={goodReview} text='fuck me up' />
      <Button handleClick={badReview} text='fuck off' />
      <Button handleClick={neutralReview} text='youre cool' />
      <Display  />
      <Stats good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App