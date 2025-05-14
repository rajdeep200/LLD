import { Employee } from "./Employee";

export class SalaryCalculator {
  constructor(private strategy: Employee) {}

  setStrategy(strategy: Employee) {
    this.strategy = strategy;
  }

  calculateSalary(baseSalary: number):number {
    return this.strategy.getSalary(baseSalary);
  }
}
