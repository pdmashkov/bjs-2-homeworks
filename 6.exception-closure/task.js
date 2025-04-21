﻿function parseCount(value) {
    const parsed = Number.parseFloat(value);

    if (Number.isNaN(parsed)) {
        throw new Error("Невалидное значение");
    }

    return parsed;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const p = this.perimeter / 2;
        const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))

        return Number(s.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },

            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}