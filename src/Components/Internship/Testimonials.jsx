import { useEffect, useState } from "react";

function Testimonials({ bgicon, bgicon3 }) {
    const [current, setCurrent] = useState(0);
    const testimonials = [
        {
            text: "My time at Nurture Infotech helped me apply classroom knowledge to real-world IT projects. It was a game-changer for my career.",
            author: "Tamilselvan Rangasamy",
            role: "Full Stack Development Intern"
        },
        {
            text: "Joining the internship at Nurture Infotech was the best decision. I gained both skills and direction for my future in tech.",
            author: "Tamilselvan Rangasamy",
            role: "Data Analytics Intern"
        },
        {
            text: "My time at Nurture Infotech helped me apply classroom knowledge to real-world IT projects. It was a game-changer for my career.",
            author: "Tamilselvan Rangasamy",
            role: "Full Stack Development Intern"
        },
        {
            text: "Joining the internship at Nurture Infotech was the best decision. I gained both skills and direction for my future in tech.",
            author: "Tamilselvan Rangasamy",
            role: "Data Analytics Intern"
        }, {
            text: "My time at Nurture Infotech helped me apply classroom knowledge to real-world IT projects. It was a game-changer for my career.",
            author: "Tamilselvan Rangasamy",
            role: "Full Stack Development Intern"
        },
        {
            text: "Joining the internship at Nurture Infotech was the best decision. I gained both skills and direction for my future in tech.",
            author: "Tamilselvan Rangasamy",
            role: "Data Analytics Intern"
        }
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);
    return (
        <div>
            <div className='internship-testimonials' >
                <div className='bg_icon'>
                    <img src={bgicon3} alt="" className="bg_icon_1" />
                    <img src={bgicon} alt="" className="bg_icon_2" />
                </div>
                <section className="testimonials box">
                    <h2>
                        What our <span className="swoosh-wrap">
                            Interns
                            <svg className="swoosh" viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden="true">
                                <path d="M1 20 C20 28, 250 10, 290 20" stroke="#f5aa42ff" strokeWidth="4" fill="none" strokeLinecap="round" />
                            </svg>
                        </span> Say
                    </h2>

                    <div className="carousel">
                        {testimonials.map((t, index) => (
                            <blockquote
                                key={index}
                                className={`slide ${index === current ? 'active' : ''}`}
                            >
                                “{t.text}”
                                <div>—— {t.author}, <span>{t.role}</span></div>
                            </blockquote>
                        ))}

                        <div className="dots">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === current ? 'active' : ''}`}
                                    onClick={() => setCurrent(index)}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Testimonials