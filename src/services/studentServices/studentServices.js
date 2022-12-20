const connection = require("../../client/connection")
const { connect } = require("../../client/connection")
const { listStudentQuery, deleteStudentQuery, addStudentQuery, updateStudentQuery, individualDetails } = require("../../queryBuilder/studentQuery")
const { sqlQuery } = require("../SqlServices/SqlService")


module.exports.listStudentDetails=async()=>{
let queryString=listStudentQuery()
return await sqlQuery(queryString)
}

module.exports.deleteStudentDetails=async(data)=>{
    let queryString=deleteStudentQuery(data)
    return await sqlQuery(queryString)
}

module.exports.createNewStudent=async(data)=>{
let queryString=addStudentQuery(data)
return await sqlQuery(queryString)
}

module.exports.updateStudentDetails=async(data)=>{
    let queryString=updateStudentQuery(data)
    return await sqlQuery(queryString)
    }

module.exports.individualDetail=async(data)=>{
        let queryString=individualDetails(data)
        return await sqlQuery(queryString)
        }

module.exports.adad=()=>{
    let result=new Promise ((resolve,reject)=>{
        connection.query(data,function(result,error){
            resolve(result)
            reject(error)
        }).catch((error)=>{
            console.log(error)
        })
       
    })
}