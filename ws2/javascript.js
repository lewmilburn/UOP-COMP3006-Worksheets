$(function() {
    $("#sayHello").click(function() {
        let userName = $("#name").val();
        let message = "Hello " + userName + "!";
        $("#sayHello_result").html(message);
    });

    $("#doValidation").click(function() {
        let number = $("#number").val();
        let messageBox = $("#message");
        let messageText = $("#numberMessageText");

        number = parseInt(number);

        if (messageBox.hasClass('green')) { messageBox.removeClass('green'); }
        if (messageBox.hasClass('red')) { messageBox.removeClass('red'); }

        if (number >= 10) {
            messageText.text('Greater than or equal to ten.');
            messageBox.removeClass('hidden');
            messageBox.addClass('green');
        } else if (number < 10) {
            messageText.text('Less than ten.');
            messageBox.removeClass('hidden');
            messageBox.addClass('red');
        }
    });

    $("#findUnique").click(function () {
        let string = $("#string").val();
        const array = string.split(',');
        console.log(array);
        let unique = $.unique(array)
        $('#findUnique_result').text(unique);
    });
});