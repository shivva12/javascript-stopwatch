function stopwatch(){
  let currentState
  let seconds = 0
  let minutes = 0
  let hours = 0
  const secObj = document.getElementById("seconds")
  const minObj = document.getElementById("minutes")
  const hourObj = document.getElementById("hours")

  document.getElementById("start-button").addEventListener("click", () => {
    if(currentState == "running") return;
    currentState = "running"
    runTimeCycle()
  })
  document.getElementById("stop-button").addEventListener("click", () => { currentState = "stopped" })
  document.getElementById("reset-button").addEventListener("click", () => { currentState = 'reset'; setTime(); })

  runTimeCycle = () => setTimeout(setTime, 1000)

  function setTime(){
    if(currentState === "running"){
      seconds++
      if(seconds === 60){
        minutes++
        seconds = 0
        if(minutes === 60){
          hours++
          minutes = 0
        }
      }
    }
    if(currentState === 'reset'){
      hours = 0
      minutes = 0
      seconds = 0
    }
    secObj.textContent = seconds < 10 ? '0' + seconds.toString() : seconds
    minObj.textContent = minutes < 10 ? '0' + minutes.toString() : minutes
    hourObj.textContent = hours < 10 ? '0' + hours.toString() : hours

    currentState === 'running' && runTimeCycle()
  }
}
stopwatch()