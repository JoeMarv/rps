//VARIABLES 
const ruleBtn = document.querySelector('.rules-btn')
const ruleCloseBtn = document.querySelector('.rules-close-btn')
const rules = document.querySelector('.rules-page')


//RULES VISIBILITY
ruleBtn.addEventListener('click', function() {
    rules.classList.toggle('rule')
})

ruleCloseBtn.addEventListener('click', function() {
    rules.classList.remove('rule')
})