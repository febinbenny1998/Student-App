const { v4: uuidv4 } = require('uuid');

module.exports.listStudentQuery=()=>{
    return "SELECT * FROM Student;"
}

module.exports.deleteStudentQuery=(data)=>{
    return `DELETE FROM Student WHERE id="${data.id}";`
}

module.exports.addStudentQuery=(data)=>{
    let uniqueId=uuidv4()
    console.log(uniqueId)
    return `INSERT INTO Student (id,name,passingYear,branch) VALUES ("${uniqueId}","${data.name}","${data.passingYear}","${data.branch}");`
}

module.exports.updateStudentQuery=(data)=>{
    return `UPDATE Student SET grade="${data.grade}" WHERE id="${data.id}";`
}

module.exports.individualDetails=(data)=>{
        return `SELECT * FROM Student WHERE id="${data.id}";`
}
