    let network = document.querySelector('#networkSelect');
    let price = document.querySelector('#prices');


    let pinInp = document.getElementById("pinInp")
    let cardPin = []
    let rechargePin = ''
    // let printRef = ''

    // let today = new Date ()
    // let dd = today.getDate()
    // let mm = today.getMonth()
    // let yy = today.getFullYear();






     let tokenBox = document.querySelector('#tokenBox');





   
   
     function getRandom() {
        let rechargePin = ''
        for (let index = 0; index < 11; index++) {
            rechargePin+= Math.floor(Math.random() * 10)
        }
      
        return rechargePin ;
       
     }
     console.log(getRandom())
   
  

   

    function generate(){
      

        if(network.value === 'MTN' || price.value === ['1000', '500', '200', '100','50']){
            pinInp.value = getRandom()
            printRef = `*555*${pinInp.value}#` 
        }
        else if(network.value === 'AIRTEL' || price.value === ['1000', '500', '200', '100','50']){
            pinInp.value = getRandom()
            printRef = `*222*${pinInp.value}#` 
        }
        else if(network.value === 'GLO' || price.value === ['1000', '500', '200', '100','50']){
            pinInp.value = getRandom()
            printRef = `*127*${pinInp.value}# `
        }
        else if(network.value === '9MOBILE' || price.value === ['1000', '500', '200', '100','50']){
            pinInp.value = getRandom()
            printRef = `*123*${pinInp.value}#` 
        }

        // console.log(generate())

      
   
    }


    let usersArr = []  || JSON.parse(localStorage.getItem('List of users'))
        function save(){
            obj = {
                            serialNo:"",
                            router : network.value,
                            date:new Date(),
                            amount:price.value,
                            pin:pinInp.value,
                            printRef:printRef,
                            status:"saved ",
                            delete:""
        }


        usersArr.push(obj)
        localStorage.setItem("user",JSON.stringify(usersArr))
        displayUsers()
    
    }

    function displayUsers(){
        const history = document.getElementById('history')

        //history has to be cleared before showing
        history.innerHTML = ''
        usersArr.forEach((elem, index) => {
            history.innerHTML += `
            <tr>
                  <td>${index + 1} </td>
                  <td>${elem.router}</td>
                  <td>${elem.date}</td>
                  <td>${elem.amount}</td>
                  <td>${elem.pin}</td>
                  <td>${elem.printRef}</td>
                  <td>${elem.status}</td>
                   
                  <td>  <button  onclick="Del()" style="background-color: red; color: aliceblue;">Delete</button></td>
            </tr>
            
            `
            tokenBox.value = elem.printRef;
        })
    }

    function Del(index){
        usersArr.splice(index, 1)
        localStorage.setItem("user",JSON.stringify(usersArr))

        displayUsers()
    }
    displayUsers()

    // function recharge(){
    //     if( tokenBox.value === elem.printRef){
    //         alert('Recharge successfully')
    //     }else( tokenBox.value != elem.printRef){
    //         alert('You entered an invalid pin')
    //     }
    // }



// console.log(displayHistory)


//  function recharge(){
//      let charged = usersArr.find((e) => e.printRef === tokenBox.value)
//      if(!charged){
//          alert('The pin is invalid' ,false)
//      }
//      if(find.status){
//          alert('The Pinis Used', false)
//          return
//      }

//      let checked = seen;
//      usersArr.forEach(i => {
//          if (tokenBox.value == i.printRef){
            
//          checked = true
//          alert('Recharge successfully', true)
//          usersArr.forEach((i) => {
//              i.status = 'used'
//              displayUsers()
//              checked = true
//              tokenBox.value =  ''
//          })
//          } if (seen){
//              alert('pin already used')
//          }else {
//              alert('Used')
//          }

//      })

//  }

// const body = document.querySelector('#body')
//    function changeBgColor(){
//     body.style.backgroundColor = "purple"
//    };
//    body.addEvenListener('mouseover', changeBgColor)



  

    document.querySelector("#generate").style.backgroundColor = 'blue';
    document.querySelector("#saveBtn").style.backgroundColor = 'deeppink';
    document.querySelector("#rechargeBtn").style.backgroundColor = 'purple';



