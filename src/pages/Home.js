import React from "react";
import { useEffect } from 'react';
import "./Home.css"; // Import the CSS file
import { Carousel } from "react-bootstrap";
import Slider from "react-infinite-logo-slider";
import { motion , useAnimation } from 'framer-motion';



<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
/>;

const Home = () => {
  
  const controls = useAnimation();
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) { // Adjust this value based on when you want the animation to start
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [controls]);

  const items = [
    {
      id: 1,
      heading: "Intuition",
      text: "User-friendly interfaces that predict customer needs and deliver seamless experiences.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdrIXP4TZCE_gl5Efo7FaSjQAhf2Vtthj0PA&s",
    },
    {
      id: 2,
      heading: "Attraction",
      text: "Powerful strategies that propel your sales pipeline forward for greater revenue generation.",
      imgSrc:
        "data:image/png;base64,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",
    },
    {
      id: 3,
      heading: "Personalization",
      text: "Tailored to individual preferences and fully customizable.",
      imgSrc: "https://cdn-icons-png.flaticon.com/512/10729/10729318.png",
    },
    {
      id: 4,
      heading: "Value Addition",
      text: "Advanced offer creation & collaborative distribution tools that add value.",
      imgSrc:
        "data:image/png;base64,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",
    },
    {
      id: 5,
      heading: "Loyalty",
      text: "Advanced offer creation & collaborative distribution tools that add value.",
      imgSrc: "https://cdn-icons-png.flaticon.com/512/4501/4501125.png",
    },
    {
      id: 6,
      heading: "Good Will",
      text: "Customers become brand ambassadors and are incentivized to spread the love.",
      imgSrc: "https://cdn-icons-png.freepik.com/512/10365/10365444.png",
    },
  ];
  
  const logos = [
    {
      id: 1,
      src: "https://via.placeholder.com/200x100.png?text=Netflix",
      alt: "Netflix",
    },
    {
      id: 2,
      src: "https://via.placeholder.com/200x100.png?text=Amazon",
      alt: "Amazon",
    },
    {
      id: 3,
      src: "https://via.placeholder.com/200x100.png?text=Jio",
      alt: "Jio",
    },
    {
      id: 4,
      src: "https://via.placeholder.com/200x100.png?text=Hammer",
      alt: "Hammer",
    },
    {
      id: 5,
      src: "https://via.placeholder.com/200x100.png?text=Boat",
      alt: "Boat",
    },
    {
      id: 6,
      src: "https://via.placeholder.com/200x100.png?text=Sugar",
      alt: "Sugar",
    },
    {
      id: 7,
      src: "https://via.placeholder.com/200x100.png?text=Lenskart",
      alt: "Lenskart",
    },
    {
      id: 8,
      src: "https://via.placeholder.com/200x100.png?text=Xircls",
      alt: "Xircls",
    },
  ];
  const textWave = {
    initial: { y: 0 },
    animate: { y: [0, -10, 0] },
    transition: { duration: 1, ease: "easeInOut" },
  };
  
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  
  const WaveText = ({ text, controls }) => {
    return (
      <>
        {text.split("  ").map((letter, index) => (
          <motion.span 
            key={index} 
            initial="initial" 
            animate={controls} 
            variants={textWave}
            transition={{ delay: index * 0.1, repeat: Infinity, repeatType: "loop" }}
            style={{ display: "inline-block" }}
          >
            {letter}
          </motion.span>
        ))}
      </>
    );
  };
  
  return (


    <div className="baap">
      <div className="home-container">
        <nav class="navbar ">
          <a href="#">
            <img
              class="nav-link"
              src="data:image/png;base64,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"
              alt=""
            />
          </a>
         <div class="cen-nav"> 
          <a class="nav-link" href="#">
            Home
          </a>

          <a class="nav-link" href="#">
            Features
          </a>

          <a class="nav-link" href="#">
            Pricing
          </a>

          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown link
          </a>

          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
               </div>
          </div>
       
        </nav>

      <div class="chota">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
  >
    <h1 class="cen"><WaveText text="From First Visit" /></h1>
    <h1 class="cen"><WaveText text="To Forever Loyal." /></h1>
    <h4>
      <WaveText text="An end-to-end martech stack to optimize every step of the buyer journey." />
    </h4>
  </motion.div>
</div>

        <div class="lota">
          <div></div><Slider
            width="300px"
            className="custom-slider"
            duration={30}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={"#fff"}
          >
            {logos.map((logo) => (
              <Slider.Slide key={logo.id}>
                <img src={logo.src} alt={logo.alt} className="w-80" />
              </Slider.Slide>
            ))}
            
          </Slider>
        </div>
        <div class="ota">
        <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeIn}
        transition={{ duration: 2 }}
      >
          <h1 class="cen"><WaveText text="Trust is Everything." controls={controls}/></h1>

          <h4>
            <WaveText text="We prioritize digital interactions built on trust, transparency, and
            100% consent of your valued customers." controls={controls}/>
          </h4>
          </motion.div>
          <div class="j">
          <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeIn}
        transition={{ duration: 2 }}
      >
          <h1 class="en"><WaveText text ="Technology That Sells." controls={controls}/></h1>
          <h1 class="e"><WaveText text="The Way You Would." controls={controls}/></h1>

          <h4>
            We prioritize digital interactions built on trust, transparency, and
            100% consent your  customers.
          </h4>
          </motion.div>
          
          
          </div>
          
        </div>
        <div class="lota">
          <div className="grid-container">
            {items.map((item) => (
              <div className="grid-item" key={item.id}>
                <motion.div
      className="grid-item"
      key={item.id}
      initial="hidden"
      animate={controls}
      variants={fadeIn}
      transition={{ duration: 1 }}
    >
                <img
                  src={item.imgSrc}
                  alt={item.heading}
                  className="grid-img"
                />
                 <h2><WaveText text={item.heading} controls={controls} /></h2>
                 <p><WaveText text={item.text} controls={controls} /></p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <div class="mota">
          
          <div className="gri-container">
            <div className="gri-item">
              
              <h1>All You Need <br/>All In One Place.</h1>
            </div>
            <div className="gri-item">
              <h4>Precision martech that activates</h4>
              <h4> crucial touch points</h4>
              <h4> across the buyer journey.</h4>
            </div>
          </div>
        
          <h1>IDENTIFY</h1>
          <div className="gri-container">
            <div className="gri-item">
              <h3>Zero-Party Data Collection</h3>
              <h4>Democrazy</h4>
            </div>
            <div className="gri-item">
              <p>
                Customer demographic data collection to curate personalized
                buying experiences
              </p>
            </div>
          </div>
       
          <h1 class="eee">VERIFY</h1>
          <div className="gri-container">
            <div className="gri-item">
              <h3>Visitor Authentication</h3>
              <h4>Democrazy</h4>
            </div>
            <div className="gri-item">
              <p>
                Ground zero tools that detect & verify high-intent shoppers
                within the first few seconds of arrival.
              </p>
            </div>
          </div>
       
          <h1 class="eee">INCENTIVE</h1>
          <div className="gri-container">
            <div className="gri-item">
              <h3>Shopping Engagement</h3>
              <h4>Reviews, Social Shop</h4>
            </div>
            <div className="gri-item">
              <p>
                Solutions that instantly lock shoppers into buying mode and
                activate the cart journey.
              </p>
            </div>
            <div className="gri-item">
              <h3>Rewards & Incentives</h3>
              <p></p>
            </div>
            <div className="gri-item">
              <p>
                Timely offers, delivered discreetly, to delight shoppers and
                convert them into customers guaranteed to return.
              </p>
            </div>
          </div>
       
          <h1 class="eee">ENABLE</h1>
          <div className="gri-container">
            <div className="gri-item">
              <h3>Purchase Enablement</h3>
              <h4>Flash Accounts, UPI Payment Enabler</h4>
            </div>
            <div className="gri-item">
              <p>
                Sales acceleration products that simplify and enhance the
                checkout experience.
              </p>
            </div>
            <div className="gri-item">
              <h3>Revenue Optimization</h3>
              <h4>Recommendations, Cross-sell & Upsell</h4>
            </div>
            <div className="gri-item">
              <p>
                Personalized suggestions tailored to past customer behaviour and
                purchase history.
              </p>
            </div>
            <div className="gri-item">
              <h3>Revenue Recovery</h3>
              <h4>Revive</h4>
            </div>
            <div className="gri-item">
              <p>
                Smart tools that predict, protect and recover lost or at-risk
                revenue across the buying cycle.
              </p>
            </div>
            <div className="gri-item">
              <h3>Communication</h3>
              <h4>Talk by XIRCLS, Chatbot</h4>
            </div>
            <div className="gri-item">
              <p>
                An integrated communications system to deliver a unified brand
                experience across channels.
              </p>
            </div>

            <div className="gri-item">
              <h3>Omnichannel Automation</h3>
              <h4>QR Forms, CRM</h4>
            </div>
            <div className="gri-item">
              <p>
                Unified online/offline lead generation & conversion with a
                centralized customer database for streamlined operations.
              </p>
            </div>
          </div>
      
          <h1 class="eee">ENHANCE</h1>
          <div className="gri-container">
            <div className="gri-item">
              <h3>Shopping Optimization</h3>
              <h4>Flash Accounts, Oh My Customer!</h4>
            </div>
            <div className="gri-item">
              <p>
              Enhancement modules to enable frictionless, user-friendly shopping experiences.
              </p>
            </div>
          </div>
     
          <h1 class="eee">RETAIN</h1>
          <div className="gri-container">
            <div className="gri-item">
              <h3 >Loyalty Management</h3>
              <h4>Semper Fi, TrueCash, Gift Cards</h4>
            </div>
            <div className="gri-item">
              <p>
              Loyalty solutions built to deliver meaningful interactions that add true value to your customers’ lives.
              </p>
            </div>
            <div className="gri-item">
              <h3>Repurchase Enablement</h3>
              <h4>Subscriptions & Memberships!</h4>
            </div>
            <div className="gri-item">
              <p>
              Recurring purchase activation to instantly turn one-time buyers into loyal patrons.
              </p>
            </div>
            <div className="gri-item">
              <h3>Goodwill & Partnerships</h3>
              <h4>Referrals, Customer Affiliates!</h4>
            </div>
            <div className="gri-item">
              <p>
              Referral management tools to track, reward and leverage the influence of satisfied customers and strategic partners.
              </p>
              
            </div>
          </div>
          
          <div class="rota">
            <div class="gotu">
          <p class="uuu">SUPERLEADZ</p>
          <p class="ttt">Built to Convert</p>
          <p>Verified, high-intent lead generation.</p>
          <p>Minimize marketing wastage. Boost revenue.</p>
          <button class="iii">learn more about SuerLeadz</button>
          </div>
          </div>




          <div class="ta">
            <div class="tu">
          <p class="tttt">Grow Your Business With XIRCLS.</p>
          
          <div class="rr"><p>Reach out for customized solutions.</p>
          <div class="q"><button class="iiii">Contact Us</button></div></div>
          </div>
          </div>



          <footer class="footer">
          <div class="footer-container">
        <div class="footer-section">
            <h3>Section</h3>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>Section</h3>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>Section</h3>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
        <div class="footer-bottom">
         <div class="mahek"> <img src="data:image/png;base64,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"/>
         </div>
            © 2022
        </div>
        </div>
    </footer>
        </div>


      
    

      </div>
      </div>
  );
};

export default Home;
