const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
localStorage.setItem("id", id);
const PaymentsGet = async() => {
    const url = 'https://localhost:7021/api/payment/all/'+JSON.parse(id);

    let result = await GetMethod(url);

    window.location.href = "../HTML/Grids/PaymentsGrid.html?data=" + JSON.stringify(result);
}

const AdvertisementsGet = async() => {
    const url = 'https://localhost:7021/api/advertisement/all/'+JSON.parse(id);

    let result = await GetMethod(url);

    window.location.href = "../HTML/Grids/AdvertisementsGrid.html?data=" + JSON.stringify(result);
}

const AssignmentsGet = async() => {
    const url = 'https://localhost:7021/api/assignment/all/'+JSON.parse(id);

    let result = await GetMethod(url);

    window.location.href = "../HTML/Grids/AssignmentsGrid.html?data=" + JSON.stringify(result);
}

const GetMethod = async(url) => {
    const response = await fetch(url,{
        method:'GET',
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
    });

    let result = await response.json();
    return result;
}