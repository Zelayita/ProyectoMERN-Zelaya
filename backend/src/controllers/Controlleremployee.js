const employeeController = {};

import employeeModel from '../models/employees.js'

//Select
employeeController.getEmployees = async (req,res) => {
    const employees = await employeeModel.find();
    res.json(employees)
}

//Insert
employeeController.insertEmployees = async (req,res) => {
    const{ name, lastname, salary, DUI, phone, email, password, idBranches} = req.body;
    const newEmployee = new employeeModel({
        name, lastname, salary, DUI, phone, email, password, idBranches
    });
    await newEmployee.save()

    res.json({message: "Employee Saved"})
}

//Delete
employeeController.deleteEmployee = async (req,res) => {
    await employeeModel.findByIdAndDelete(req.params.id)
    res.json({message: "Employee Deleted"})
}


//Updated
employeeController.updateEmployee = async (req,res) => {
    const{name, lastname, salary, DUI, phone, email, password, idBranches} = req.body;

    await employeeModel.findByIdAndUpdate(req.params.id, {
        name, lastname, salary, DUI, phone, email, password, idBranches
    }, {new: true})

    res.json({message: "Employee Updated"})
}

export default employeeController;