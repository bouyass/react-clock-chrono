import React, {useState, useEffect, useRef} from 'react'
import './Chronometer.css'

function Chronometer() {

    var milliseconds = 0
    var seconds = 0
    var minutes = 0
    var hours = 0
    var days = 0
    //var timer = undefined
    var startTime = ''

    const[chronoValue, setChronoValue] = useState('00:00:00:0000')
    const [startTimer, setStartTimer] = useState('')
    const [stoppedAtTime, setStoppedAtTime] = useState('')
    const [stopTimer, setStopTimer] = useState(true) 

    const timer = useRef()

    const getMilliseonds = function(milliseconds) {
        return (milliseconds%1000)
    }

    const getSeconds = function(milliseconds){
        return Math.trunc((milliseconds/1000)%60)
    }

    const getMinutes = function(milliseconds){
        return Math.trunc((milliseconds/(60*1000))%60)
    }

    const getHours = function(milliseconds){
        return Math.trunc((milliseconds/(60*1000*60))%60)
    }

    const getDays = function(milliseconds){
        return Math.trunc((milliseconds/(60*1000*60*600))%24)
    }

    const saveValue = () => {
        if(chronoValue !== '00:00:00:0000'){
            const elt = document.createElement('li')
            elt.innerText = chronoValue
            document.getElementById('saved-list').appendChild(elt)
        }
    }
    

    const startChrono = () => {
        startTime = Date.now() 
        setStartTimer(startTime)
        setStoppedAtTime(Date.now())
        setStopTimer(false)
    }

    const resumeChorono = () => {
        startTime = (Date.now()- startTimer)- (Date.now() - stoppedAtTime)
        setStopTimer(false)
    }

    const chrono = (startTime) => {
        timer.current = setInterval(() => {
            if(stopTimer !== true){
                let currentTime = Date.now() 
                milliseconds = getMilliseonds(currentTime - startTime) >= 100 ? getMilliseonds(currentTime - startTime) : '0'+getMilliseonds(currentTime - startTime) 
                seconds = getSeconds(currentTime - startTime) >= 10 ? getSeconds(currentTime - startTime) : '0'+getSeconds(currentTime - startTime) 
                minutes = getMinutes(currentTime - startTime) >= 10 ? getMinutes(currentTime - startTime) : '0'+getMinutes(currentTime - startTime)
                hours = getHours(currentTime - startTime) >= 10 ?getHours(currentTime - startTime) : '0'+getHours(currentTime - startTime)
                days = getDays(currentTime - startTime) >= 10 ? getDays(currentTime - startTime) : '0'+getDays(currentTime - startTime)
                setChronoValue(days+":"+hours+":"+minutes+":"+seconds+":"+milliseconds)   
            }
        },1)
    }

    const stopChrono = () => {
        setStopTimer(true)
        setStoppedAtTime(Date.now())
        clearInterval(timer.current)
    }

    useEffect(() => {
        chrono(startTimer)
    }, [stopTimer])

    return (
        <div className="main-container">
            <div className="chrono">
                <span> {chronoValue} </span>
            </div>
            <div className="buttons">
                <button onClick={startTimer !== '' ? resumeChorono : startChrono }> {startTimer !== '' ? 'Resume' : 'Start' }  </button>
                <button onClick={stopChrono}> Stop </button>
                <button onClick={saveValue}> Save </button>
            </div>
            <div id="saved-values">
                <span> <h2> SAVED TIMES </h2> </span>
                <ul id="saved-list">
                    
                </ul>
            </div>
        </div>
    )
}

export default Chronometer
