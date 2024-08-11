import React from 'react';
import "./Courses.css";
import Cardc from '../../components/Cards/Cardc';

const Courses = () => {
  const data = [
    {
      "id": 1,
      "level": "Beginner",
      "rating_range": "0-500",
      "duration": "3 month",
      "total_classes": 45,
      "training_practice_session": 60,
      "test_review_sessions": 10,
      "practice_analysis_sessions": 5,
      "tournament_included": true,
      "batch_size": "1 on 1 & Group batches (up to 5 students)",
      "instructor": "International Master Rajesh Kumar",
      "description": "Designed for newcomers, this course covers the fundamentals of chess, from basic piece movements to opening strategies. Ideal for those starting their chess journey.",
      "additional_features": [
        "Interactive puzzles and quizzes",
        "Weekly progress reports",
        "Access to recorded sessions"
      ],
      "actions": [

        {
          "action_type": "link",
          "text": "LEARN MORE",
          "url": "https://wa.me/7649866386?text=I%20want%20to%20know%20more%20about%20Beginner%20level%20courses."
        },
        {
          "action_type": "link",
          "text": "BOOK TRIAL",
          "url": "/contact"
        }
      ]
    },
    {
      "id": 2,
      "level": "Intermediate",
      "rating_range": "500-800",
      "duration": "3-6 month",
      "total_classes": 60,
      "training_practice_session": 90,
      "test_review_sessions": 12,
      "practice_analysis_sessions": 15,
      "tournament_included": true,
      "batch_size": "1 on 1 & Group batches",
      // "instructor": "FIDE Master Anjali Patel",
      "description": "This course is tailored for players who have grasped the basics and are ready to dive deeper into mid-game tactics, strategic planning, and complex opening repertoires.",
      "additional_features": [
        "Advanced tactical exercises",
        "Personalized game analysis",
        "Participation in local online tournaments"
      ],
      "actions": [

        {
          "action_type": "link",
          "text": "LEARN MORE",
          "url": "https://wa.me/7649866386?text=I%20want%20to%20know%20more%20about%20Intermediate%20level%20courses."
        },
        {
          "action_type": "link",
          "text": "BOOK TRIAL",
          "url": "/contact"
        }
      ]
    },
    {
      "id": 3,
      "level": "Advanced",
      "rating_range": "800-1200",
      "duration": "6-9 month",
      "total_classes": 90,
      "training_practice_session": 125,
      "test_review_sessions": 16,
      "practice_analysis_sessions": 30,
      "tournament_included": true,
      "batch_size": "1 on 1 & Group batches (up to 3 students)",
      "instructor": "Grandmaster Suresh Anand",
      "description": "Focused on serious players, this course provides in-depth training in advanced tactics, endgames, and the psychological aspects of competitive play. Ideal for excelling in school-level tournaments.",
      "additional_features": [
        "Daily homework and assignments",
        "Access to premium chess software",
        "Invitation to exclusive online tournaments"
      ],
      "actions": [
        {
          "action_type": "link",
          "text": "LEARN MORE",
          "url": "https://wa.me/7649866386?text=I%20want%20to%20know%20more%20about%20Advance%20level%20courses."
        }
        ,
        {
          "action_type": "link",
          "text": "BOOK TRIAL",
          "url": "/contact"
        }
      ]
    },
    {
      "id": 4,
      "level": "Expert",
      "rating_range": "1200-1600",
      "duration": "9-12 month",
      "total_classes": 120,
      "training_practice_session": 180,
      "test_review_sessions": 30,
      "practice_analysis_sessions": 60,
      "tournament_included": true,
      "batch_size": "1 on 1 training only",
      "instructor": "Grandmaster Vishal Mehta",
      "description": "For elite players aiming to refine their skills and prepare for fide rated tournaments. This course includes personalized coaching, deep theoretical & strategic preparation.",
      "additional_features": [
        "One-on-one mentorship",
        "Participation in national-level tournaments",
        "Access to GM/IM games and commentary"
      ],
      "actions": [
        {
          "action_type": "link",
          "text": "LEARN MORE",
          "url": "https://wa.me/7649866386?text=I%20want%20to%20know%20more%20about%20Expert%20level%20courses."
        }
        ,
        {
          "action_type": "link",
          "text": "BOOK TRIAL",
          "url": "/contact"

        }
      ]
    }
  ];


  return (
    <>
      <div className="courses">
        <div className="courses_heading">
          <p>Our Courses</p>
        </div>


        <div className="courses_wrap">
          <div className="courses_cards">
            {data.map((course) => (
              <Cardc
                key={course.id}
                level={course.level}
                rating_range={course.rating_range}
                duration={course.duration}
                total_classes={course.total_classes}
                training_practice_session={course.training_practice_session}
                test_review_sessions={course.test_review_sessions}
                practice_analysis_sessions={course.practice_analysis_sessions}
                tournament_included={course.tournament_included}
                batch_size={course.batch_size}
                description={course.description}
                actions={course.actions}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
