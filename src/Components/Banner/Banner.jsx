import './Banner.css'
function Banner({ one, two, three }) {
    return (
        <div>
            <div className="enquire-banner">
                <h1>{one} <span className='swoosh-wrap'> {two}
                    <svg className="swoosh" viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M10 40 C50 25, 250 25, 290 40" stroke="#f3c042" strokeWidth="6" fill="none" strokeLinecap="round" />
                        <path d="M10 48 C50 33, 250 26, 290 48" stroke="#f3c042" strokeWidth="4" fill="none" strokeLinecap="round" />
                    </svg>
                </span> {three}</h1>
            </div>
        </div>
    )
}

export default Banner
