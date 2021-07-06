import React from 'react';
import PropTypes from 'prop-types';
import { DateInput } from "semantic-ui-calendar-react";
const DateFormatInput = ({ onChange, value, placeholder, error, name, data }) => {
    return (
        <DateInput name={name} type="text" placeholder={placeholder} value={value} dateFormat="MMM DD, YYYY" iconPosition="right" onChange={onChange} error={error} data={data} closable fluid />
    );
};


DateFormatInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.isRequired,
    placeholder: PropTypes.isRequired,
    name: PropTypes.isRequired,
    data: PropTypes.isRequired,
    error: PropTypes.func
};


export default DateFormatInput;
