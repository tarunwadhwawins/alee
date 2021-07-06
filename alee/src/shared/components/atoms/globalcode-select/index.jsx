import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { connect } from '../../../functional/global-import';

const GlobalCodeSelect = ({ placeholder, name, onChange, value, categoryType, data, global, error, disabled }) => {
    let filteredGlobalCodes = []

    let globalCodes = global.codes.filter(code => code.categoryName === categoryType).map((filtercode) => {
        return { filtercode: filtercode.codeName, value: filtercode.globalCodeId, text: filtercode.codeName }
    });
    filteredGlobalCodes.push({ filtercode: -1, value: -1, text: placeholder, disabled: true })
    filteredGlobalCodes = filteredGlobalCodes.concat(globalCodes)

    return (<Form.Select placeholder={placeholder} type="select-int" options={filteredGlobalCodes} className="custom-select bordered-input" data={data} name={name} value={value} fluid onChange={onChange} error={error} disabled={disabled} />);
    //return (<Form.Select placeholder={placeholder} type="select-int" options={filteredGlobalCodes} error={error} className="custom-select bordered-input" data={data} name={name} value={value} fluid onChange={onChange} />);
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


const mapStateToProps = state => {
    return {
        global: state.global
    };
};
export default connect(mapStateToProps, null)(React.memo(GlobalCodeSelect));

