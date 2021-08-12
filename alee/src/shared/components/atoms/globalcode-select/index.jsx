import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

const GlobalCodeSelect = ({ placeholder, name, onChange, value, categoryType, data, error, disabled ,label}) => {
    let filteredGlobalCodes = []

    const globalCode = useSelector(state => state.global.codes)

    let globalCodes = globalCode.filter(code => code.categoryName === categoryType).map((filtercode) => {
        return { filtercode: filtercode.codeName, value: filtercode.globalCodeId, text: filtercode.codeName }
    });
    filteredGlobalCodes.push({ filtercode: -1, value: -1, text: placeholder, disabled: true })
    filteredGlobalCodes = filteredGlobalCodes.concat(globalCodes)

    return (<Form.Select placeholder={placeholder} type="select-int" options={filteredGlobalCodes} className="custom-select bordered-input" data={data} name={name} value={value} fluid onChange={onChange} error={error} disabled={disabled} label={label}/>);
};

GlobalCodeSelect.propTypes = {
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
    data: PropTypes.string.isRequired,
    disabled: PropTypes.string.isRequired,
    categoryType: PropTypes.string.isRequired,
    error: PropTypes.func
};

export default (React.memo(GlobalCodeSelect));

