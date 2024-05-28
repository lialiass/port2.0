/*Make disappear bootstrap navbar cliking on link/away*/

$('.navbar-nav>li>a,.screen').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});


/**/
document.addEventListener("DOMContentLoaded", ()=>{

/*----------------------------------------------*/
/* hide loader when site available              */
/*----------------------------------------------*/

setTimeout(() => {
  let loader = document.querySelector('#loader');
  let body = document.querySelector('body');
  body.classList.remove('overflow-hidden');
  loader.remove();
}, 2000);

let href_scrolls=document.querySelectorAll("[data-nw-href]")
for(let href_scroll of href_scrolls)
{
  let tempTarget=document.querySelector(href_scroll.getAttribute("data-nw-href"))
  href_scroll.addEventListener("click",()=>{
    tempTarget.scrollIntoView(true)
  })
}
/*-----------------------------------------------*/
/* Animations                                    */
/*-----------------------------------------------*/

//Fade-in-out
let fades = document.querySelectorAll('.fade-in-out');
for(let fade of fades){
  let fadeObserver = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting){
        fade.classList.add('fade-in-out-displayed')
      } else {
        fade.classList.remove('fade-in-out-displayed')
      }
  }, { threshold: 0.25 });

  fadeObserver.observe(fade);
}

//Paralax
/*let parachutist = document.querySelector('#parachutist');

document.addEventListener('scroll', () => {
  let scroll = window.scrollY;

  parachutist.style.left = scroll * 0.5 + 'px';
})*/

/*-----------------------------------------------*/
/*Ici, fonction pour afficher des div avec btn   */
/*les btns ont la classe js_show_btn pour etre interprÃ©tÃ©s
data-nw-id-target attr du btn qui contient l'id de la div ciblÃ©, 
data-nw-classGroup toutes les classes concernÃ©s par cette section de btns (sont toutes effacÃ©es pour afficher que la bonne)
et est utilisÃ© aussi pour la gestion de l'affichage du bouton selectionnÃ© (appartiennent Ã  un groupe)
/*-----------------------------------------------*/
let js_show_btns=document.querySelectorAll(".js_show_btn")

for(let js_show_btn of js_show_btns)
{
  js_show_btn.addEventListener("click", function(){
    
    let idPTarget = js_show_btn.getAttribute("data-nw-id-target")
    let groupBtns=js_show_btn.getAttribute("data-nw-classGroup")
    let PTargets = document.querySelectorAll("."+groupBtns)

    for(let p of PTargets)
    {
      p.classList.add("hidden")
    }

    document.querySelector("#"+idPTarget).classList.remove("hidden")

    let btns=document.querySelectorAll("[data-nw-classGroup='"+groupBtns+"']")

    for(let btn of btns)
    {
      btn.classList.remove('selected_btn')
    }

    js_show_btn.classList.add('selected_btn')

  })
}


/*toggle btn*/


let js_toggle_btns=document.querySelectorAll(".js_toggle_btn")

for(let js_toggle_btn of js_toggle_btns)
{
  js_toggle_btn.addEventListener("click", function(){
    
    let idPTarget = js_toggle_btn.getAttribute("data-nw-id-target")

    document.querySelector("#"+idPTarget).classList.toggle("hidden")
  })
}

/*COMPETENCES*/

//set width bootstrap progress bar
/*let progressBars=document.querySelectorAll('.progress-bar')
for(let progressBar of progressBars)
{
  let width=progressBar.innerText
  progressBar.setAttribute("aria-valuenow",width) //accessibility
  setTimeout(()=>{//declancher au bon moment
    progressBar.style.width=width+"%"
  },2000)		
}*/


let progressContainers=document.querySelectorAll('.progressContainer')


for(let progressContainer of progressContainers)
{
  let progressLabel=progressContainer.querySelector(".progressLabel")
  let progress=progressContainer.querySelector(".progress")

  let progressBar=progressContainer.querySelector('.progress-bar')
  let width=parseInt(progressBar.innerText)
  progressBar.setAttribute("aria-valuenow",width) //accessibility	

  progress.classList.add("noOpacity")

  progressContainer.addEventListener('mouseenter',()=>{
    progressLabel.classList.add('noOpacity')
    progress.classList.remove("noOpacity")

    progressBar.style.width=width+"%"
  })
  progressContainer.addEventListener('mouseleave',()=>{
    progressLabel.classList.remove('noOpacity')
    progress.classList.add("noOpacity")

    progressBar.style.width=0
  })

}


/*CONTACT*/

//set height background send btn
let bgContactBtn=document.querySelector("#bg_contact_sendBtn")
let contactBtn=document.querySelector("#contact_sendBtn")
bgContactBtn.style.height=contactBtn.clientHeight+"px"
bgContactBtn.style.width=contactBtn.clientWidth+"px"

//anim send btn
contactBtn.addEventListener("mouseenter",()=>{
  bgContactBtn.classList.remove("tenDRotated")
})
contactBtn.addEventListener("mouseleave",()=>{
  bgContactBtn.classList.add("tenDRotated")
})

//scroll clicking on gdpr conditions
let gdprBtn=document.querySelector("#gdpr_btn")
gdprBtn.addEventListener("click",()=>{
    gdprBtn.scrollIntoView()
})







})