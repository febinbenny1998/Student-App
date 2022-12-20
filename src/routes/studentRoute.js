const router=require("express").Router()
const handler=require("../handlers/studentHandler")

router.post("/addstudent",handler.createNewStudent)
router.get("/getstudentdetails",handler.listStudentDetails)
router.put("/deletestudent",handler.deleteStudentDetail)

router.post("/updatestudentdetails",handler.updateStudentDetails)
router.post("/getindividualdetails",handler.individualUserDetails)
module.exports=router