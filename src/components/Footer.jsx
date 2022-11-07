import React from 'react'
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillFacebook,
    AiOutlineArrowUp,
  } from "react-icons/ai";

function Footer() {
  return (
    <footer>
            <div>
                <img src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/168275786_101257735566896_1489564346969873616_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=R6yQkepTtgsAX-5-fQl&_nc_ht=scontent.fccu3-1.fna&oh=00_AfA7ltKdp-aPAf-Zdo7VGcj6Eg4Aquz1_SdHbsYTVU2VVw&oe=636D7941" alt="Founder" />
                <h2>Niladri Sen</h2>
                <p>Motivation is temporary, but discipline and consistency lasts forever. Be your own role model.</p>
            </div>
            <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/niladri-sen" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/niladriSen007" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100070480083500" target={"blank"}>
            <AiFillFacebook />
          </a>
          <a href="https://www.instagram.com/cristiano_nil07/" target={"blank"}>
            <AiFillInstagram />
          </a>
          
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  )
}

export default Footer