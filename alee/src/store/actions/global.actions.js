import * as types from "../types"

export const storeGlobalCodes = (data) => {
    return { type: types.STORE_GLOBAL_CODES, payload: data }
}
export const storeBookDetails = (data) => {
    return { type: types.STORE_BOOK_DETAIL, payload:data}
}

export const storeMyBookData = (data) => {
    return { type: types.STORE_MY_BOOK_DATA, payload: data}
}
export const storeTags = (data) => {
    return { type: types.STORE_TAGS, payload: data}
}



