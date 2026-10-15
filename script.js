
"use strict";

// 1. Variables to store application data
let budget = 0;
let expenses = 0;
let remainingBalance = 0;
let hasBudgetData = false;

// 2. Get HTML elements
const budgetDisplay = document.getElementById("budget");
const expensesDisplay = document.getElementById("expenses");
const balanceDisplay = document.getElementById("balance");
const statusDisplay = document.getElementById("status");

const updateBudgetBtn = document.getElementById("updateBudgetBtn");
const calculateBtn = document.getElementById("calculateBtn");

// 3. Function to format money in Kenyan shillings
function formatCurrency(amount) {
    return "KSh " + amount.toLocaleString("en-KE", {
        maximumFractionDigits: 2
    });
}

// 4. Reusable function to calculate the remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// 5. Function to display the results on the webpage
function displayResults() {
    budgetDisplay.textContent = formatCurrency(budget);
    expensesDisplay.textContent = formatCurrency(expenses);
    balanceDisplay.textContent = formatCurrency(remainingBalance);

    if (remainingBalance > 0) {
        statusDisplay.textContent =
            "You are within your budget. You have money remaining.";
    } else if (remainingBalance === 0) {
        statusDisplay.textContent =
            "Your budget is fully used. You have no balance remaining.";
    } else {
        statusDisplay.textContent =
            "You have exceeded your budget by " +
            formatCurrency(Math.abs(remainingBalance)) + ".";
    }
}

// 6. Function to print a clearly labeled console report
function displayConsoleReport() {
    console.log("===== SpendWise Budget Report =====");
    console.log("Total Budget: " + formatCurrency(budget));
    console.log("Total Expenses: " + formatCurrency(expenses));
    console.log("Remaining Balance: " + formatCurrency(remainingBalance));

    if (remainingBalance >= 0) {
        console.log("Status: Within budget.");
    } else {
        console.log(
            "Status: Over budget by " +
            formatCurrency(Math.abs(remainingBalance))
        );
    }

    console.log("===================================");
}

// 7. Collect user input using prompt()
function collectBudgetInformation() {
    const budgetInput = prompt(
        "Enter your total budget in KSh:"
    );

    // Stop if the user cancels the prompt
    if (budgetInput === null) {
        console.log("Budget entry cancelled.");
        return;
    }

    const expensesInput = prompt(
        "Enter your total expenses in KSh:"
    );

    if (expensesInput === null) {
        console.log("Expense entry cancelled.");
        return;
    }

    // Convert text input into numbers
    const newBudget = Number(budgetInput.trim());
    const newExpenses = Number(expensesInput.trim());

    // Validate user input
    if (
        budgetInput.trim() === "" ||
        expensesInput.trim() === "" ||
        !Number.isFinite(newBudget) ||
        !Number.isFinite(newExpenses) ||
        newBudget < 0 ||
        newExpenses < 0
    ) {
        alert(
            "Please enter valid, non-negative numbers for your budget and expenses."
        );
        console.error("Invalid budget or expense input.");
        return;
    }

    // Store the valid values
    budget = newBudget;
    expenses = newExpenses;
    hasBudgetData = true;

    // Perform the calculation
    remainingBalance = calculateBalance(budget, expenses);

    // Update the webpage and console
    displayResults();
    displayConsoleReport();
}

// 8. Connect the buttons to their functions
updateBudgetBtn.addEventListener(
    "click",
    collectBudgetInformation
);

calculateBtn.addEventListener("click", function () {
    if (!hasBudgetData) {
        alert("Please enter your budget and expenses first.");
        return;
    }

    remainingBalance = calculateBalance(budget, expenses);

    displayResults();
    displayConsoleReport();
});

// 9. Initial message in the browser console
console.log("Welcome to SpendWise!");
console.log("Click 'Enter Budget Information' to get started.");
