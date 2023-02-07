window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const data = JSON.parse(urlParams.get("data"));

    const resultHTML = "<h3>" + data.map(item => 
    "<li>" + 
    item.Id + 
    item.Title + 
    item.Description + 
    item.Comments +
    "<input type='button' onclick='ObjectDelete(" + '"https://localhost:7021/api/advertisement/' + item.Id +  '"'  + ")'value='Delete advertisement'></input>" +
    "<input type='button' onclick='ObjectDelete(" + '"https://localhost:7021/api/advertisement/' + item.Id +  '"'  + ")'value='Edit payment'></input>" +
    "</li>").join("") + 
    "</h3>" +"<br>";
    console.log(data);
    
    document.getElementById("result").innerHTML = resultHTML;
  };