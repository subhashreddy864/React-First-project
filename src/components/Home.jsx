import React from "react";
import "../styles/home.scss"
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
    return (
        <>        
    <div className="home" id="home">    
        <main>
             <h1>RaisingStar</h1>
              <p>Solution to all your Problems</p>
        </main>
    </div>

     <div className="home2">    
          <img src={vg} alt="Graphics"/>
            <div>
               <p>
                  We are your one and only solution to the tech problems you face
                  Everyday. we are leading tech company whose aim is to increase the problem solving ability in children.
               </p>
            </div>
     </div>


     <div className="home3" id="about">
        <div>
            <h1>Who we are?</h1>    
              <p>Friends 'till the end.
                  A true friend is one soul in two bodies.
                  Your vibe attracts your tribe.
                   Friends don't let friends do silly things alone.
                   I'll even send you the photos I look bad in.
                   Besides chocolate, you're my favorite.
                   Love is beautiful, friendship is better.
               </p>
         </div>
     </div>

   <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
            <article>
                <div
                   style={{
                     animationDelay:"0.3s"
                   }}
                   >
                  <AiFillGoogleCircle />
                  <p>Google</p>
                </div>

                <div
                   style={{
                     animationDelay:"0.5s"
                   }}
                   >
                  <AiFillAmazonCircle />
                  <p>Amazon</p>
                </div>

                <div
                   style={{
                     animationDelay:"0.7s"
                   }}
                   >
                  <AiFillYoutube />
                  <p>Youtube</p>
                </div>

                <div
                   style={{
                     animationDelay:"1s"
                   }}
                   >
                  <AiFillInstagram />
                  <p>Instagram</p>
                </div>
                
         </article>
      </div>
    </div>


    </>
    );
}

export default Home;