const progress = document.getElementById('progress')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const circles = document.querySelectorAll('.circle')
const bars = document.querySelectorAll('.progress')
const paras = document.querySelectorAll('.step')
const checks = document.querySelectorAll('.check')
const processing = document.getElementById('processNumber')

let currentActiveCircles = 0;
let currentActiveBars = 0;
let currentActiveSteps = 0;
let currentActiveChecks = 0;

next.addEventListener('click', () => {
  currentActiveCircles++;
  currentActiveBars++;
  currentActiveSteps++;
  currentActiveChecks++;
  if (currentActiveCircles > circles.length) {
    currentActiveCircles = circles.length
    
  }

  if (currentActiveBars > bars.length) {
    currentActiveBars = bars.length
    
  }

  if (currentActiveSteps > circles.length) {
    currentActiveSteps = circles.length
    
  }

  if (currentActiveChecks > circles.length) {
    currentActiveChecks = circles.length
  }
  
  update();
  updateBars();
  updateSteps();
  updateChecks();
})
prev.addEventListener('click', () => {
  currentActiveCircles--;
  currentActiveBars--;
  currentActiveSteps--;
  currentActiveChecks--;
  if (currentActiveCircles < circles.length) {
    currentActiveCircles = circles.length
  }

  if (currentActiveBars < bars.length) {
    currentActiveBars = bars.length
  }
  if (currentActiveSteps < circles.length) {
    currentActiveSteps = circles.length
  }
  update()
  updateBars()
  updateSteps()
  updateChecks()
})

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActiveCircles) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')

    }
    
  })

  


}

function updateBars() {
  bars.forEach((bars, idx) => {
    if (idx < currentActiveBars) {
      bars.classList.add('active')
      
    } else {
      bars.classList.remove('active')

    }
    
  })
}

function updateSteps() {
  paras.forEach((paras, idx) => {
    if (idx < currentActiveSteps) {
      paras.classList.add('active')
    } else {
      paras.classList.remove('active')

    }
  })
}

function updateChecks() {
  processing.innerHTML = (currentActiveChecks / circles.length)*100 + '%';

}