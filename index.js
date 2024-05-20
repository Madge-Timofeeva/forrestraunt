const button = document.querySelector('#btn');
button.addEventListener('click', calculateAmount);

const buttonTip =document.querySelector('#addTip');
buttonTip.addEventListener('click', showTip);

function showTip(e){
    e.preventDefault();
    tip.style.display = 'block';
}

function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector('#bill').value;
    const people = document.querySelector('#people').value;
    const tip = document.querySelector('#tip').value;

    if (bill === '' || people === '' || people < 1){
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Please enter your information!",
        });
    }

    let amountPerPerson = bill/people; //сколько заплатит один человек
    let tipPerPerson = (bill * tip) / people; //сколько  чаевых заплатит 1 человек
    let totalSum = amountPerPerson + tipPerPerson; //сумма счета и чаевых на человека

    amountPerPerson = amountPerPerson.toFixed(2); //метод toFixed()
    tipPerPerson = tipPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector('#dividedBill').textContent = amountPerPerson; //показываем в приложении
    document.querySelector('#dividedTip').textContent = tipPerPerson;
    document.querySelector('#billAndTip').textContent = totalSum;
}

