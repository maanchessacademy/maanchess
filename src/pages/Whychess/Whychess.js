import React from 'react'
import "./Whychess.css"
import Cardb from '../../components/Cards/Cardb'
import a from "./images/1.png"
import b from "./images/2.png"
import c from "./images/3.png"
import d from "./images/4.png"
import e from "./images/5.png"
import f from "./images/6.png"
import g from "./images/7.png"
import h from "./images/8.png"
import img from "./images/Focus.png"

const Whychess = () => {
    const data = [
        {
            "id": 7,
            "title": "Boosts Cognitive Skills",
            "description": "Chess enhances problem-solving, critical thinking, and memory, making it an excellent exercise for the brain.",
            "image": c
        },
        {
            "id": 2,
            "title": "Improves Concentration",
            "description": "Playing chess requires focus and attention, helping kids improve their concentration levels.",
            "image": b
        },
        {
            "id": 6,
            "title": "Enhances Academic Performance",
            "description": "Studies show that chess improves mathematical and reading skills, boosting overall academic performance.",
            "image": f
        },
        {
            "id": 3,
            "title": "Teaches Patience and Discipline",
            "description": "Chess instills patience and discipline as children learn to plan and think ahead.",
            "image": a
        },
        {
            "id": 4,
            "title": "Encourages Creativity",
            "description": "The game promotes creative thinking as kids develop unique strategies and solutions.",
            "image": d
        },
        {
            "id": 5,
            "title": "Fosters Sportsmanship",
            "description": "Chess teaches kids to handle wins and losses gracefully, fostering good sportsmanship.",
            "image": e
        },

        {
            "id": 1,
            "title": "Builds Confidence",
            "description": "Mastering chess strategies can boost children's self-esteem and confidence.",
            "image": g
        },
        {
            "id": 8,
            "title": "Creates Lifelong Skills",
            "description": "Chess is a lifelong skill that can be enjoyed and cherished at any age.",
            "image": h
        }
    ]

    return (
        <>
            <div className='wk_main'>
                <div className="wk_head">
                    <p className='wk_heading'> Why Chess For Kids? </p>
                    <div className='wk_head_wrap'>
                        <div className="wk_head_left">
                            <img src={img} alt="benefits of chess" />
                        </div>
                        <div className="wk_cards">
                            {data.map(card => (
                                <Cardb
                                    key={card.id}
                                    title={card.title}
                                    description={card.description}
                                    image={card.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whychess