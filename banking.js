// input to float value function ---------
function getInputValue(inpitId) {
    const newInput = document.getElementById(inpitId);
    const inputText = newInput.value;
    const newvalue = parseFloat(inputText);

    newInput.value = '';
    return newvalue;
}


document.getElementById('submit_deposit').addEventListener('click', function () {
    // handle diposit ----------------
    const depositValue = getInputValue('deposit_input');

    const depositText = document.getElementById('deposit_text');
    const depositInnerText = depositText.innerText;
    const newTotalDeposit = depositValue + parseFloat(depositInnerText);

    depositText.innerText = newTotalDeposit;

    // handle balance -------------

    const balanceText = document.getElementById('balance_text');
    const newTotalBalance = depositValue + parseFloat(balanceText.innerText);


    balanceText.innerText = newTotalBalance;
})

// handle withdraw ----------------
document.getElementById('submit_withdraw').addEventListener('click', function () {


    const withdrawValue = getInputValue('withdraw_input');

    const withdrawText = document.getElementById('withdraw_text');
    const withdrawInnerText = withdrawText.innerText;
    const newTotalWithdraw = withdrawValue + parseFloat(withdrawInnerText);

    withdrawText.innerText = newTotalWithdraw;

    // handle balance -------------

    const balanceText = document.getElementById('balance_text');
    const newTotalBalance = parseFloat(balanceText.innerText) - withdrawValue;


    balanceText.innerText = newTotalBalance;

})