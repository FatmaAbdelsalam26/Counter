const counterValue =document.querySelector('#counter');
const incrementBtn = document.querySelector('.increase');
const decrementBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
//const btns=document.querySelectorAll('.btn');
let count = 0 ;
incrementBtn.addEventListener('click',() =>{
    count++;
    counterValue.innerHTML = count;
});
decrementBtn.addEventListener('click',() =>{
    count--;
    counterValue.innerHTML = count;
});
resetBtn.addEventListener('click',() =>{
    count = 0;
    counterValue.innerHTML = count;
});

/*
btns.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        const styles = e.currentTarget.classList
         if(styles.contains('increase')){
            count++;
         }
         else if(styles.contains('decrease')){
            count--
         }
         else{
            count = 0;
         }
         counter.textContent = count;
    })
});*/
// 
/*
btns.forEach((btn)=>{
    btn.addEventListener('click',(e) => {
        const styles =e.currentTarget.classList();

        if(styles.contains('increase')){
            count++;
        }
        else if(styles.contains('decrease')){
            count--;
        }
        else{
            count=0;
        }
        counter.textContent = count;
    })
})*/