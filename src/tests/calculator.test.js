const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

/**
 * Comprehensive Unit Tests for Calculator Functions
 * 
 * Test coverage:
 * - Addition operation
 * - Subtraction operation
 * - Multiplication operation
 * - Division operation
 * - Edge cases (division by zero, negative numbers, decimals)
 */

describe('Calculator - Basic Arithmetic Operations', () => {
  
  // ====== ADDITION TESTS ======
  describe('Addition (add)', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add numbers from image example: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    it('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    it('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
    });

    it('should add decimal numbers', () => {
      expect(add(2.5, 3.5)).toBe(6);
    });

    it('should add large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  // ====== SUBTRACTION TESTS ======
  describe('Subtraction (subtract)', () => {
    it('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    it('should subtract numbers from image example: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    it('should handle subtraction resulting in negative number', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    it('should subtract negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    it('should subtract zero from a number', () => {
      expect(subtract(7, 0)).toBe(7);
    });

    it('should subtract decimal numbers', () => {
      expect(subtract(10.5, 3.5)).toBe(7);
    });

    it('should handle subtracting from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });
  });

  // ====== MULTIPLICATION TESTS ======
  describe('Multiplication (multiply)', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    it('should multiply numbers from image example: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    it('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    it('should multiply by one', () => {
      expect(multiply(42, 1)).toBe(42);
    });

    it('should multiply two negative numbers', () => {
      expect(multiply(-4, -5)).toBe(20);
    });

    it('should multiply positive and negative numbers', () => {
      expect(multiply(7, -3)).toBe(-21);
    });

    it('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    it('should multiply large numbers', () => {
      expect(multiply(1000, 2000)).toBe(2000000);
    });
  });

  // ====== DIVISION TESTS ======
  describe('Division (divide)', () => {
    it('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    it('should divide numbers from image example: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });

    it('should divide resulting in decimal', () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    it('should divide by one', () => {
      expect(divide(42, 1)).toBe(42);
    });

    it('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    it('should divide two negative numbers', () => {
      expect(divide(-10, -2)).toBe(5);
    });

    it('should divide positive by negative', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    it('should throw error on division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    it('should throw error with correct message for div by zero', () => {
      expect(() => divide(5, 0)).toThrow(Error);
    });

    it('should handle very small division results', () => {
      expect(divide(1, 1000)).toBe(0.001);
    });
  });

  // ====== COMPREHENSIVE EDGE CASES ======
  describe('Edge Cases and Special Scenarios', () => {
    it('should handle addition with very large numbers', () => {
      expect(add(999999999, 1)).toBe(1000000000);
    });

    it('should handle operations with negative zero', () => {
      expect(add(0, -0)).toBe(0);
    });

    it('should maintain precision with small decimals', () => {
      expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
    });

    it('should handle chained operations correctly', () => {
      // (2 + 3) * 4 - 1 = 19
      const step1 = add(2, 3);        // 5
      const step2 = multiply(step1, 4); // 20
      const step3 = subtract(step2, 1); // 19
      expect(step3).toBe(19);
    });

    it('should verify all operations from image examples', () => {
      expect(add(2, 3)).toBe(5);          // 2 + 3 = 5
      expect(subtract(10, 4)).toBe(6);    // 10 - 4 = 6
      expect(multiply(45, 2)).toBe(90);   // 45 * 2 = 90
      expect(divide(20, 5)).toBe(4);      // 20 / 5 = 4
    });
  });

  // ====== EXTENDED OPERATIONS TESTS ======
  describe('Extended Operations (modulo, power, squareRoot)', () => {
    describe('Modulo (mod)', () => {
      it('should compute 5 % 2 = 1', () => {
        expect(modulo(5, 2)).toBe(1);
      });

      it('should compute 10 % 3 = 1', () => {
        expect(modulo(10, 3)).toBe(1);
      });

      it('should throw error on modulo by zero', () => {
        expect(() => modulo(5, 0)).toThrow('Modulo by zero is not allowed');
      });
    });

    describe('Power (pow)', () => {
      it('should compute 2 ^ 3 = 8', () => {
        expect(power(2, 3)).toBe(8);
      });

      it('should compute 2 ^ 8 = 256', () => {
        expect(power(2, 8)).toBe(256);
      });

      it('should compute negative exponent', () => {
        expect(power(2, -1)).toBe(0.5);
      });

      it('should compute zero exponent', () => {
        expect(power(5, 0)).toBe(1);
      });
    });

    describe('Square Root (sqrt)', () => {
      it('should compute sqrt(16) = 4', () => {
        expect(squareRoot(16)).toBe(4);
      });

      it('should compute sqrt(9) = 3', () => {
        expect(squareRoot(9)).toBe(3);
      });

      it('should throw error for negative input', () => {
        expect(() => squareRoot(-4)).toThrow('Cannot compute square root of negative number');
      });
    });

    it('should verify image examples for extended operations', () => {
      expect(modulo(5,2)).toBe(1);
      expect(power(2,3)).toBe(8);
      expect(squareRoot(16)).toBe(4);
    });
  });
});
