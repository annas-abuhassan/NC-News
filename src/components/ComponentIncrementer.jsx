import React from "react";
import PropTypes from "prop-types";

const ComponentIncrementer = props => {
  const { className, amount, updateShowMore } = props;
  return (
    <button className={className} onClick={() => updateShowMore(amount)}>
      Show More!
    </button>
  );
};

ComponentIncrementer.propTypes = {
  className: PropTypes.string,
  updateShowMore: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired
};

export default ComponentIncrementer;
