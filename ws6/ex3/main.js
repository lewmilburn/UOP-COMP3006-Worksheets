// This is the code to be tested.

function clickElement(element) {
    try {
        element.trigger("click");
    } catch(err) {
        var event = new MouseEvent("click", {view: window, cancelable: true, bubbles: true});
        element.dispatchEvent(event);
    }
}

function rgb2hex(color) {
    var digits = /(.*?)rgba\((\d+), (\d+), (\d+), (\d+)\)/.exec(color);
    if (digits == null) {
        digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
    }
    var red = parseInt(digits[2],10);
    var green = parseInt(digits[3],10);
    var blue = parseInt(digits[4],10);
    var rgb = blue | (green << 8) | (red << 16);
    if(red == 0){
        return digits[1] + '#00' + rgb.toString(16);
    }else{
        return digits[1] + '#' + rgb.toString(16);
    }
}

function add(num1,num2) {
    return num1+num2;
}

function mul(num1,num2) {
    return num1*num2;
}

$(document).ready(function() {
    $("#btnAdd").click(function(){
        let num1 = $('#number1').val();
        let num2 = $('#number2').val();
        $('#result').text(add(parseInt(num1),parseInt(num2)));
        $('#number1').val('');
        $('#number2').val('');
    });
    $("#btnMuk").click(function(){
        let num1 = $('#number1').val();
        let num2 = $('#number2').val();
        $('#result').text(mul(parseInt(num1),parseInt(num2)));
        $('#number1').val('');
        $('#number2').val('');
    });
});