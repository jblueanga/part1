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
  const [average, setAverage] = useState(0)

  const goodReview = () => {
    console.log(good)
    setGood(good + 1)
    setTotal(total + 1)
    setAverage(average + 1)
    console.log(average)
  }

  const neutralReview = () => {
    console.log(neutral)
    setNeutral(neutral + 1)
    setTotal(total + 1)
    console.log(average)
  }

  const badReview = () => {
    console.log(bad)
    setBad(bad + 1)
    setTotal(total + 1)
    setAverage(average - 1)
    console.log(average)
  }

  return (
    <div>
      <h1>Select a review</h1>
      <Display total={total}  />
      <Button handleClick={goodReview} text='fuck me up' />
      <Button handleClick={badReview} text='fuck off' />
      <Button handleClick={neutralReview} text='youre cool' />
      <h3>Statistics!(big whoop)</h3>
      <Stats text='good' review={good}/>
      <Stats text='neutral' review={neutral} />
      <Stats text='bad' review={bad} />
      <Stats text='average' review={(average / total)}/>
      <Stats text='HIV positive' review={(good / total)}/>
      
    </div>
  )
}

export default App