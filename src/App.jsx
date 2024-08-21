import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

Header.propTypes = {
  course: PropTypes.string
}

const Part = (props) => {
  return (
    <p>{props.part} - {props.exercises} excercises</p>
  )
}

Part.propTypes = {
  part: PropTypes.string,
  exercises: PropTypes.number,
}

const Content = (props) => {
  return (
    <>
    <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
    <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
    <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </>
  )
}

Content.propTypes = {
  parts: PropTypes.array,
}

const Total = (props) => {
  return (
    <p>Total excercises = {props.total}</p>
  )
}

Total.propTypes = {
  total: PropTypes.number
}

const App = () => {
const course = 'Half Stack application development'
const parts = [
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
  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App