import { describe, it, expect } from "bun:test";
import { romanToDecimal } from "../src";

describe("romanToDecimal", () => {
    describe("single numeral cases", () => {
        it("should convert I to 1", () => {
            expect(romanToDecimal("I")).toBe(1);
        });

        it("should convert V to 5", () => {
            expect(romanToDecimal("V")).toBe(5);
        });

        it("should convert X to 10", () => {
            expect(romanToDecimal("X")).toBe(10);
        });

        it("should convert L to 50", () => {
            expect(romanToDecimal("L")).toBe(50);
        });

        it("should convert C to 100", () => {
            expect(romanToDecimal("C")).toBe(100);
        });

        it("should convert D to 500", () => {
            expect(romanToDecimal("D")).toBe(500);
        });

        it("should convert M to 1000", () => {
            expect(romanToDecimal("M")).toBe(1000);
        });
    });
});
