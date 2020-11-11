import axios from 'axios'

const instance = axios.create();

export const config = {
    "wso2link": "https://api.hanhchinhcong.net/",
    "beartoken": "5c412a0b-18ea-3cdc-b116-c4a199e82bea",
    "api": 
        [
            {
                "api": "UBNDKNTC",
                "site": "kntc"
            },
            {
                "api": "UBNDDVC",
                "site": "mcdt"
            },
            {
                "api": "UBNDPAKN",
                "site": "pakn"
            },
            {
                "api": "UBNDCDDH",
                "site": "cddh"
            },
            {
                "api": "UBNDQLCH",
                "site": "tlch"
            },
            {
                "api": "UBNDQLCB",
                "site": "qlcb"
            },
            {
                "api": "UBNDBC",
                "site": "ktxh"
            },
            {
                "api": "UBNDQLVBDOMINO",
                "site": "qlvb"
            }
        ],
    "getallAPI":"LayDanhSachAPIDashboard",
    "getDataBlock":"LayDuLieuThongKe",    
    "getDataHighlight":"LayNhacViecDashboard",
    "getDataTable": "LayDanhSachDuLieu"
};

export const APIGiamSat = [
    {
        "api": "UBNDKNTC",
        "site": "kntc"
    },
    {
        "api": "UBNDPAKN",
        "site": "pakn"
    },
    {
        "api": "UBNDCDDH",
        "site": "cddh"
    },
    {
        "api": "UBNDBC",
        "site": "ktxh"
    },
]


export const requestGET = async(URL) => {
    return await instance({
        method: 'GET',
        url: URL,
        timeout: 15000,
        withCredentials: true,
    })
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error); 
        return {data: []}
    })
}

export const requestGET2 = async(URL) => {
    return await instance({
        method: 'GET',
        url: URL,
        timeout: 15000
    })
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error); 
        return {data: []}
    })
}


export const requestPOST = async(URL, data) => {
    return await instance({
        method: 'POST',
        url: URL,
        data: data,
        timeout: 15000,
    })
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error); 
        return {data: []}
    })
}

export const requestPOSTWSO2 = async(URL, data) => {
    return await instance({
        method: 'POST',
        headers: { Authorization: `Bearer ${config.beartoken}`, 'Content-Type': 'application/json' },
        url: URL,
        data: data,
        timeout: 15000,
    })
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error); 
        return {data: []}
    })
}

export const requestPOSTFD = async(URL, data) => {
    return await instance({
        method: 'POST',
        url: URL,
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: data,
        timeout: 15000,
    })
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error); 
        return {data: []}
    })
}

export const requestPOSTFCM = async(URL, data) => {
    return await instance({
        method: 'POST',
        headers: { Authorization: `key=AAAA0D5-dIo:APA91bHmX7RYiXN_YUXl9T3KpPuPvxBONOnqaxELscj4v3G_u8mTSIKi0CRh0fNbwZrJSaZFSJu6GHyelvgcH8XlJ-nUZKTuk77TWGjrRgnbYCR7ffeIjh_4W3lOapgQqQatTHJGPRFs` },
        url: URL,
        data: data,
        timeout: 15000,
    })
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error); 
        return {data: []}
    })
}

export const requestGETMQ = async(URL, tokenMQ) => {
    return await instance({
        method: 'GET',
        headers: { Authorization: `JWT ${tokenMQ}` },
        url: URL,
        timeout: 15000,
    })
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error); 
        return {data: []}
    })
}