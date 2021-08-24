import { Form } from "semantic-ui-react";

const GlobalCodeSelect = ({ placeholder, name, onChange, value, categoryType, data, global, error, disabled, isRounded, defaultValue }) => {
    debugger
    let filteredGlobalCodes = []

    let globalCodes = global.codes.filter(code => code.categoryName === categoryType).map((filtercode) => {
        return { filtercode: filtercode.globalCodeId, value: filtercode.codeName, text: filtercode.codeName }
    });

    // To   remove Custom from other's dropdown Custom option is used only in transaction screen
    if (name !== "ddTimePeriodTransaction") {
        globalCodes = globalCodes.filter((item) => { return item.text !== "Custom" });
    }

    filteredGlobalCodes.push({ filtercode: -1, value: -1, text: placeholder, disabled: true })
    filteredGlobalCodes = filteredGlobalCodes.concat(globalCodes)

    return (<Form.Select placeholder={placeholder} defaultValue={defaultValue} type="select-int" options={filteredGlobalCodes} className="custom-select bordered-input" data={data} name={name} value={value} fluid onChange={onChange} error={error} disabled={disabled} />);
};
export default GlobalCodeSelect