import { ContractualEmployee, FullTimeEmployee, Intern } from "./EmployeeClass";
import { SalaryCalculator } from "./SalaryCalculator";

const intern = new Intern()
const fte = new FullTimeEmployee()
const contractual = new ContractualEmployee()

const salaryCalculator = new SalaryCalculator(intern)
console.log("Salary for INTERN :: ",salaryCalculator.calculateSalary(1500))

salaryCalculator.setStrategy(fte)
console.log("Salary for FULL TIME EMPLOYEE :: ",salaryCalculator.calculateSalary(1500))

salaryCalculator.setStrategy(contractual)
console.log("Salary for CONTRACTUAL EMPLOYEE :: ",salaryCalculator.calculateSalary(1500))