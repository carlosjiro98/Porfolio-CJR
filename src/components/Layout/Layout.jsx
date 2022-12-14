//css
import styles from './Layout.module.css'

//coponents
import Nav from '../Nav/Nav'
import Work from '../Work/Work'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Lateral from '../Lateral/Lateral'
import Footer from '../Footer/Footer'
import LateralR from '../LateralR/LateralR'


function Layout () {
    return(
        <div className={styles.mainCon}>
            <Nav />
            <Home />
            <About />
            <Work />
            <Contact />
            <Lateral />
            <LateralR />
            <Footer />
        </div>
    );
}

export default Layout;