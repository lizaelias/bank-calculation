// step 1
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2
    const depositField = document.getElementById('deposit-filed');
    const depositFieldString = depositField.value;
    const depositAmount = parseFloat(depositFieldString);

    // step 3;

    const previousDeposit = document.getElementById('deposit-tatal');
    const previousDepositString = previousDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositString);
    // step 4 ;

    const newDepositAmount = previousDepositAmount + depositAmount;

    // step 5 ;
    previousDeposit.innerText = newDepositAmount;

    // step 6:
    depositField.value = ' ';


    const balanceTotalElement = document.getElementById('Balance-total');
    const currentTotalBalance = balanceTotalElement.innerText;
    const previousTotalBalance = parseFloat(currentTotalBalance);

    const totalBalance = previousTotalBalance + newDepositAmount;

    balanceTotalElement.innerText = totalBalance;

})





