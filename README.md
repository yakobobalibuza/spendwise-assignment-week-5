
# SpendWise Budget Dashboard

## 1. Project Overview

SpendWise is a simple budgeting dashboard designed to help users understand their finances. Users can enter their total budget and expenses, calculate their remaining balance, and determine whether they are within or over their budget.

The project uses HTML for structure, CSS for styling, and JavaScript for data processing and calculations.

## 2. JavaScript Concepts Implemented

The project demonstrates the following JavaScript concepts:

- Variables using `let` and `const`.
- Data types, including strings, numbers, and booleans.
- User input using `prompt()`.
- Type conversion using `Number()`.
- Arithmetic operations using subtraction.
- Reusable functions.
- Conditional statements using `if`, `else if`, and `else`.
- Console output using `console.log()` and `console.error()`.
- DOM manipulation using `getElementById()` and `textContent`.
- Event handling using `addEventListener()`.

## 3. How Variables Are Used

The `budget` variable stores the total budget entered by the user. The `expenses` variable stores the total expenses.

The `remainingBalance` variable stores the difference between the budget and expenses. The `hasBudgetData` variable tracks whether valid budget information has been entered.

The project uses `let` for variables whose values change and `const` for references that are not reassigned.

## 4. How User Input Is Collected

The application uses JavaScript's `prompt()` function to ask users for their total budget and expenses.

The `Number()` function converts the input from text into numeric values. The application checks that the values are valid and non-negative before performing calculations.

## 5. How Calculations Are Performed

The application subtracts total expenses from the total budget to calculate the remaining balance.

Formula:

Remaining Balance = Total Budget - Total Expenses

For example:

- Total Budget: KSh 50,000
- Total Expenses: KSh 15,000
- Remaining Balance: KSh 35,000

If expenses exceed the budget, the application reports that the user is over budget.

## 6. How Functions Organize the Code

The `calculateBalance()` function calculates and returns the remaining balance.

The `formatCurrency()` function formats amounts in Kenyan shillings.

The `displayResults()` function updates the dashboard, while `displayConsoleReport()` prints a clearly labeled budget report in the browser console.

The `collectBudgetInformation()` function collects, validates, and processes user input.

These functions make the code reusable, organized, and easier to maintain.

## 7. How to Run the Project

1. Clone or download the GitHub repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a web browser, preferably using Live Server.
4. Click "Enter Budget Information".
5. Enter a budget and total expenses.
6. View the calculated results on the dashboard.
7. Open the browser developer tools and select Console to inspect the report.

## 8. Testing

The project can be tested using the following examples:

| Budget | Expenses | Expected Balance |
|---:|---:|---:|
| 50000 | 15000 | 35000 |
| 20000 | 20000 | 0 |
| 10000 | 12000 | -2000 |

## 9. Technologies Used

- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- Git
- GitHub

## 10. Conclusion

SpendWise demonstrates the JavaScript foundations of a budgeting application by collecting user input, storing data, performing calculations, using reusable functions, and displaying results in the browser.
