// target all the elements needed
const principal_field = document.querySelector('.principal')
const time_field = document.querySelector('.time')
const calc_btn = document.querySelector('.calc-btn')
const calc_reset = document.querySelector('.reset-btn')
const interest_value = document.querySelector('.interest-value')
const amount_value = document.querySelector('.amount-value')

const rate = 0.05


// add event listener to the calc btn
calc_btn.addEventListener('click', function(){

    let principalValue = Number(principal_field.value)
    let timeValue = Number(time_field.value)
    
   if(principalValue > 1000000){
             alert("Sorry! You have exceeded the maximum amount you can borrow from us")
   }else{
          if(timeValue > 24){
               alert("Sorry, the maximum duration to payback is 24 months")
          } else{
                 let interest = (  principalValue  * timeValue * rate) / 12

                interest_value.innerHTML = interest.toFixed(2)
                let totalAmount = interest + principalValue
                amount_value.innerHTML = totalAmount.toFixed(2)
          }  
   }
})

// add event listener to the reset btn
calc_reset.addEventListener('click', function(){
           let principalValue = Number(principal_field.value)
          let timeValue = Number(time_field.value)
         principalValue = '';
          timeValue = ''
          interest_value.innerHTML = 0.00
          amount_value.innerHTML = 0.00

})