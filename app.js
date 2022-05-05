(function () {
    let screen  = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let equal = document.querySelector("#equal");
    let clear = document.querySelector("#clear");

    buttons.forEach(elem => {
        elem.addEventListener("click", (e)=>{
           let value = e.target.dataset.num;
           screen.value += value;
        })
    });

    equal.addEventListener("click", (e)=>{
        if (screen.value === '') {
            screen.value = "Please Enter";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
 
    clear.addEventListener("click",()=>{
        screen.value = "";
    } )

})();