 //user name
 let user_name = localStorage.getItem("username")
 head.innerHTML = `<i class="fa-regular fa-user "></i>Welcome ${user_name}`
 function addEmp(){


    const employee = {
        id:empid.value,
        name:empname.value,
        address:empaddress.value,
        designation:empdesig.value,
        experience:empexp.value,
        salary:empsalary.value,

    }
 
    if(employee.id==''||employee.name==''||employee.address==''|| employee.designation==''||employee.experience==''||employee.salary==''){
        alert('enter all fields')
    }else{

        if(employee.id in localStorage){
            alert('Employee already exist')
        }else{
            
            window.localStorage.setItem(employee.id,JSON.stringify(employee))
            alert("Employee Details added successfully.")
   
   
        }
    }
 }


 //search function

 function search(){
    const key = emp.value
    if(key in localStorage){
        employee = JSON.parse(localStorage.getItem(key))
        console.log(employee)
        result.innerHTML =  `
        <div class="card w-100 mt-2" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Employee Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Employee Id : ${employee.id}</li>
    <li class="list-group-item">Employee Name : ${employee.name}</li>
    <li class="list-group-item">Employee Address : ${employee.address}</li>
    <li class="list-group-item">Employee Designation : ${employee.designation}</li>
    <li class="list-group-item">Employee Experience : ${employee.experience}</li>
    <li class="list-group-item">Employee Salary : ${employee.salary}</li>
  </ul>
  
</div>
`
    }else{
        result.innerHTML = `
        <div class="text-center p-2">
        <h4 class="text-black"><i class="fa-solid fa-circle-xmark m-2" style="color: #ff0000;"></i>ID dosn't exist</h4>
        <img src="./notfound.jpg" alt="" class="img-fluid" style="width: 60%; height: 20%;">
    </div>    
        `
    }

 }

 function logout(){
     localStorage.clear()
     window.location = './index.html'
 }

