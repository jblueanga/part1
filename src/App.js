import { useState} from 'react'
import Display from './Display'
import Button from './Button'
import History from './History'
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
    setTotal(left + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(left + right)
  }

  return (
    <div>
    {left}
    <Button handleClick={handleLeftClick} text='left' />
    <Button handleClick={handleRightClick} text='right' />
    {right}
    <History allClicks={allClicks} />
  </div>
  )
}
export default App