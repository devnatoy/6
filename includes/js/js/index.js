$(document).ready(function () {
    document.getElementById("exitButton").addEventListener("click", function () {
        window.location.href = "about:blank"; 
    });

    $(document).on("click", "#exitConfirmButton", function () {
        $("#popupCloseRight").popup("open");
    });

    $(document).on("click", "#closePopup", function () {
        $("#popupCloseRight").popup("close");
    });
});
