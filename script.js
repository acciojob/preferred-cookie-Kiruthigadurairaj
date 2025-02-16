let saveInput = document.querySelector('input[type="submit"]')
saveInput.addEventListener("click",()=>{
	let fontSize = document.querySelector('#fontsize').value
	let fontColor = document.querySelector('input[type="color"]').value
	// console.log(fontSize,fontColor) 
	document.cookie = "fontColor="+fontColor+"; expires= Fri, 25 June 2023 12:00:00 UTC; path=/";
	document.cookie = "fontSize="+fontSize+"; expires= Fri, 25 June 2023 12:00:00 UTC; path=/";
	}) 
function showCookieValue(){
document.querySelector('#fontsize').value = getCookie("fontSize")
	document.querySelector('input[type="color"]').value = getCookie("fontColor")
}
function getCookie(key){
	return  document.cookie.split("; ")
	 .find((row) => row.startsWith(key)).split("=")[1]
} 