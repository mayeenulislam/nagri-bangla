function copyText(target, button) {
    var target = document.getElementById(target);
    var copyIcon = button.querySelector(".copy-icon");
    var copyText = button.querySelector(".copy-text");

    /* Select the text field */
    target.select();
    target.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Handle the UI indications on copied the texts */
    copyIcon.classList.remove("bi-clipboard");
    copyIcon.classList.add("bi-check-circle-fill", "text-success");

    copyText.innerText = 'কপি করা হয়েছে';
    copyText.classList.remove("visually-hidden");

    /* Set the copy icon and button to its original state */
    setTimeout(function () {
        copyIcon.classList.remove("bi-check-circle-fill", "text-success");
        copyIcon.classList.add("bi-clipboard");

        copyText.innerText = "কপি করুন";
        copyText.classList.add("visually-hidden");
    }, 1200);
}