import { useState } from 'react';
import './FAQ.css'

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const faqs = [
        {
            question: 'What is the duration of each course?',
            answer: 'Each course varies from 6 weeks to 6 months depending on the subject and depth of the content. Intensive bootcamps typically last around 6-8 weeks, while more comprehensive courses can run up to 6 months.'
        },
        {
            question: 'Do you offer online training?',
            answer: 'Yes, all of our courses are available online through live sessions, pre-recorded lectures, and interactive content. We also offer in-person training in select locations for students who prefer face-to-face interaction.'
        },
        {
            question: 'Will I get a certificate after completion?',
            answer: 'Yes, every course comes with a certification upon successful completion. The certificate will highlight the skills you’ve acquired and is recognized by industry leaders.'
        },
        {
            question: 'What qualifications do I need to enroll in your courses?',
            answer: 'For most courses, no prior qualifications are needed. However, for advanced courses like Data Science or Machine Learning, we recommend having basic knowledge of programming or mathematics. You can check the course prerequisites on the course page.'
        },
        {
            question: 'Can I switch between courses once enrolled?',
            answer: 'Yes, you can switch between courses, but we recommend reviewing the prerequisites before making any changes. If you need guidance, our academic counselors are always available to help you choose the best course.'
        },
        {
            question: 'Do you offer job placement assistance?',
            answer: 'Yes, we provide job placement assistance through our network of industry partners and recruiters. Our team helps students prepare their resumes, provides mock interviews, and connects you with relevant job opportunities.'
        },
        {
            question: 'Will I get hands-on experience in the courses?',
            answer: 'Absolutely! Our courses are designed to provide practical, hands-on experience. You will work on real-world projects and assignments, and some courses even include internships with industry partners.'
        },
        {
            question: 'What should I do if I miss a class or a session?',
            answer: 'If you miss a class, you can catch up by watching the recorded session available on the course platform. We also provide extra resources and study materials to help you stay on track.'
        },
        {
            question: 'Are there any hidden fees or additional costs?',
            answer: 'No, all costs are transparent. The course fee includes access to all materials, exams, and certification. Any additional costs, such as textbooks or software, will be clearly stated before you enroll.'
        },
    ];
    const [faq, setFaq] = useState(false)
    const ChangeText = () => {
        setFaq(!faq)
    }
    return (
        <div className='faq-main'>
            
            <section className="faq-section">
                <h2 onMouseEnter={ChangeText} onMouseLeave={ChangeText}>{faq ? 'Frequently Asked Questions' : 'FAQ'}</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                        >
                            <h4 onClick={() => toggleFAQ(index)}>{faq.question}</h4>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default FAQ
