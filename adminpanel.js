 //user name
 let user_name = localStorage.getItem("username")
 head.innerHTML = `<i class="fa-regular fa-user "></i>Welcome ${user_name}`
 function addEmp(){

     //getting all data
     let Emp_ID = document.getElementById('id').value
     let Emp_Name = document.getElementById('name').value
     let Emp_Add = document.getElementById('address').value
     let Emp_Desig = document.getElementById('desig').value
     let Emp_Exp = document.getElementById('exp').value
     let Emp_Salary = document.getElementById('salary').value

     if( Emp_ID == ''|| Emp_Name == '' || Emp_Add == '' || Emp_Desig == '' || Emp_Exp == '' || Emp_Salary == ''){
         alert('Please Fill all the Fields')
     }else{
         let empData = {
             Employee_Id : Emp_ID,
             Employee_Name : Emp_Name,
             Employee_Add : Emp_Add,
             Employee_Des : Emp_Desig,
             Employee_Exp : Emp_Exp,
             Employee_Sal : Emp_Salary
         }
         // console.log(empData)
         window.localStorage.setItem("EmployeeData",JSON.stringify(empData))
         alert("Employee Details added successfully.")


     }
 }


 //search function

 function search(){
     const result = document.getElementById('search-result')
     result.innerHTML = ''
     let searchBar = document.getElementById('searchBar').value
     let empdata = JSON.parse(localStorage.getItem('EmployeeData'))

     // console.log(empdata)
     if(searchBar == ""){
         alert("Enter Employee Id.")
     }else if(searchBar == empdata.Employee_Id){

         result.innerHTML = `
         <div class="container  mt-1  rounded" style="background-color: rgba(0, 0, 0, 0.295);>
 <h4 class="text-center text-white p-3">Employee Details</h4>
 <ul type="none" class="form-control my-2">
     <li class="form-control my-2">ID : ${empdata.Employee_Id}</li>    
     <li class="form-control my-2">Name : ${empdata.Employee_Name}</li>    
     <li class="form-control my-2">Address : ${empdata.Employee_Add}</li>    
     <li class="form-control my-2">Designation : ${empdata.Employee_Des}</li>    
     <li class="form-control my-2">Experience : ${empdata.Employee_Exp}</li>    
     <li class="form-control my-2">Salary : ${empdata.Employee_Sal}</li>    
 </ul>
 </div>
         `
     }else{
         alert("No employee found")
     }

 }

 function logout(){
     localStorage.clear()
     window.location = './index.html'
 }

