import { Link } from "react-router-dom"

export function Hero() {

    function onTryNow(){
        console.log('try now click')
    }

    return (
        <section className="hero-main-container flex align-center">
            <div className="hero-text-container">
                <h2>ReadyRent - Your Comprehensive Rental Assistant</h2>
                <p>Simplify your rental process with ReadyRent. Manage your budget, stay organized with checklists, and receive personalized moving advice powered by AI.</p>
                <Link to={'/sign-up'}>
                <button className="try-now-btn" onClick={() => onTryNow()}>Try Now</button>
                </Link>
            </div>
            <div className="hero-img-container"></div>
        </section>
    )
}
