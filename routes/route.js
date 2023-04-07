const route = require('express').Router();
const employeeControllers = require('../controller/studentController')

route.post("/addData",employeeControllers.employeeEnrollmen)
route.get("/allData",employeeControllers.getAlldata)
route.get("/dataBySalary",employeeControllers.dataBySalary)
route.get("/dataByExp",employeeControllers.dataByExp)
route.get("/dataByYearGrad",employeeControllers.dataByYearGrad)
route.put("/updateSalary",employeeControllers.updateDatabySalary)
route.delete("/employeeData",employeeControllers.deleteEmpCompanyY)


module.exports = route;
