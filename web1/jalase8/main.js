    // این یک  زبان برنامه نویسی است یعنی یک مفسر آن را تفسیر کرده و اینکه متغییر دستورات شرطی حلقه  تابع توابع از پیش نوشته شده و کلاس ها در آن تعریف می شود.
    // ECMA Script 2023 - 14th
    // variable
    var i = 1.2
    i = 1
    i = "reza"
    const c = 1
    // c = 2
    let l = 1 

    // یک سری کد هایی می خواهی یک بار تعریف کرده و چندین بار از ها استفاده کنی.
    function hasan(){
      // body
      i = 100
      j = 200
      console.log(i*j+1*i)
    }

    function sum(num1, num2){
      alert(num1 + num2)
    }

    function equal(){
      // DOM document object model
      // object by id
      // method
      // property
      // javascript built-in function parseInt(string ) return integer
      
      input1 = document.getElementById('input1').value  // string
      input1 = parseInt(input1) // cast to integer
      // console.log(input1)
      input2 = document.getElementById('input2').value
      input2 = parseInt(input2)
      // console.log(input2)
      output = document.getElementById('output')
      output.innerHTML = input1 + input2 
    }