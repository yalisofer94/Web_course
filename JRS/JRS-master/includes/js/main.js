(function () {
    initCards = function () {
        var cards = document.getElementsByClassName("jobDetails");
        if (cards.length <= 0)
            return;
        var headLines = ["Front end dev", "Front end dev", "Back end dev", "DevOps", "System engineer", "Data base administrator"];
        var listLocations = ["Tel Aviv, Hertzel 18", "Tel Aviv, Hahagana 204", "Ramat Gan, Hayahalom 38", "Ra'anana, Kishon 51", "Petah Tikva, Segula 42", "Kfar Saba, Hasharon 103"];
        var listJobType = ["Full time job", "Full time job", "Full time job", "Full time job", "Full time job", "Full time job"];
        var listPayment = ["Above the market", "Average", "Average", "Average", "Low to market", "Average"];
        var ratings = ["9.5", "8.5", "7.5", "6.5", "5.5", "4.5"];
        var images = ["url(images/companies/circle.png)", "url(images/companies/cube.png)", "url(images/companies/flagship.png)", "url(images/companies/appmybook.png)", "url(images/companies/tatu.png)", "url(images/companies/optical.png)"];
        for (i = 0; i < 6; ++i) {
            cards[i].style.backgroundImage = images[i];
            $(cards[i]).append("<h6>" + headLines[i] + "</h6>");
            $(cards[i]).append("<ul class='cardUL'><li class='locationIcon'>" + listLocations[i] + "</li><li class='typeIcon'>" + listJobType[i] + "</li><li class='paymentIcon'>" + listPayment[i] + "</li></ul>");
            $(cards[i]).append("<div class='ratingOnCard'>" + ratings[i] + "</div>");
        }
    };

    initCards();
}());


(function () {
    var isLogInPage = document.getElementById("notLogged");
    if (!isLogInPage)
        return;

    var userWelcome = document.getElementById("user-welcome");
    userWelcome.style.backgroundImage = "url(images/login-icon.png)";
    var userName = userWelcome.querySelector('.linkText');
    userName.innerText = "Login";

}());
