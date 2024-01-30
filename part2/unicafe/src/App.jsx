import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return(
    <tr>
      <td>{text}</td><td>{value}</td>
    </tr>
  )
}

const Statistics = ({reviews, allReviews}) => {
  const average = (reviews.good-reviews.bad)/allReviews
  const positive = (reviews.good/allReviews)*100

  if (allReviews === 0){
    return(
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }
  return(
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={reviews.good}/>
          <StatisticLine text="neutral" value={reviews.neutral}/>
          <StatisticLine text="bad" value={reviews.bad}/>
          <StatisticLine text="all" value={allReviews}/>
          <StatisticLine text="average" value={average}/>
          <StatisticLine text="positive" value={positive}/>
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [reviews, setReviews] = useState({
    good: 0, neutral: 0, bad: 0
  })
  const [allReviews, setAll] = useState(0)

  const handleGood = () => {
    const updatedGood = reviews.good + 1
    setReviews({...reviews, good: updatedGood})
    setAll(allReviews + 1)
  }

  const handleNeutral = () => {
    const updatedNeutral = reviews.neutral + 1
    setReviews({...reviews, neutral: updatedNeutral})
    setAll(allReviews + 1)
  }
  
  const handleReset = () => {
    const updatedBad = reviews.bad + 1
    setReviews({...reviews, bad: updatedBad})
    setAll(allReviews + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='good'/>
      <Button handleClick={handleNeutral} text='neutral'/>
      <Button handleClick={handleReset} text='bad'/>
      <Statistics reviews={reviews} allReviews={allReviews}/>
    </div>
  )
}
export default App
