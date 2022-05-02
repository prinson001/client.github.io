var navbar = document.querySelector(".wrappers");
var sidebar = document.querySelector(".links");
window.onscroll = function()
{
  if(window.pageYOffset > 2)
  {
    navbar.classList.add("sticky");
    sidebar.style.top="60px";
  }
  else
  {
    navbar.classList.remove("sticky");
    sidebar.style.top="73px";
  }
};

const dropdown = document.querySelector(".category_main");
const arrow = document.querySelector(".dropdown");
var exit = false;
dropdown.addEventListener('click',()=>
{
   
    if(!exit)
    {
        const wrapper =document.querySelector(".wrapper");
        wrapper.style.height="560px";
        arrow.style.transform="rotate(180deg)";
        exit=true;
    }
    else
    {
        const wrapper =document.querySelector(".wrapper");
        wrapper.style.height="0px";
        arrow.style.transform="rotate(0deg)";
        exit=false; 
    }
});