// mobile nav toggle
const toggle=document.querySelector('.nav-toggle');
const links=document.querySelector('.nav-links');
if(toggle&&links){
  toggle.addEventListener('click',()=>links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
}
// scroll reveal
const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
