var question=document.querySelectorAll(".ques");
console.log(question);


question.forEach(function(e){
    console.log(e);
    e.addEventListener("click",function(){
        if(e.nextElementSibling.classList.contains("tip")){
          e.nextElementSibling.classList.remove("tip");
         
                      
        }


        else{
            e.nextElementSibling.classList.add("tip");

           
                      
           
        }


    })
})