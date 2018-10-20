import React from "react";
import PropTypes from "prop-types";

const ComponentIncDec = ({ className, amount, updateShowMore }) => {
  return (
    <button className={className} onClick={() => updateShowMore(amount)}>
      {amount > 0 ? "Show More" : "Show Less"}
    </button>
  );
};

ComponentIncDec.propTypes = {
  className: PropTypes.string,
  updateShowMore: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired
};

export default ComponentIncDec;
