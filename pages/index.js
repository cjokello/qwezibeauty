import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'


import { FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { MdEast } from "react-icons/md"

export default function LandingPage() {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.icons}>
                    <FaTwitter className={styles.socialicon} size="1.2rem"/>
                    <FaFacebookSquare className={styles.socialicon} size="1.2rem" />
                </div>

                <div>
                    <h2>Qwezi Beauty</h2>
                </div>

                <div>
                    <p>Sign In</p>
                </div>

            </div>

            <div className={styles.navbarLinks}>
                <p className={styles.navbarLink}>HOME</p>  
                <p className={styles.navbarLink}>SHOP</p>
                <p className={styles.navbarLink}>STORY</p>
                <p className={styles.navbarLink}>BLOG</p>
            </div>

            <div className={styles.main}>
                <div className={styles.main_one}>
                    <p className={styles.maintext}>
                        Natural Beauty from Moringa Oleifeira to feed your <i>glow</i>
                    </p>
                </div>
                <div className={styles.main_two}>
                    <img className={styles.main_image} src="/1.jpg" alt="Home page image" />
                </div>
            </div>

            <p className={styles.lineupText}>THE LINEUP</p>

            <div className={styles.productGrid}>
                <div className={styles.productCard}>
                    <div className={styles.product_image_div}>
                        <img className={styles.product_image} src="/5.jpg" alt="Product image" />
                    </div>
                    
                    <div className={styles.product_description}>
                        <h3 className={styles.product_title}>Qwezi Beauty Moringa Oil</h3>
                        <p>100% pure cold-pressed organic moringa oleifeira oil to repair, renew & replenish your skin</p>
                        <h4 className={styles.product_price}>From $26</h4>
                    </div>
                </div>

                <div className={styles.productCard}>
                    <div className={styles.product_image_div}>
                        <img className={styles.product_image} src="/7.jpg" alt="Product image" />
                    </div>

                    <div className={styles.product_description}>
                        <h3 className={styles.product_title}>Unscented Neutral Bar</h3>
                        <p>Made especially for sensitive skin with the goodness of our pure moringa oil, palm kernel oil, shea butter, and honey</p>
                        <h4 className={styles.product_price}>$10</h4>
                    </div>
                </div>

                <div className={styles.productCard}>
                    <div className={styles.product_image_div}>
                        <img className={styles.product_image} src="/7.jpg" alt="Product image" />
                    </div>

                    <div className={styles.product_description}>
                        <h3 className={styles.product_title}>Activated Charcoal Bar</h3>
                        <p>Great for acne-prone and oily skin.</p>
                        <h4 className={styles.product_price}>$10</h4>
                    </div>
                </div>

                <div className={styles.productCard}>
                    <div className={styles.product_image_div}>
                        <img className={styles.product_image} src="/7.jpg" alt="Product image" />
                    </div>

                    <div className={styles.product_description}>
                        <h3 className={styles.product_title}>Gentle Exfoliating Bar</h3>
                        <p>Moringa seed granules make it slightly gritty to remove dead skin cells and renew your glow</p>
                        <h4 className={styles.product_price}>$10</h4>
                    </div>
                </div>
            </div>

            <div className={styles.standards}>
                <p className={styles.believe}>Believe in better</p>
            
                <div className={styles.iconsGrid}>
                    <div className={styles.iconCard}>
                        <img className={styles.icon} src="/vegan.png" />
                        <p>100% vegan</p>
                    </div>
                    <div className={styles.iconCard}>
                        <img className={styles.icon} src="/ethicallysourced.png" />
                        <p>Ethically sourced</p>
                    </div>
                    <div className={styles.iconCard}>
                        <img className={styles.icon} src="/noharmfulchemicals.png" />
                        <p>No harmful chemicals</p>
                    </div>
                    <div className={styles.iconCard}>
                        <img className={styles.icon} src="/sustainable.png" />
                        <p>Sustainable</p>
                    </div>
                </div>
            
            </div>

            <div className={styles.footer}>
                <div className={styles.footer_section_one}>
                    <p className={styles.footerText}><i>Glow&nbsp;</i> with us. Subscribe to our newsletter.</p>
                    <div className={styles.subscribeContainer}>
                        <input 
                            className={styles.subscribeBox}
                            type="text"
                            placeholder="Email"
                        />
                        <div className={styles.subscribeIcon}>
                            <MdEast color="#fcf9ec" size="1.2em" />
                        </div>
                        
                    </div>
                </div>

                <div className={styles.footer_section_two}>
                    <p>Want to get in touch?</p>

                    <div className={styles.contactDetails}>
                        <div>
                            <p>EMAIL</p>
                            <p>hello@qwezibeauty.com</p>
                        </div>
                        <div>
                            <p>PHONE</p>
                            <p>+256772546784</p>
                        </div>
                    </div>
                </div>

                <div className={styles.footer_section_three}>
                    <p>&copy; 2021 QWEZI BEAUTY &nbsp; &nbsp;|&nbsp; &nbsp;SITE CREDITS</p>
                </div>
            </div>

        </div>
    )
}