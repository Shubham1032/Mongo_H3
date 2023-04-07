const {Information} = require('../models/Models');
const eData = require('../EmployeeData/eData');

const employeeEnrollmen = async(req,res)=>{
    try {
        const result = await Information.insertMany(eData);
        res.send(result)
    } catch (error) {
        console.log(error.message)
        res.send("Error in Controller file") 
    }
}
const getAlldata = async (req,res)=>{
    try {
        const result = await Information.find();
        res.send(result);
    } catch (error) {
        console.log(error)
    }
}
const dataBySalary = async(req,res)=>{
    try {
        const result = await Information.find({salary:{$gt:30000}})
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}
const dataByExp = async (req,res)=>{
    try {
        const result = await Information.find({overallExp:{$gte:2}})
        res.send(result)
        
    } catch (error) {
        console.log(error.message)
    }
}
const dataByYearGrad = async (req,res)=>{
    try {
        const result = await Information.find({yearGrad:{$gt:2015},overallExp:{$gt:1}});
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
}
const updateDatabySalary = async (req,res)=>{
    const result = await Information.updateOne({department:'HR'},{$set:{salary:'65000'}})

    res.send(result)
}
const deleteEmpCompanyY = async (req,res)=>{
    const result = await Information.deleteMany({lastCompany:{$eq:'Y'}})
    res.send(result)
}
module.exports= {dataByYearGrad,employeeEnrollmen,getAlldata,dataByExp,dataBySalary,updateDatabySalary,deleteEmpCompanyY}