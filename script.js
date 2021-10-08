// update rate value
function updateRate() {
    // get rate value
    var rateval = document.getElementById("rate").value;

    // set new rate value
    document.getElementById("rate_val").innerText = rateval + " %";
}

// compute interest value
function compute() {
    // get principal value
    var principal = document.getElementById("principal").value;

    // validate principal not 0 or negative values
    if (principal <= 0) {
        // princical is 0 or negative values

        // alert message to user
        alert("Enter a positive number");

        // set focus to principal input
        document.getElementById("principal").focus();
    } else {
        // principal is not 0 or negative values

        // get value from form calculator
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear() + parseInt(years);
    
        // set generated text from the value
        let principalText = "If you deposit \<mark\>" + principal + "\</mark\>,\<br\>";
        let rateText = "at an interest rate of  \<mark\>" + rate + "\</mark\>,\<br\>";
        let interestText = "You will receive an amount of  \<mark\>" + interest + "\</mark\>,\<br\>";
        let yearText = "in the year \<mark\>" + year + "\</mark\>,\<br\>";
        
        // set result innerhtml using text from the generated text
        document.getElementById("result").innerHTML = principalText + rateText + interestText + yearText;
    }
}