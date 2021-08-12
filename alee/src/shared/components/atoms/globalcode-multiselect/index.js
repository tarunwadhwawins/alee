import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
const GlobalCodeMultiSelect = ({ placeholder, name, onChange, value, categoryType, data, global, error,label }) => {
    const globalCode = useSelector(state => state.global.codes)
    let options = []
    const filteredGlobalCodes = globalCode.filter(code => code.categoryName === categoryType).map((filtercode) => {
        return { key: filtercode.codeName, value: filtercode.globalCodeId, text: filtercode.codeName }
    });

    return (
        <Dropdown options={options.length>0 ? options : filteredGlobalCodes} placeholder={placeholder}
            defaultValue={value}
            search selection fluid multiple allowAdditions value={value} onChange={onChange} name={name} className="tagger" data={data} error={error} type="multiple-select" label={label} />);
};
GlobalCodeMultiSelect.propTypes = {
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
    data: PropTypes.string.isRequired,
    categoryType: PropTypes.string.isRequired,
    error: PropTypes.func
};

export default (React.memo(GlobalCodeMultiSelect));