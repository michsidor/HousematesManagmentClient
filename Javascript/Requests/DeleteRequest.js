const id = localStorage.getItem("id");

const ObjectDelete = async(url) =>{
    await DeleteMethod(url);
    window.location.href='/HTML/HousematesManagment.html?id='+id;
}

const DeleteMethod = async(url) => {
    const response = await fetch(url,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
    })
}