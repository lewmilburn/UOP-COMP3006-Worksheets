function sayHello(name) {
    return "Hello "+name;
}

$(document).ready(function() {
    $("#doName").click(function(){
        let name = $('#name').val();
        $('#sayHello').text(sayHello(name));
        $('#name').val('');
    });
});