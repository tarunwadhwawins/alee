import * as types from "../types";

export const storeCustomerDetail = (data) => {
    return { type: types.STORE_CUSTOMER_DETAIL, payload: data }
}