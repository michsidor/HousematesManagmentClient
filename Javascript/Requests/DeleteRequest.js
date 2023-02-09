const id = localStorage.getItem("id");

const ObjectDelete = async(url) =>{

    try{
        await DeleteMethod(url);
        window.location.href='/HTML/HousematesManagment.html?id='+id;
    }
    catch(error){
        console.error(error);
    }
}

const DeleteMethod = async(url) => {
    const response = await fetch(url,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });

    if(!response.ok){
        throw new Error(`Request failed with status code:${response.status}`)
    }
}