const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
localStorage.setItem("id", id);
const PaymentsGet = async() => {
    const url = 'https://localhost:7021/api/payment/all/'+JSON.parse(id);

    try{
        let result = await GetMethod(url);
        window.location.href = "../HTML/Grids/PaymentsGrid.html?data=" + JSON.stringify(result);
    }
    catch(error){
        console.error(error);
    }
}

const MyPaymentsGet = async() => {
    const url = 'https://localhost:7021/api/payment/'+JSON.parse(id);

    try{
        let result = await GetMethod(url);
        window.location.href = "../HTML/Grids/PaymentsGrid.html?myData=" + JSON.stringify(result);
    }
    catch(error){
        console.error(error);
    }
}

const AdvertisementsGet = async() => {
    const url = 'https://localhost:7021/api/advertisement/all/'+JSON.parse(id);

    try{
        let result = await GetMethod(url);
        window.location.href = "../HTML/Grids/AdvertisementsGrid.html?data=" + JSON.stringify(result);
    }
    catch(error){
        console.error(error);
    }
}

const MyAdvertisementsGet = async() => {
    const url = 'https://localhost:7021/api/advertisement/'+JSON.parse(id);

    try{
        let result = await GetMethod(url);
        window.location.href = "../HTML/Grids/AdvertisementsGrid.html?data=" + JSON.stringify(result);
    }
    catch(error){
        console.error(error);
    }
}

const AssignmentsGet = async() => {
    const url = 'https://localhost:7021/api/assignment/all/'+JSON.parse(id);

    try{
        let result = await GetMethod(url);
        window.location.href = "../HTML/Grids/AssignmentsGrid.html?data=" + JSON.stringify(result);
    }
    catch(error){
        console.error(error);
    }
}

const MyAssignmentsGet = async() => {
    const url = 'https://localhost:7021/api/assignment/'+JSON.parse(id);

    try{
        let result = await GetMethod(url);
        window.location.href = "../HTML/Grids/AssignmentsGrid.html?data=" + JSON.stringify(result);
    }
    catch(error){
        console.error(error);
    }
}

const GetMethod = async(url) => {
    const response = await fetch(url,{
        method:'GET',
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
    });

    if(!response.ok){
        throw new Error(`Request failed with status code:${response.status}`)
    }

    let result = await response.json();
    return result;
}