

function removeChildren() {
    var Parent = document.getElementById("loanPaymentTable")
    while(Parent.hasChildNodes())
    {
        Parent.removeChild(Parent.lastChild);
    }
}

// Creates the table headers / indexes at the top of the table each time the loan is calculated.
function createHeaders() {
    let i = 0;
    while (i < 5) {
        var header
        switch (i) {
            case 0:
                header = "Payment Month:"
                break;
            case 1:
                header = "Payment:"
                break;
            case 2:
                header = "Principal Amount:"
                break;
            case 3:
                header = "Interest:"
                break;
            case 4:
                header = "New Balance:"
                break;
            
            }
        i += 1;
        const tableHeader = document.createElement("th");
        tableHeader.setAttribute('id',`tableHeader${i}`);
        const element_text = document.createTextNode(`${header}`);
        tableHeader.appendChild(element_text);
        loanPaymentTable.appendChild(tableHeader);
    }
}

function calculateLoan() {
    removeChildren()
    createHeaders()

    var loanAmount = document.getElementById("amountToLoan").value;
    var loanPeriod = document.getElementById("loanLength").value;
    var monthlyRate = document.getElementById("loanRate").value / 100 / 12;
    
    let monthlyPaymentCalculated = monthlyPayment(loanAmount, loanPeriod, monthlyRate);
    var loanBalance = loanAmount;
    let loanWithInterest = monthlyPaymentCalculated * loanPeriod;
    var loanMonthlyPayment = (loanWithInterest / loanPeriod);
    var loanInterestAmount = loanBalance * monthlyRate;
    var loanPrincipalAmount = (loanMonthlyPayment - loanInterestAmount);
    var loanPaymentMonth = 0;
    


    // Calculation for the loan payments based on interest, loan amount and loan period.
    function monthlyPayment(loanAmount, loanPeriod, monthlyRate) {
        return loanAmount * monthlyRate * (Math.pow(1 + monthlyRate, loanPeriod)) / (Math.pow(1 + monthlyRate, loanPeriod) -1)
    }

    // Removing decimals to retain readability
    monthlyPaymentCalculated = parseFloat(monthlyPaymentCalculated.toFixed(2));

    // Console.log(monthlyPayment(loanAmount, loanPeriod, monthlyRate))

    // Code for testing of values and calculation
    console.log(`Monthly rate ${monthlyRate}`);
    console.log(`The loan is ${loanWithInterest}`);
    console.log(`Monthly payment is ${loanMonthlyPayment}`);
    console.log(`Interest amount is ${loanInterestAmount}`);
    console.log(`Principle amount is ${loanPrincipalAmount}`);
    console.log(`Principle amount is ${loanBalance}`);
    console.log(`Principle amount is ${monthlyRate}`);
    

    while (loanPaymentMonth < loanPeriod) {
            loanPaymentMonth += 1;
            // Create a new table row for the loan debt calculation and adding payment month number.
            const paymentMonthNumber = document.createElement("tr");
            paymentMonthNumber.setAttribute('id','monthColumn');
            const element_text = document.createTextNode(`Month ${loanPaymentMonth}`);
            paymentMonthNumber.appendChild(element_text);
            loanPaymentTable.appendChild(paymentMonthNumber);      

            // Updating variables during the loop to ensure they are incremented correctly.

            loanInterestAmount = loanBalance * monthlyRate;
            loanPrincipalAmount = (loanMonthlyPayment - loanInterestAmount);
            loanBalance -= loanPrincipalAmount;
            
            // Adds table data "td" records for each column before incrementing the loop.
            // Adds payment amount to the table as table data

            // The below code adds whatever is left of balance, whether negative or positive to final payment.
            if (loanPaymentMonth >= loanPeriod && loanBalance > 0 || loanPaymentMonth >= loanPeriod && loanBalance < 0) {
                loanBalance = parseFloat(loanBalance.toFixed(2));
                 console.log(typeof(loanBalance))
                monthlyPaymentCalculated = monthlyPaymentCalculated + loanBalance;
                loanBalance = 0; 
            }
            const paymentAmountColumn = document.createElement("td");
            const element_text2 = document.createTextNode(`${monthlyPaymentCalculated}`);
            paymentAmountColumn.appendChild(element_text2);
            paymentMonthNumber.appendChild(paymentAmountColumn);
        

            // Adds principal amount to the table as table data by appending the table
            // Also reducing decimal count 
            loanPrincipalAmount = loanPrincipalAmount.toFixed(2);
            const principalAmountColumn = document.createElement("td");
            const element_text3 = document.createTextNode(`${loanPrincipalAmount}`);
            principalAmountColumn.appendChild(element_text3);
            paymentMonthNumber.appendChild(principalAmountColumn);
            

            // Adds interest amount to the table as table data by appending the table
            // Also reducing decimal count 
            loanInterestAmount = loanInterestAmount.toFixed(2);
            const interestAmountColumn = document.createElement("td");
            const element_text4 = document.createTextNode(`${loanInterestAmount}`);
            interestAmountColumn.appendChild(element_text4);
            paymentMonthNumber.appendChild(interestAmountColumn);

            // Adds interest amount to the table as table data by appending the table
            // Also reducing decimal count 
            loanBalance = parseFloat(loanBalance.toFixed(2));
            const newBalanceColumn = document.createElement("td");
            const element_text5 = document.createTextNode(`${loanBalance}`);
            newBalanceColumn.appendChild(element_text5);
            paymentMonthNumber.appendChild(newBalanceColumn);
            
            
    }
};