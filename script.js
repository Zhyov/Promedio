// thank you chat gpt for the code

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

document.getElementById('calculateFirst').addEventListener('click', function() {
    let fOne = clamp(parseFloat(document.getElementById('fOne').value) || 0, 0, 10);
    let aOne = clamp(parseFloat(document.getElementById('aOne').value) || 0, 0, 10);
    let sOne = clamp(parseFloat(document.getElementById('sOne').value) || 0, 0, 10);
    let fNew = clamp(parseFloat(document.getElementById('fNew').value) || fOne, 0, 10);
    let sNew = clamp(parseFloat(document.getElementById('sNew').value) || sOne, 0, 10);
    let cfOne = clamp(parseFloat(document.getElementById('cfOne').value) || 1, 0, 10);
    let csOne = clamp(parseFloat(document.getElementById('csOne').value) || 1, 0, 10);

    let result = 3 * (fOne * cfOne + fNew) / (10 * (cfOne + 1)) + aOne / 5 + ((sOne * csOne + sNew) / (2 * (csOne + 1)));
    result = Math.round(result * 100) / 100;

    document.getElementById('primero').innerText = result;
});

document.getElementById('calculateSecond').addEventListener('click', function() {
    let fTwo = clamp(parseFloat(document.getElementById('fTwo').value) || 0, 0, 10);
    let aTwo = clamp(parseFloat(document.getElementById('aTwo').value) || 0, 0, 10);
    let sTwo = clamp(parseFloat(document.getElementById('sTwo').value) || 0, 0, 10);
    let nTwo = clamp(parseFloat(document.getElementById('nTwo').value) || 0, 0, 10);
    let cfTwo = clamp(parseFloat(document.getElementById('cfTwo').value) || 0, 0, 10);
    let csTwo = clamp(parseFloat(document.getElementById('csTwo').value) || 0, 0, 10);
    let selectType = document.getElementById('typeTwo').value;

    let x, y;

    if (selectType === 'Formativa') {
        x = (((nTwo - (aTwo / 5) - (sTwo / 2)) * 10 * (cfTwo + 1)) / 3) - (fTwo * cfTwo)
        x = clamp(x, 0, 10);

        document.getElementById('segundo').innerText = x.toFixed(2);
    } else if (selectType === 'Sumativa') {
        y = ((nTwo - (3 * fTwo / 10) - (aTwo / 5)) * 2 * (csTwo + 1)) - (sTwo * csTwo)
        y = clamp(y, 0, 10);

        document.getElementById('segundo').innerText = y.toFixed(2);
    }
});
