import React from 'react';
import "./Whyus.css";
import Cardd from "../../components/Cards/Cardd.js"

const Whyus = () => {
    const data = [
        {
            "id": 1,
            "title": "One on One & Group Batches",
            "description": "Personalized coaching through one-on-one sessions and collaborative learning in small group batches, ensuring individual attention and group interaction."
        },
        {
            "id": 2,
            "title": "Complete Study Material",
            "description": "Comprehensive study material, including notes, exercises, and reference games, provided to support students' learning and practice."
        },
        {
            "id": 3,
            "title": "Online and Offline Tournaments",
            "description": "Regular participation in both online and offline tournaments to gain competitive experience and enhance practical skills."
        },
        {
            "id": 4,
            "title": "Game Analysis Support",
            "description": "Detailed analysis of games to identify strengths, weaknesses, and areas for improvement, helping students to refine their strategies."
        },
        {
            "id": 5,
            "title": "Parents Guidance Support",
            "description": "Guidance sessions for parents to help them understand their child's progress and ways to support their chess development."
        },
        {
            "id": 6,
            "title": "Complete Training Till Promised Outcome",
            "description": "We provide continuous support and training until the student achieves the promised course outcome rating, ensuring their success."
        },
        {
            "id": 7,
            "title": "Support for FIDE Rated Tournaments",
            "description": "Assistance and guidance for participating in FIDE-rated tournaments, helping students to gain official ratings and recognition."
        },
        {
            "id": 8,
            "title": "Healthy Competitive Environment",
            "description": "A highly competitive and motivating environment that encourages growth, learning, and continuous improvement among students."
        }
    ];

    return (
        <>
            <div className="whyus">
                <div className='whyus_main'>
                    <p className='whyus_heading'>Why us?</p>
                    <div className='whyus_cards'>
                        {data.map((item) => (
                            <Cardd key={item.id} title={item.title} description={item.description} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Whyus;