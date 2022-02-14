// input to float value function ---------
function getInputValue(inpitId) {
    const newInput = document.getElementById(inpitId);
    const inputText = newInput.value;
    const newvalue = parseFloat(inputText);

    newInput.value = '';
    return newvalue;
}
// update text field (deposit + withdraw)
function getTotalValue(inputText, value) {
    const Text = document.getElementById(inputText);
    const InnerText = Text.innerText;
    const newTotal = value + parseFloat(InnerText);
    Text.innerText = newTotal;
    return Text.innerText;
}

function getBalance(Value) {
    const balanceText = document.getElementById('balance_text');
    const newTotalBalance = Value + parseFloat(balanceText.innerText);
    balanceText.innerText = newTotalBalance;
}

// handle diposit ----------------
document.getElementById('submit_deposit').addEventListener('click', function () {

    const depositValue = getInputValue('deposit_input');
    const depositText = getTotalValue('deposit_text', depositValue);

    // handle balance -------------
    getBalance(depositValue);

})

// handle withdraw ----------------
document.getElementById('submit_withdraw').addEventListener('click', function () {

    const withdrawValue = getInputValue('withdraw_input');
    const withdrawText = getTotalValue('withdraw_text', withdrawValue);

    // handle balance -------------
    getBalance(withdrawValue * (-1));

})