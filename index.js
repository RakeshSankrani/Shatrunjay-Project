let futureVal = () => {
    let amount = document.getElementById("name").value;
    let retyears = document.getElementById("retAge").value;
    let curyears = document.getElementById("currAge").value;
    let interest = 0.07;
  
    let baseAmount = amount / (retyears - curyears);
    let finalAmount = baseAmount / 12 / (1 + interest);
    let final = finalAmount.toFixed(2);
    document.getElementById("maturity").innerHTML = `${final} to be paid monthly`;
  };
  