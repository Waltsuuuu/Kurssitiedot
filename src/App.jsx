import PropTypes from 'prop-types';
import Header from './Components/Header'
import Content from './Components/Content'

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