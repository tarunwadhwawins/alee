import React from 'react';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-2';
import { env } from '../../../functional/global-import';

const PhoneNumberInput = ({ onChange, value, error }) => {
       
return ( 

    
        <div className={"controlField " + (error ? 'error' : '')}>
            <PhoneInput
                country={env.DEFAULT_COUNTRY}
                className="ui input"
                onlyCountries={[env.DEFAULT_COUNTRY]}
                onChange={onChange}
                value={value}
            />
            {error}
        </div>
    );
};
PhoneNumberInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.isRequired,
    error: PropTypes.isRequired,
};
export default PhoneNumberInput;
