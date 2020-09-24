function deleteData() {
    var a, b;
    if (confirm("Bạn có chắc chắn?")) {
        for (a = 0; a < N.length; a++) {
            for (b = 1; 10 >= b; b++) {
                delete window.localStorage[N[a] + b];
            }
        }
        location.reload();
    }
}