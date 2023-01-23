//menu needed variables
const menuMe = document.getElementById('linkMe')
const meDiv = document.getElementById('about')
const skillDiv = document.getElementById('skills')
const workDiv = document.getElementById('my-work')
const menuWork = document.getElementById('linkWork')
const menuSkill = document.getElementById('linkSkills')
//worksection neede variables
const firstProject = document.getElementById('one')



//adding clickevent for my menu me button



menuWork.addEventListener('click', function(event){
    event.stopPropagation;
    meDiv.setAttribute('class', 'hide');
    skillDiv.setAttribute('class', 'hide');
    workDiv.setAttribute('class', 'myWork');

} )
menuMe.addEventListener('click', function(event){
    event.stopPropagation;
    meDiv.setAttribute('class', 'about');
    skillDiv.setAttribute('class', 'hide');
    workDiv.setAttribute('class', 'hide');
})

menuSkill.addEventListener('click', function(event){
    event.stopPropagation;
    meDiv.setAttribute('class', 'hide');
    skillDiv.setAttribute('class', 'visibleSkills');
    workDiv.setAttribute('class', 'hide');

})


//MY TURNING CARD INSAHALLAH
const cardHTML = document.getElementById('html');
const cardCSS = document.getElementById('css');
const cardJS = document.getElementById('js');
const cardBS = document.getElementById('boot');
const cardReact = document.getElementById('react');
const cardUX = document.getElementById('ux');

cardHTML.addEventListener('click', function (){
    cardHTML.classList.toggle('isFlipped')
});
cardCSS.addEventListener('click', function (){
    cardCSS.classList.toggle('isFlipped')
});
cardJS.addEventListener('click', function(){
    cardJS.classList.toggle('isFlipped')
});
cardBS.addEventListener('click', function(){
    cardBS.classList.toggle('isFlipped')
});
cardReact.addEventListener('click', function(){
    cardReact.classList.toggle('isFlipped')
});
cardUX.addEventListener('click', function(){
    cardUX.classList.toggle('isFlipped')
});
//all the cards turned to flipping cards