const userId = localStorage.getItem("id");

window.onload = async function(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const formPayment = document.getElementById("editPayment");
    const formAdvertisement = document.getElementById("editAdvertisement");
    const formAssignment = document.getElementById("editAssignment");
    if(formPayment != null){
        formPaymentFunction("https://localhost:7021/api/payment",formPayment,id);
    }
    else if(formAdvertisement != null){
        formAssignmentAndAdvertisementFunction("https://localhost:7021/api/advertisement",formAdvertisement,id);
    }
    else if(formAssignment != null){
        formAssignmentAndAdvertisementFunction("https://localhost:7021/api/assignment",formAssignment,id);
    }
}

const formPaymentFunction = (url,form,Id) => {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const Amount = form.elements.amount.value;
        const Deadline = form.elements.deadline.value;
        const DebtorsMetadata = form.elements.debtors.value;
        const formData = {
            Id, 
            Amount,
            Deadline,
            DebtorsMetadata
        };
        debugger;
        await ObjectEdit(url, formData);
    });
}

const formAssignmentAndAdvertisementFunction = (url,form,Id) => {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const Title = form.elements.title.value;
        const Description = form.elements.description.value;
        const Comments = form.elements.comments.value;
        const Status = false;
        const formData = {
            Id,
            Title,
            Description,
            Comments,
            Status
        };

        await ObjectEdit(url, formData);
    });
}

const ObjectEdit = async(url,body) => {
    await PostMethod(url,body);
    debugger;
    window.location.href='/HTML/HousematesManagment.html?id='+userId;
}

const PostMethod = async(url,body) => {
    const reposne = await fetch(url,{
         method:"POST",
         headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(body)
    });
}