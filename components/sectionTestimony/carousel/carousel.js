import Image from 'next/image'
import { useState, useRef, useReducer } from 'react'
import styles from './carousel.module.css'
import utils from '../../../styles/utils.module.css'

import useLayoutEffect from '../../../lib/useIsomorphicLayout'
import CarouselSlot from './carouselSlot'
import CarouselIndicator from './carouselIndicator'

const testimonies = [
    {
        image: "/images/avatar-anisha.png",
        author: "Anisha Li",
        textimony: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
    },
    {
        image: "/images/avatar-ali.png",
        author: "Ali Bravo",
        textimony: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
    },
    {
        image: "/images/avatar-richard.png",
        author: "Richard Watts",
        textimony: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
    },
    {
        image: "/images/avatar-shanai.png",
        author: "Shanai Gough",
        textimony: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
    }
]

const initialState = { selected: 1, length: testimonies.length, container1X: 0, container2X: 0, initialisation: false}

const reducer = (state, action) => {
    switch (action.type) {
        case 'initialisation': {
            const container1X = action.payload.x1
            const container2X = action.payload.x2
            const initialisation = true
            return {...state, container1X, container2X, initialisation}
        } break
        case 'next': {
            const selected = action.payload.next
            const container1X = action.payload.x1
            const container2X = action.payload.x2
            return {...state, selected, container1X, container2X}
        } break
        default: {
            throw new Error();
        }
    }
}

export default function CarouselTestimony() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const carousel = useRef(null)
    const slotContainer1 = useRef(null)
    const slotContainer2 = useRef(null)

    useLayoutEffect(() => {
        const carouselWidth = carousel.current.offsetWidth
        const slotsWidth = slotContainer1.current.offsetWidth
        let slotWidth = slotContainer1.current.firstElementChild.offsetWidth + 20

        if (!state.initialisation) {
            console.log(getComputedStyle(slotContainer1.current.firstElementChild).marginRight)
            let container1X = (slotWidth * state.length) * -1
            let container2X = slotsWidth + container1X
            
            console.log("x1 before: " + container1X)
            console.log("x2 before: "+container2X)
            if (slotWidth < carouselWidth) {
                const extraspace = parseFloat((carouselWidth - slotWidth + 20) / 2)
                console.log("width: " + carouselWidth)
                console.log("slot: "+slotWidth)
                container1X += extraspace
                container2X += extraspace
                console.log(extraspace)
                console.log("x1 after: " + container1X)
                console.log("x2 after: "+container2X)
            }

            slotContainer1.current.style.left = container1X + "px"
            slotContainer2.current.style.left = container2X + "px"
            dispatch({ type: "initialisation", payload: { x1: container1X, x2: container2X } })
        }
        
        const timerID = setInterval(() => {
            let slotContainer1X = 0
            let slotContainer2X = 0
            
            if (slotWidth < carouselWidth) {
                const translation = state.selected % 2 === 0 ? slotWidth - 1 : slotWidth + 2
                slotContainer1X = (state.container1X - translation)
                slotContainer2X = state.container2X

                if (Math.abs(slotContainer1X) > slotsWidth) {
                    slotContainer1X = slotContainer2X + slotsWidth - slotWidth
                }

                slotContainer2X -= translation
                if (Math.abs(slotContainer2X) > slotsWidth) {
                    slotContainer2X = slotContainer1X + slotsWidth
                }
            } else {
                slotContainer1X = (state.container1X - slotWidth)
                slotContainer2X = state.container2X

                if (Math.abs(slotContainer1X) > slotsWidth) {
                    slotContainer1X = slotContainer2X + slotsWidth - slotWidth
                }

                slotContainer2X -= slotWidth
                if (Math.abs(slotContainer2X) > slotsWidth) {
                    slotContainer2X = slotContainer1X + slotsWidth
                }
            }
            

            slotContainer1.current.style.left = slotContainer1X + "px" 
            slotContainer2.current.style.left = slotContainer2X + "px"

            const selected = state.selected < state.length ? state.selected + 1 : 1
            dispatch({ type: "next", payload: { next: selected, x1: slotContainer1X, x2: slotContainer2X } })
        }, 6000)

        return function () {
            clearInterval(timerID)
        }
        
    }, [state])

    /*console.log(state)*/
    return (
        <div className={styles.container}>
            <div className={styles.carouselSlots} ref={carousel}>
                <div className={styles.carouselSlotsContainer+" "+styles.carouselSlotsContainer1} ref={slotContainer1}>
                    {
                        testimonies.map((testimony, key) => <CarouselSlot key={key} image={testimony.image} author={testimony.author}>{ testimony.textimony }</CarouselSlot> )
                    }
                </div>
                <div className={styles.carouselSlotsContainer+" "+styles.carouselSlotsContainer2} ref={slotContainer2}>
                    {
                        testimonies.map((testimony, key) => <CarouselSlot key={key} image={testimony.image} author={testimony.author}>{ testimony.textimony }</CarouselSlot> )
                    }
                </div>
            </div>
            <div className={styles.carouselIndicators}>
                {
                    testimonies.map((testimony, key) =>  <CarouselIndicator key={key} indice={key + 1} active={state.selected} /> )
                }
            </div>
        </div>
    )
}