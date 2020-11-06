import React, {useEffect, useRef} from 'react'
import './Clock.css'

function Clock() {

    const timer = useRef(undefined)


    const sound = () => {
        const sound = document.getElementById('myAudio')
        timer.current = setInterval(() => {
            sound.play()
        },1000)
    }



    useEffect(() => {
        sound()
        const date  = new Date
        let seconds = date.getSeconds()
        let minutes = date.getMinutes()
        let hours = date.getHours()

        console.log(hours+" et "+ minutes + " et "+ hours)

        const hands = [
            {
                hand:'hours',
                angle: ((hours * 30)+ (minutes / 2)) - 90
            },
            {
                hand: 'minutes',
                angle: (minutes * 6) - 90
            },
            { 
                hand: 'seconds',
                angle: (seconds * 6) - 90
            }
        ]

        const seconds1 = document.getElementById('seconds')
        seconds1.style.animation = "rotate 60s infinite steps(60)"
        const minutes1 = document.getElementById('minutes')
        minutes1.style.animation = "rotate 3600s infinite steps(60)"
        const hours1 = document.getElementById('hours')
        hours1.style.animation = "rotate 43200s infinite steps(60)"

        hands.map(hand => {
            const element = document.getElementById(hand.hand)
            element.style.transform = 'rotateZ('+hand.angle+'deg)'
        })

        return () => {
            clearInterval(timer.current)
        }
    })

    return (
        <div className="main-container">

            <div className="clock">
                <div className="clock-hand" id="seconds"> &nbsp; </div>
                <div className="clock-hand" id="minutes"></div>
                <div className="clock-hand" id="hours"></div>
            </div>

            <audio id="myAudio">
                <source src="sounds/clock-hand-sound.mp3" type="audio/mpeg"/>
            </audio>



        </div>
    )
}

export default Clock
