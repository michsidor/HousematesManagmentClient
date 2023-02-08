window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const data = JSON.parse(urlParams.get("data"));

    const resultHTML = "<h3>" + data.map(item => 
    "<li>" + 
    item.Id + 
    item.Amount + 
    item.Deadline + 
    item.DebtorsMetadata +
        "<input type='button' onclick='ObjectDelete(" + '"https://localhost:7021/api/payment/' + item.Id +  '"'  + ")'value='Delete payment'></input>" +
        "<input type='button' onclick='ObjectEdit(" + '"' + item.Id + '"' + ")'value='Edit payment'></input>" + 
        "</li>").join("") + 
        "</h3>" +"<br>";
    console.log(data);

    document.getElementById("result").innerHTML = resultHTML;
};

function ObjectEdit(Id){
    window.location.href = '/HTML/UpdateModels/UpdatePayment.html?id='+Id;
}