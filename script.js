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

    let result = (((fOne + fNew) / 2) * 0.3) + (aOne * 0.2) + (((sOne + sNew) / 2) * 0.5);
    result = Math.round(result * 100) / 100;

    document.getElementById('primero').innerText = result;
});

document.getElementById('calculateSecond').addEventListener('click', function() {
    let fTwo = clamp(parseFloat(document.getElementById('fTwo').value) || 0, 0, 10);
    let aTwo = clamp(parseFloat(document.getElementById('aTwo').value) || 0, 0, 10);
    let sTwo = clamp(parseFloat(document.getElementById('sTwo').value) || 0, 0, 10);
    let nTwo = clamp(parseFloat(document.getElementById('nTwo').value) || 0, 0, 10);
    let selectType = document.getElementById('typeTwo').value;

    let x, y;

    if (selectType === 'Formativa') {
        y = sTwo;
        x = (((nTwo - (aTwo * 0.2) - (((y + sTwo) / 2) * 0.5)) / 0.3) * 2) - fTwo;
        x = clamp(x, 0, 10);

        document.getElementById('segundo').innerText = x.toFixed(2);
    } else if (selectType === 'Sumativa') {
        x = fTwo;
        y = (((nTwo - (aTwo * 0.2) - (((x + fTwo) / 2) * 0.3)) / 0.5) * 2) - sTwo;
        y = clamp(y, 0, 10);

        document.getElementById('segundo').innerText = y.toFixed(2);
    }
});
