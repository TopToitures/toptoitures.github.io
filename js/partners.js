$(document).ready(function() {
    /*window.partners = ["bourbourg", "cottage", "coudekerque", "creditagricole", "dunkerque", "grandesynthe", "habitat6259picardie", "logifim", "maisonflamande", "partenordhabitat", "rte", "total"];*/
    window.partners = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    window.partnerIndex = 0;
    changePicture = function() {
        //$(".currentPartner").css("backgroundImage", "url('./img/" + window.partners[window.partnerIndex] + ".png')");
        $(".currentPartner").css("backgroundImage", "url('./img/header/" + window.partners[window.partnerIndex] + ".jpg')");
        $(".currentPartner").css("background-size", "contain");
        window.partnerIndex += 1;
        if (window.partnerIndex >= window.partners.length) { window.partnerIndex = 0; }
    };
    changePicture();
    window.setInterval(changePicture, 3000);
});