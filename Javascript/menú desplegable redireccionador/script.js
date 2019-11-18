(function () {

    var list = document.getElementById('lista');
    list.addEventListener('change', redirection);

    function redirection(e) {
        var list_value = e.target.value;
        location.replace("https://www.google.com/" + list_value);
    }

})();
