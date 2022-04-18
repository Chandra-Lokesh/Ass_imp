function change()
{
    const burger=document.querySelector(".burger");
    const dropmenu=document.querySelector("nav ul");
    const menuitems=document.querySelectorAll("nav ul li a");
    burger.addEventListener("click",()=>{
        dropmenu.classList.toggle("activate1");
        menuitems.forEach((link,index)=>{
            menuitems[index].classList.toggle("activate2");
        })
    });
}
change();