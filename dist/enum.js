"use strict";
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 0] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 1] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 2] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 3] = "Book";
})(PrintMedia || (PrintMedia = {}));
var PrintSocialMedia;
(function (PrintSocialMedia) {
    PrintSocialMedia["Facebook"] = "FACEBOOK";
    PrintSocialMedia["Instagram"] = "INSTAGRAM";
    PrintSocialMedia["WhatsApp"] = "WHATSAPP";
    PrintSocialMedia["Twitter"] = "TWITTER";
})(PrintSocialMedia || (PrintSocialMedia = {}));
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status[Status["Deactivate"] = 1] = "Deactivate";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
