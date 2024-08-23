import Part from './Part'
import PropTypes from 'prop-types';

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

export default Content
