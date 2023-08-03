import React from 'react'
import "../styles/footer.scss"

const Footer = () => {
  return (
    <footer>

    <div>
      <h1>RaisingStar</h1>
      <p>@all rights reserved</p>
    </div>

     <div>
      <h1>Follow Me</h1>
      <div>
        <a href='https://www.linkedin.com/in/subhash-reddy-842a97155/' target={'blank'}>
           LinkedIn
        </a>
        <a href='https://www.instagram.com/_subhash_reddy/' target={'blank'}>
             Instagram
        </a>
        <a href='https://github.com/subhashreddy864' target={'blank'}>
             Github
        </a>
      </div>
    </div>
    </footer>
  )
}

export default Footer;
