const Header = (props) => {
  return(
  <div>
    <h1>{props.course.name}</h1>
  </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part[0]} {props.part[1]}</p>
    </div>
  )
}

const Content = (props) => {
  const parts = props.course.parts
  const part1 = [parts[0].name, parts[0].exercises]
  const part2 = [parts[1].name, parts[1].exercises]
  const part3 = [parts[2].name, parts[2].exercises]

  return(
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  )
}

const Total = (props) => {
  const parts = props.course.parts
  const exercises = [
    parts[0].exercises,
    parts[1].exercises,
    parts[2].exercises
  ]

  return(
    <div>
      <p>Number of exercises: {exercises[0] + exercises[1] + exercises[2]}</p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return(
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
