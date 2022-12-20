const studentService = require("../services/studentServices/studentServices")

module.exports.createNewStudent = async (req, response) => {
    console.log()
    try {
        let result = await studentService.createNewStudent(req.body)
        response.send(result)
    }
    catch (err) {
        console.log(err)
    }
}

module.exports.listStudentDetails = async (request, response) => {
    try {
        let result = await studentService.listStudentDetails()
        console.log("response from database",result)
        response.send(result)
    }
    catch (error) {
        console.log(error)
    }
}


module.exports.deleteStudentDetail = async (request, response) => {
    console.log("enter delete")
    try {
        let result = await studentService.deleteStudentDetails(request.body)
        console.log(result)
        response.send(result)
    }
    catch (error) {
        console.log(error)
    }
}

module.exports.updateStudentDetails = async (request, response) => {
    try {
        let result = await studentService.updateStudentDetails(request.body)
        console.log(request.body)
        response.send(result)
    }
    catch (error) {
        console.log(error)
    }
}

module.exports.individualUserDetails=async(request,response)=>{
    try {
        let result = await studentService.individualDetail(request.body)
        console.log(request.body)
        response.send(result)
    }
    catch (error) {
        console.log(error)
    }
}