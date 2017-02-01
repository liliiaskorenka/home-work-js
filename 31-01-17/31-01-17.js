var xhr = new XMLHttpRequest();
xhr.open("GET", "dataJan-30-2017.json");
xhr.addEventListener("readystatechange", function () {
    if (this.readyState !== 4) {
        return;
    }

    var json = JSON.parse(this.responseText);
    var table = document.createElement("table");
    var th1 = document.createElement("th");
    th1.textContent = "User Name";
    var th2 = document.createElement("th");
    th2.textContent = "BirthDay";
    var th3 = document.createElement("th");
    th3.textContent = "Profession";
    var th4 = document.createElement("th");
    th4.textContent = "Address";
    var th5 = document.createElement("th");

    var tr = document.createElement("tr");
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);

    /*console.log(tr);*/

    table.appendChild(tr);

    for (var x in json) {
        var td1 = document.createElement("td");
        td1.textContent = json[x].userName;
        var td2 = document.createElement("td");
        td2.textContent = json[x].birthDay;
        var td3 = document.createElement("td");
        td3.textContent = json[x].profession;
        var td4 = document.createElement("td");
        td4.textContent = json[x].address;
        var td5 = document.createElement("td");
        var button = document.createElement("button");
        button.textContent = "Delete";
        button.setAttribute("class", "button_delete_name");
        button.addEventListener("click", function (e) {
            e.preventDefault();
            var delete_name = e.target.parentElement.parentElement;
            delete_name.parentElement.removeChild(delete_name);
        });
        td5.appendChild(button);
        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        table.appendChild(tr);


    }
    document.getElementById("tables").appendChild(table);
});
xhr.send();


