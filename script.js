function checkPrime(number) {
    if (number < 2) {
        return false
    }

    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0)
            return false;
    }

    return true;
}

function printPrimeNumber() {
    let ipNumber = Number(document.getElementById('number').value);
    let number = '';

    if (checkPrime(ipNumber)) {
        number += ipNumber + ' là số nguyên tố';
        count++;
    }
    else {
        number += ipNumber + ' không phải là số nguyên tố' + ''
    }

    document.getElementById('primenumber').innerHTML = number;
}
