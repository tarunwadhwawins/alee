import * as types from "../types"

export const storeGlobalCodes = (data) => {
    return { type: types.STORE_GLOBAL_CODES, payload: data }
}

export const storeBussinessDetail = (data) => {
    return { type: types.STORE_BUSSINESS_DETAIL, payload: data }
}

export const storeLocationSelected = (data) => {
    return { type: types.STORE_LOCATION_SELECTED, payload: data }
}

export const storeInventoryDetail = (data) => {
    return { type: types.STORE_INVENTORY_DETAIL, payload: data }
}

export const storeAddItemId = (data) => {
    return { type: types.STORE_ADDITEM_ID, payload: data }
}

// export const storeBusinessType = (data) => {
//     return { type: types.STORE_BUSINESS_TYPE, payload: data }
// }

export const storeActivityId = (data) => {
    return { type: types.STORE_ADDACTIVITY_ID, payload: data }
}