import React from "react";
import ReactDOM from "react-dom";
import { FormBuilder, FormGenerator } from "cb-react-forms";
import { useDispatch, useSelector } from 'react-redux';
import { commonFunctions, env } from "../../shared/functional/global-import";
import { apiCall } from "../../store/actions/api.actions";
import { useHistory, useParams } from "react-router-dom";

function DragDropPage() {

    const globalCode = useSelector(state => state.global.codes)
    const dispatch = useDispatch();
    const templateId = useParams();
    let history = useHistory();

    const exportForm = (data) => {
        console.log(data);
        const fields = [];
        for (let i = 0; i < JSON.parse(data).length; i++) {
            const fieldsData = { templateFieldId: 0, fieldName: JSON.parse(data)[i].label.blocks[0].text, fieldDataTypeId: (commonFunctions.getGlobalCodeDetails(globalCode, "DataType", JSON.parse(data)[i].element)).globalCodeId, fieldOrder: i + 1, isRequired: JSON.parse(data)[0].required, categoryName: null }
            fields.push(fieldsData)
        }
        dispatch(apiCall({
            urls: ["ADDTEMPLATEFIELDS"], method: "POST", data: { "templateId": templateId.id, "fields": fields, "isActive": true, "actionPerformedBy": "" }, onSuccess: (response) => {
                history.push(`${env.PUBLIC_URL}/create-template`);
            }, showNotification: true
        }))
    }

    const items = [
        {
            key: "Header",
            name: "Header Text",
            icon: "fa fa-header"
        },
        {
            key: "Dropdown",
            name: "Dropdown",
            icon: "fa fa-caret-square-o-down",

        },
        {
            key: "Checkboxes",
            name: "Checkboxes",
            icon: "fa fa-check-square-o"
        },
        {
            key: "TextInput",
            name: "Text Input",
            icon: "fa fa-font"
        },
        {
            key: "NumberInput",
            name: "Number Input",
            icon: "fa fa-plus"
        },
        {
            key: "TextArea",
            name: "Multi-line Input",
            icon: "fa fa-text-height"
        },
        // {
        //     key: "Date",
        //     name: "Date",
        //     icon: "fa fa-calendar"
        // },
    ];

    return (
        <div>
            <FormBuilder items={items} onSubmit={exportForm} />
        </div>
    );
}
export default DragDropPage;
