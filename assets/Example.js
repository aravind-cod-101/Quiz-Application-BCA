console.log("investment", "bond")
makeChoice = prompt("Choose between bond or investment");

if (makeChoice == "investment") {
    investmentAmount = prompt("how much are you investing? :")
    alert("investment amount is", investmentAmount);
    console.log(investmentAmount);
}
else if (makeChoice == "bond") {
    principalAmount = prompt("What is your principal amount? :");
    interest = prompt("what is your interest rate")
    investmentYears = prompt("How many years do you intend to invest")
    console.log(principalAmount)
}
