function saveModule() {
    let code = $("#code");
    let name = $("#name");

    let codeValue = code.val();
    let nameValue = name.val();

    code.val("");
    name.val("");

    $("#module").text(codeValue+" - "+nameValue);

    localStorage.setItem("module",codeValue+" - "+nameValue);
}

$(document).ready(function() {
    if (localStorage.getItem("module") !== null) {
        $("#module").text(localStorage.getItem("module"));
    }
});