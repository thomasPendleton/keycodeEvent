const key = document.querySelector('.key')
const keyCode = document.querySelector('.key-code')
const code = document.querySelector('.code')

document.addEventListener('keypress', (e) => {
  if(e.code === 'Space'){
     key.style.height = '49px'; 
  } else {
      key.style.height = 'auto'
  }
    
  key.innerHTML = e.key.toUpperCase()
  keyCode.innerHTML = e.keyCode
  code.innerHTML = e.code
})
