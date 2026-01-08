/* ========================= script.js ========================= */
document.addEventListener('DOMContentLoaded',()=>{
if(!localStorage.getItem('ageVerified')){
document.getElementById('agegate').style.display='flex'
}
document.getElementById('enterSite')?.addEventListener('click',()=>{
localStorage.setItem('ageVerified','true')
document.getElementById('agegate').style.display='none'
})
const faders=document.querySelectorAll('.fade')
const io=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})
},{threshold:.2})
faders.forEach(f=>io.observe(f))
const lb=document.getElementById('lightbox')
document.querySelectorAll('.gallery img').forEach(img=>{
img.addEventListener('click',()=>{lb.querySelector('img').src=img.src;lb.style.display='flex'})
})
lb?.addEventListener('click',()=>lb.style.display='none')
})
