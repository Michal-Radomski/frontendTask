const openModal=document.querySelector("#open-modal"),modal=document.querySelector(".modal"),closeModal=document.querySelector(".close-modal"),resetButton=document.querySelector(".button-reset"),spanCounter=document.querySelector("#spanCounter"),counterValueFromLocalStorage=localStorage.getItem("Counter");let counter=counterValueFromLocalStorage?Number(counterValueFromLocalStorage):0;spanCounter.innerText=counter+" times",resetButton.style.visibility="hidden",openModal.onclick=()=>{modal.style.display="block",counter+=1,spanCounter.innerText=counter+" times",6<=counter?resetButton.style.visibility="visible":resetButton.style.visibility="hidden",localStorage.setItem("Counter",counter)},closeModal.onclick=()=>{modal.style.display="none"},window.onclick=e=>{e.target===modal&&(modal.style.display="none")},document.addEventListener("keydown",function(e){"Escape"===e.key&&(modal.style.display="none")});const resetCounter=()=>{counter=0,spanCounter.innerText=counter+" times",resetButton.style.visibility="hidden",localStorage.setItem("Counter",counter),setTimeout(function(){modal.style.display="none"},500)};resetButton.addEventListener("click",resetCounter);