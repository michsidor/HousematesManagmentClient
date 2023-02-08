const userId = localStorage.getItem("id");

window.onload = async function(){
    const formPayment = document.getElementById("addingPayment");
    const formAdvertisement = document.getElementById("addingAdvertisement");
    const formAssignment = document.getElementById("addingAssignment");
    const formUser = document.getElementById("userRegister");

    if(formPayment != null){
        formPaymentFunction("https://localhost:7021/api/payment/"+JSON.parse(userId),formPayment);
    }
    else if(formAdvertisement != null){
        formAssignmentAndAdvertisementFunction("https://localhost:7021/api/advertisement/"+JSON.parse(userId),formAdvertisement);
    }
    else if(formAssignment != null){
        formAssignmentAndAdvertisementFunction("https://localhost:7021/api/assignment/"+JSON.parse(userId),formAssignment);
    }
    else if(formUser != null){
        formUserFunction("https://localhost:7021/api/user",formUser);
    }
}

const formPaymentFunction = (url,form) => {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const Amount = form.elements.amount.value;
        const Deadline = form.elements.deadline.value;
        const DebtorsMetadata = form.elements.debtors.value;
        const formData = {
          Amount,
          Deadline,
          DebtorsMetadata
        };

        await ObjectAdd(url, formData).then(() => {
            debugger;
            window.location.href='/HTML/HousematesManagment.html?id='+userId;
        });
    });
}

const formAssignmentAndAdvertisementFunction = (url,form) => {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const Title = form.elements.title.value;
        const Description = form.elements.description.value;
        const Comments = form.elements.comments.value;
        const Status = false;
        const formData = {
            Title,
            Description,
            Comments,
            Status
        };

        await ObjectAdd(url, formData).then(() => {
            window.location.href='/HTML/HousematesManagment.html?id='+userId;
        });
    });
}

const formUserFunction = (url,form) => {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const Name = form.elements.name.value;
        const SecondName = form.elements.secondname.value;
        const Login = form.elements.login.value;
        const Email = form.elements.email.value;
        const Password = form.elements.password.value;
        const Birthday = form.elements.birthday.value;
        const Gender = form.elements.gender.value
        const formData = {
            Name,
            SecondName,
            Login,
            Email,
            Password,
            Birthday,
            Gender
        };
        debugger;
        await ObjectAdd(url, formData).then(() => {
            window.location.href='/HTML/LoginModel/LoginView.html'
        });
    });
}

const ObjectAdd = async(url,body) => {
    await PutMethod(url,body);
}

const PutMethod = async(url,body) => {
    const reposne = await fetch(url,{
         method:"PUT",
         headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(body)
    });
}
