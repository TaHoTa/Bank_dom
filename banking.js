// handle diposit ----------------
document.getElementById('submit_deposit').addEventListener('click', function () {
    const newInputDeposit = document.getElementById('deposit_input');
    const newDepositvalue = newInputDeposit.value;
    const depositText = document.getElementById('deposit_text');
    const depositInnerText = depositText.innerText;
    const newTotalDeposit = parseFloat(newDepositvalue) + parseFloat(depositInnerText);

    depositText.innerText = newTotalDeposit;
    newInputDeposit.value = '';

    // handle balance -------------

    const balanceText = document.getElementById('balance_text');
    const newTotalBalance = parseFloat(newDepositvalue) + parseFloat(balanceText.innerText);


    balanceText.innerText = newTotalBalance;
})

// handle withdraw ----------------
document.getElementById('submit_withdraw').addEventListener('click', function () {
    const newInputWithdraw = document.getElementById('withdraw_input');
    const newWithdrawValue = newInputWithdraw.value;
    const withdrawText = document.getElementById('withdraw_text');
    const withdrawInnerText = withdrawText.innerText;
    const newTotalWithdraw = parseFloat(newWithdrawValue) + parseFloat(withdrawInnerText);

    withdrawText.innerText = newTotalWithdraw;
    newInputWithdraw.value = '';

    // handle balance -------------

    const balanceText = document.getElementById('balance_text');
    const newTotalBalance = parseFloat(balanceText.innerText) - parseFloat(newWithdrawValue);


    balanceText.innerText = newTotalBalance;

})