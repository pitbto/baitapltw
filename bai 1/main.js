function chuyenDoi() {
    const doC = document.getElementById('inputC').value;
    const doF = (doC * 9 / 5) + 32;
    document.getElementById('outputF').value = doF;

}