#!/usr/bin/env node

/**
 * CLI Calculator - Basic Arithmetic Operations
 * 
 * Supported operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 * - Modulo (%)
 * - Exponentiation / Power (^)
 * - Square root (sqrt)
 * 
 * Usage:
 *   node calculator.js add 5 3          # Addition: 5 + 3 = 8
 *   node calculator.js subtract 10 2    # Subtraction: 10 - 2 = 8
 *   node calculator.js multiply 4 5     # Multiplication: 4 × 5 = 20
 *   node calculator.js divide 20 4      # Division: 20 ÷ 4 = 5
 *   node calculator.js mod 10 3         # Modulo: 10 % 3 = 1
 *   node calculator.js pow 2 8         # Power: 2 ^ 8 = 256
 *   node calculator.js sqrt 9          # Square root: sqrt(9) = 3
 *   node calculator.js --help           # Show help message
 */

// Helper function to display usage information
function showHelp() {
  console.log(`
CLI Calculator - Basic Arithmetic Operations

Usage: node calculator.js <operation> <number1> [number2]

Operations:
  add                 Addition (num1 + num2)
  subtract            Subtraction (num1 - num2)
  multiply            Multiplication (num1 × num2)
  divide              Division (num1 ÷ num2)
  mod                 Modulo (num1 % num2)
  pow                 Exponentiation / Power (base ^ exponent)
  sqrt                Square root (sqrt(n))
  --help              Display this help message

Examples:
  node calculator.js add 2 3              # Result: 5
  node calculator.js subtract 5 2         # Result: 3
  node calculator.js multiply 4 3         # Result: 12
  node calculator.js divide 10 2          # Result: 5
  node calculator.js mod 10 3             # Result: 1
  node calculator.js pow 2 8              # Result: 256
  node calculator.js sqrt 9               # Result: 3
  `);
}

// Addition operation
function add(num1, num2) {
  return num1 + num2;
}

// Subtraction operation
function subtract(num1, num2) {
  return num1 - num2;
}

// Multiplication operation
function multiply(num1, num2) {
  return num1 * num2;
}

// Division operation with zero-check
function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return num1 / num2;
}

// Modulo operation with zero-check
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

// Exponentiation / power operation
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root with negative-number error handling
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot compute square root of negative number');
  }
  return Math.sqrt(n);
}

// Export functions for testing
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot
};

// Main calculator logic
function calculator(args) {
  // Handle no arguments or help flag
  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    showHelp();
    process.exit(0);
  }

  const operation = (args[0] || '').toLowerCase();

  // Require at least one numeric argument (some operations need two)
  if (args.length < 2) {
    console.error('Error: Missing arguments. Expected at least <operation> <number1>');
    console.error('Use --help for usage information');
    process.exit(1);
  }

  const num1 = parseFloat(args[1]);
  const num2 = args.length > 2 ? parseFloat(args[2]) : undefined;

  // Validate numeric inputs
  if (operation === 'sqrt' || operation === 'sqr') {
    if (isNaN(num1)) {
      console.error('Error: Invalid numeric input. Argument must be a valid number');
      process.exit(1);
    }
  } else {
    if (isNaN(num1) || isNaN(num2)) {
      console.error('Error: Invalid numeric input. Both arguments must be valid numbers');
      process.exit(1);
    }
  }

  let result;

  try {
    switch (operation) {
      case 'add':
      case '+':
        result = add(num1, num2);
        break;
      case 'subtract':
      case '-':
        result = subtract(num1, num2);
        break;
      case 'multiply':
      case '*':
      case 'x':
        result = multiply(num1, num2);
        break;
      case 'divide':
      case '/':
        result = divide(num1, num2);
        break;
      case 'mod':
      case '%':
      case 'modulo':
        result = modulo(num1, num2);
        break;
      case 'pow':
      case '^':
      case 'power':
        result = power(num1, num2);
        break;
      case 'sqrt':
      case 'sqr':
        result = squareRoot(num1);
        break;
      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.error('Use --help for list of valid operations');
        process.exit(1);
    }

    // Display the result
    console.log(result);
    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Run the calculator with command-line arguments only when run directly
if (require.main === module) {
  calculator(process.argv.slice(2));
}
