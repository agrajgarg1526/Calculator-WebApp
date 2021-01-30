var text = "";

$(".btn").on("click", (event) => {

    switch (event.target.innerHTML) {
        case "C":
            text = "";
            break;

        case "DEL":
            text = text.slice(0, -1);
            break;

        case "x":
            if ((text.length == 1) && (text[0] == '-')) {
                text = "";
            }
            if (text == "")
                break;

            var last = text[text.length - 1];
            if (last == '/' || last == '*' || last == '+' || last == '-') {
                text = text.slice(0, -1);
            }
            text += '*';
            break;

        case "/":
            if ((text.length == 1) && (text[0] == '-')) {
                text = "";
            }
            if (text == "")
                break;

            var last = text[text.length - 1];
            if (last == '/' || last == '*' || last == '+' || last == '-') {
                text = text.slice(0, -1);
            }
            text += '/';
            break;

        case "+":
            if ((text.length == 1) && (text[0] == '-')) {
                text = "";
            }
            if (text == "")
                break;

            var last = text[text.length - 1];
            if (last == '/' || last == '*' || last == '+' || last == '-') {
                text = text.slice(0, -1);
            }
            text += '+';
            break;

        case "-":
            var last = text[text.length - 1];
            console.log(last);
            if (last == '/' || last == '*' || last == '+' || last == '-') {
                text = text.slice(0, -1);
            }
            text += '-';
            break;

        case "=":
            $(".history").text(text);
            console.log(text[0]);
            if (text.slice(-1) == '/' || text.slice(-1) == '*') {
                text += '1';
            }
            if (text.slice(-1) == '+' || text.slice(-1) == '-') {
                text += '0';
            }
            if (text.slice(-1) == '.') {
                text += '0';
            }
            text = eval(text);
            break;

        default:
            text += event.target.innerHTML;

    }
    $(".result").val(text);
});