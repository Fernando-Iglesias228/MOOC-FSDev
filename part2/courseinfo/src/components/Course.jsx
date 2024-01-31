const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ exercises }) => {
  const sum = []
  exercises.map(exercise => 
    sum.push(exercise.exercises))
  
    const total = sum.reduce((i, j) => i + j, 0)

  return(
    <div>
      <b>total of {total} exercises</b>
    </div>
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return(
    <div>
    {parts.map(part =>
      <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Course = ({ course }) => {
  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts} />
    </div>
  )
}

export default Course