
// deposit amount 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // get and set deposit
    const newDepositAmount = getInputValueById('deposit-field');
    const previousTotal = getTextElementValueById('deposit-total');
    const newDepositTotal = previousTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal)

    // add total balance 
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})

