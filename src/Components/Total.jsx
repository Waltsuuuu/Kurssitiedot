import PropTypes from 'prop-types';

const Total = (props) => {
    return (
      <p>Total excercises = {props.total}</p>
    )
  }
  
  Total.propTypes = {
    total: PropTypes.number
  }

export default Total