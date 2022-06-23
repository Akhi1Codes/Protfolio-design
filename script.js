function dark(){
    var ele = document.body;
    ele.classList.toggle("dark-mode");
    var Image_Id = document.getElementById('dark-mode');
        if (Image_Id.src.match("images/moon.gif")) {
            Image_Id.src = "images/sun.gif";
        }
        else {
            Image_Id.src = "images/moon.gif";
        }
    var Image_Id1 = document.getElementById('mail');
        if (Image_Id1.src.match("images/Mailoutline.webp")) {
            Image_Id1.src = "images/mailwhite.webp";
        }
        else {
            Image_Id1.src = "images/Mailoutline.webp";
        }
    var Image_Id3 = document.getElementById('git');
        if (Image_Id3.src.match("images/Vector.webp")) {
            Image_Id3.src = "images/gitwhit.webp";
        }
        else {
            Image_Id3.src = "images/Vector.webp";
        }
    var Image_Id4 = document.getElementById('link');
        if (Image_Id4.src.match("images/linkedin.webp")) {
            Image_Id4.src = "images/inwhite.webp";
        }
        else {
            Image_Id4.src = "images/linkedin.webp";
        }
    var Image_Id5 = document.getElementById('insta');
        if (Image_Id5.src.match("images/instagram.webp")) {
            Image_Id5.src = "images/instawhite.webp";
        }
        else {
            Image_Id5.src = "images/instagram.webp";
        }
    var Image_Id6 = document.getElementById('bp');
        if (Image_Id6.src.match("images/bp.webp")) {
            Image_Id6.src = "images/bewhite.webp";
        }
        else {
            Image_Id6.src = "images/bp.webp";
        }
    var Image_Id7 = document.getElementById('logo');
        if (Image_Id7.src.match("images/ym-logo.webp")) {
            Image_Id7.src = "images/ym-logo-wht.webp";
        }
        else {
            Image_Id7.src = "images/ym-logo.webp";
        }
    var Image_Id8 = document.getElementById('cntimg');
        if (Image_Id8.src.match("images/contact-image.webp")) {
            Image_Id8.src = "images/contactwht.webp";
        }
        else {
            Image_Id8.src = "images/contact-image.webp";
        }
}
