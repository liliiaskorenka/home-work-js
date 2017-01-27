var add = document.getElementById("add");
add.addEventListener("click", function () {
    var newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    var tdnewCheckbox = document.createElement("div");
    tdnewCheckbox.setAttribute("class", "divData");
    tdnewCheckbox.appendChild(newCheckbox);


    var newFullname = document.createElement("input");
    newFullname.type = "text";
    var tdnewFullname = document.createElement("div");
   tdnewFullname.setAttribute("class", "divName");
    tdnewFullname.appendChild(newFullname);


    var newAdress = document.createElement("input");
    newAdress.type = "text";
    tdnewFullname.appendChild(newAdress);


    var button = "<button style=\"background-color:darkslateblue; border:1px solid blanchedalmond; color:white; font-weight:bold; padding: 5px 10px;\">Remove</button>";
    var tdnewButton = document.createElement("div");
    tdnewButton.setAttribute("class", "divData");
    tdnewButton.innerHTML = button;

    var message = document.createElement("div");
    message.setAttribute("class", "message");
    message.textContent = "";
    tdnewFullname.appendChild(message);

    var rownew = document.createElement("div");
    rownew.setAttribute("class", "divData");
    rownew.appendChild(tdnewCheckbox);
    rownew.appendChild(tdnewFullname);
    rownew.appendChild(tdnewButton);


    var tablenew = document.createElement("div");
    tablenew.setAttribute("class", "divD");
    tablenew.appendChild(rownew);

    document.getElementById("divForm").appendChild(tablenew);






    tdnewButton.addEventListener("click", function (e) {
        e.preventDefault();
        var removeDiv = e.target.parentElement.parentElement;
        removeDiv.parentElement.removeChild(removeDiv);
    });

    newCheckbox.addEventListener("change", function () {
        if (newCheckbox.checked == true) {
            newFullname.style.backgroundColor = "red";
            newAdress.style.backgroundColor = "red";
        }
        else {
            newFullname.style.backgroundColor = "white";
            newAdress.style.backgroundColor = "white";
        }
    });

    var submitInput = document.getElementById("btnSubmit");
    submitInput.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!newFullname.value || !newAdress.value) {
            message.textContent = "Enter all data";
        } else {
            message.textContent = "";
        }
    });
});





