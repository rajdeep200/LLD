import { Employee } from "./Employee";

export class Intern implements Employee {
    getSalary(baseSalary: number): number {
        return baseSalary * 0.3;
    }
}

export class FullTimeEmployee implements Employee {
    getSalary(baseSalary: number): number {
        return baseSalary + baseSalary * 0.3 - 1000;
    }
}

export class ContractualEmployee implements Employee {
    getSalary(baseSalary: number): number {
        return baseSalary;
    }
}