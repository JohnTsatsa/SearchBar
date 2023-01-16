const search=document.querySelector(".search")
const btn=document.querySelector(".btn")
const input=document.querySelector(".input")

btn.addEventListener("click",function() {
	search.classList.toggle("active")  // add and remove class "active"
	input.focus()  // go to search bar and make it ready to type
})