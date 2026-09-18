document.addEventListener("DOMContentLoaded",function(){
const root=document.documentElement;
const body=document.body;
const siteHeader=document.getElementById("site-header");
const mobileMenuToggle=document.getElementById("mobile-menu-toggle");
const mainNavigation=document.getElementById("main-navigation");
const homeDropdownToggle=document.getElementById("home-dropdown-toggle");
const homeDropdown=document.getElementById("home-dropdown");
const themeToggle=document.getElementById("theme-toggle");
const rtlToggle=document.getElementById("rtl-toggle");
const backToTop=document.getElementById("back-to-top");
const mobileMenuIcon=mobileMenuToggle?mobileMenuToggle.querySelector("i"):null;
const themeIcon=themeToggle?themeToggle.querySelector("i"):null;
// const rtlIcon=rtlToggle?rtlToggle.querySelector("i"):null;
function updateThemeIcon(){
if(!themeIcon)return;
const isDark=root.getAttribute("data-theme")==="dark";
themeIcon.className=isDark?"bi bi-sun-fill":"bi bi-moon-stars-fill";
themeToggle.setAttribute("aria-label",isDark?"Switch to light mode":"Switch to dark mode");
themeToggle.setAttribute("title",isDark?"Light mode":"Dark mode");
}
// function updateRtlIcon(){
// if(!rtlIcon)return;
// const isRtl=root.getAttribute("dir")==="rtl";
// rtlIcon.className=isRtl?"bi bi-text-left":"bi bi-text-right";
// rtlToggle.setAttribute("aria-label",isRtl?"Switch to LTR layout":"Switch to RTL layout");
// rtlToggle.setAttribute("title",isRtl?"LTR":"RTL");
// }
function updateRtlButton(){
if(!rtlToggle)return;
const isRtl=root.getAttribute("dir")==="rtl";
rtlToggle.textContent=isRtl?"LTR":"RTL";
rtlToggle.setAttribute("aria-label",isRtl?"Switch to LTR layout":"Switch to RTL layout");
rtlToggle.setAttribute("title",isRtl?"LTR":"RTL");
}
function loadPreferences(){
const savedTheme=localStorage.getItem("bakers-corner-theme");
const savedDirection=localStorage.getItem("bakers-corner-direction");
if(savedTheme==="dark"){
root.setAttribute("data-theme","dark");
}
if(savedDirection==="rtl"){
root.setAttribute("dir","rtl");
}
// updateThemeIcon();
// updateRtlIcon();
updateThemeIcon();
updateRtlButton();
}
function closeHomeDropdown(){
if(!homeDropdownToggle||!homeDropdown)return;
homeDropdownToggle.setAttribute("aria-expanded","false");
homeDropdown.classList.remove("is-open");
}
function closeMobileMenu(){
if(!mobileMenuToggle||!mainNavigation)return;
mobileMenuToggle.setAttribute("aria-expanded","false");
mainNavigation.classList.remove("is-open");
if(mobileMenuIcon){
mobileMenuIcon.className="bi bi-list";
}
closeHomeDropdown();
}
function openMobileMenu(){
if(!mobileMenuToggle||!mainNavigation)return;
mobileMenuToggle.setAttribute("aria-expanded","true");
mainNavigation.classList.add("is-open");
if(mobileMenuIcon){
mobileMenuIcon.className="bi bi-x-lg";
}
}
if(mobileMenuToggle&&mainNavigation){
mobileMenuToggle.addEventListener("click",function(){
const isOpen=mainNavigation.classList.contains("is-open");
if(isOpen){
closeMobileMenu();
}else{
openMobileMenu();
}
});
}
if(homeDropdownToggle&&homeDropdown){
homeDropdownToggle.addEventListener("click",function(event){
event.stopPropagation();
const isOpen=homeDropdown.classList.contains("is-open");
if(isOpen){
closeHomeDropdown();
}else{
homeDropdownToggle.setAttribute("aria-expanded","true");
homeDropdown.classList.add("is-open");
}
});
}
document.addEventListener("click",function(event){
if(homeDropdown&&homeDropdownToggle&&!homeDropdown.contains(event.target)&&!homeDropdownToggle.contains(event.target)){
closeHomeDropdown();
}
});
if(mainNavigation){
    mainNavigation.querySelectorAll("a").forEach(function(link){
        link.addEventListener("click",function(){
            if(window.innerWidth <= 1024){
                closeMobileMenu();
            }
        });
    });
}
window.addEventListener("resize",function(){
if(window.innerWidth > 1024){
if(mainNavigation){
mainNavigation.classList.remove("is-open");
}
if(mobileMenuToggle){
mobileMenuToggle.setAttribute("aria-expanded","false");
}
if(mobileMenuIcon){
mobileMenuIcon.className="bi bi-list";
}
}
});
if(themeToggle){
themeToggle.addEventListener("click",function(){
const isDark=root.getAttribute("data-theme")==="dark";
if(isDark){
root.removeAttribute("data-theme");
localStorage.setItem("bakers-corner-theme","light");
}else{
root.setAttribute("data-theme","dark");
localStorage.setItem("bakers-corner-theme","dark");
}
updateThemeIcon();
});
}
// if(rtlToggle){
// rtlToggle.addEventListener("click",function(){
// const isRtl=root.getAttribute("dir")==="rtl";
// if(isRtl){
// root.setAttribute("dir","ltr");
// localStorage.setItem("bakers-corner-direction","ltr");
// }else{
// root.setAttribute("dir","rtl");
// localStorage.setItem("bakers-corner-direction","rtl");
// }
// updateRtlIcon();
// });
// }
if(rtlToggle){
rtlToggle.addEventListener("click",function(){
const isRtl=root.getAttribute("dir")==="rtl";
if(isRtl){
root.setAttribute("dir","ltr");
localStorage.setItem("bakers-corner-direction","ltr");
}else{
root.setAttribute("dir","rtl");
localStorage.setItem("bakers-corner-direction","rtl");
}
updateRtlButton();
});
}
function handleScroll(){
const scrollPosition=window.scrollY;
if(siteHeader){
siteHeader.classList.toggle("is-scrolled",scrollPosition>10);
}
if(backToTop){
backToTop.classList.toggle("is-visible",scrollPosition>400);
}
}
window.addEventListener("scroll",handleScroll,{passive:true});
handleScroll();
if(backToTop){
backToTop.addEventListener("click",function(){
window.scrollTo({
top:0,
behavior:"smooth"
});
});
}
const revealElements=document.querySelectorAll(".reveal-on-scroll");
if("IntersectionObserver" in window&&revealElements.length){
const revealObserver=new IntersectionObserver(function(entries,observer){
entries.forEach(function(entry){
if(entry.isIntersecting){
entry.target.classList.add("is-visible");
observer.unobserve(entry.target);
}
});
},{threshold:.15});
revealElements.forEach(function(element){
revealObserver.observe(element);
});
}else{
revealElements.forEach(function(element){
element.classList.add("is-visible");
});
}
loadPreferences();
});

document.addEventListener("DOMContentLoaded",function(){
const revealElements=document.querySelectorAll(".reveal");
if(!("IntersectionObserver" in window)){
revealElements.forEach(function(element){
element.classList.add("is-visible");
});
return;
}
const revealObserver=new IntersectionObserver(function(entries,observer){
entries.forEach(function(entry){
if(entry.isIntersecting){
entry.target.classList.add("is-visible");
observer.unobserve(entry.target);
}
});
},{threshold:.12});
revealElements.forEach(function(element){
revealObserver.observe(element);
});
});
document.addEventListener("DOMContentLoaded",function(){
lucide.createIcons();
});
/* =========================================================
   MOBILE MENU
========================================================= */

// const mobileMenuToggle =
//     document.querySelector(".mobile-menu-toggle");

// const mobileNavigation =
//     document.querySelector(".mobile-navigation");


// if (mobileMenuToggle && mobileNavigation) {

//     mobileMenuToggle.addEventListener("click", function () {

//         mobileNavigation.classList.toggle("active");

//         const isOpen =
//             mobileNavigation.classList.contains("active");

//         mobileMenuToggle.setAttribute(
//             "aria-expanded",
//             isOpen
//         );
        

//         const icon =
//             mobileMenuToggle.querySelector("svg");

//         if (icon) {
//             icon.setAttribute(
//                 "data-lucide",
//                 isOpen ? "x" : "menu"
//             );

//             if (typeof lucide !== "undefined") {
//                 lucide.createIcons();
//             }
//         }

//     });

// }
