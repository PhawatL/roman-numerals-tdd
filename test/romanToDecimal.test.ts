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
    describe("additive cases", () => {
        it("should convert II to 2", () => {
            expect(romanToDecimal("II")).toBe(2);
        });
        it("should convert VII to 7", () => {
            expect(romanToDecimal("VII")).toBe(7);
        });

        it("should convert XV to 15", () => {
            expect(romanToDecimal("XV")).toBe(15);
        });

        it("should convert LX to 60", () => {
            expect(romanToDecimal("LX")).toBe(60);
        });

        it("should convert CL to 150", () => {
            expect(romanToDecimal("CL")).toBe(150);
        });

        it("should convert DC to 600", () => {
            expect(romanToDecimal("DC")).toBe(600);
        });

        it("should convert MM to 2000", () => {
            expect(romanToDecimal("MM")).toBe(2000);
        });
    });

    describe("subtractive cases", () => {
        it("should convert IV to 4", () => {
            expect(romanToDecimal("IV")).toBe(4);
        });

        it("should convert IX to 9", () => {
            expect(romanToDecimal("IX")).toBe(9);
        });

        it("should convert XL to 40", () => {
            expect(romanToDecimal("XL")).toBe(40);
        });

        it("should convert XC to 90", () => {
            expect(romanToDecimal("XC")).toBe(90);
        });

        it("should convert CD to 400", () => {
            expect(romanToDecimal("CD")).toBe(400);
        });

        it("should convert CM to 900", () => {
            expect(romanToDecimal("CM")).toBe(900);
        });

    });

    describe("complex cases", () => {
        it("should convert MCMXLIV to 1944", () => {
            expect(romanToDecimal("MCMXLIV")).toBe(1944);
        });
        it("should convert MMXXVI to 2026", () => {
            expect(romanToDecimal("MMXXVI")).toBe(2026);
        });
        it("should convert LXIX to 69", () => {
            expect(romanToDecimal("LXIX")).toBe(69);
        });

    });
});
