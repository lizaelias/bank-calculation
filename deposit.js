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


document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step 2
    const withdrawValueFiled = document.getElementById('withdraw-filed');
    const withdrawValue = withdrawValueFiled.value;
    const newWithdrawAmount = parseFloat(withdrawValue);
    // step 3

    withdrawValueFiled.value = ' ';

    // step 4;

    const withdrawElement = document.getElementById('total-withdraw');
    const newWithdrawAmountString = withdrawElement.innerText;
    const previousWithdraw = parseFloat(newWithdrawAmountString);
    
    // step 5
    const newTotalWithdraw = previousWithdraw + newWithdrawAmount;

    withdrawElement.innerText = newTotalWithdraw;


    const previousTotalBalance = document.getElementById('Balance-total');
    const previousTotalBalanceString = previousTotalBalance.innerText;
    const totalBalance = parseFloat(previousTotalBalanceString);
    
    const currentBalance = totalBalance - newTotalWithdraw;

    previousTotalBalance.innerText = currentBalance;
 
})




