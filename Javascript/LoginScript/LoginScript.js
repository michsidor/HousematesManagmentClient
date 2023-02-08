window.onload = function(){
    const form = document.getElementById("loginUser");
    FormFunction(form);
}

const FormFunction = (form) =>{
    window.addEventListener("submit", async (event) => {
        event.preventDefault();
        const Login = form.elements.login.value;
        const Password = form.elements.password.value;
        const body ={
            Login,
            Password
        };
        const result = await GetRequest(body);
        debugger;
        window.location.href = "/HTML/HousematesManagment.html?id=" + JSON.stringify(result);
    });
}

const GetRequest = async (form) => {
    const response = await fetch('https://localhost:7021/api/user',{
        method:"POST",
        headers:{
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(form)
    });

    const result = response.json();
    debugger;
    return result;
}