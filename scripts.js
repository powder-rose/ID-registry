
 
 

   let checkForm = () => {
    
    let username = document.getElementById('name').value
    let lastName = document.getElementById('lastName').value 
    let login = document.getElementById('login').value
    let password = document.getElementById('password').value
    let passwordRepeat = document.getElementById('passwordRepeat').value
    let number = document.getElementById('phonenumber').value 
    let result = 'Добро Пожаловать'

    if (username == "") {
      alert('Пожалуйста, введите имя') 
      return false
    } else if (lastName == "") {
       alert('Пожалуйста, введите фамилию')
       return false
    } else if (login == '') {
      alert('Пожалуйста, придумайте логин')
      return false
    } else if (password == "") {
       alert('Пожалуйста, придумайте пароль') 
       return false
    } else if (passwordRepeat == "") {
       alert('Пожалуйста, повторите пароль') 
       return false
    } else if (password != passwordRepeat) {
        alert('Пароли должны совпадать')
        return false
    } else if (number == "") {
       alert('Пожалуйста, введите номер')
       return false
       } else if (number.length != 10 || isInteger(number) == false) {
      alert('Пожалуйста, введите корректный номер')
      return false } 
      
      return true
     
      
      
    }




   


  
   let btn = document.getElementById('submit')
   btn.onclick = checkForm

