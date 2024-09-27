import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <section className="footer">
 
  <div className="lists">
    <div className="l1">
      <ul>
        <p id="p1">ABOUT ForFoodies</p>
        <li>Who we are</li>
        <li>Blog</li>
        <li>Work with us</li>
        <li>Investor Relations</li>
        <li>Report Fraud</li>
        <li>Press Kit</li>
        <li>Contact us</li>
      </ul>
    </div>
   
    <div className="l3">
      <ul>
        <p> FOR Recipes</p>
        <li>Partner With Us</li>
        <li>App For You</li>
      </ul>
    </div>
    <div className="l5">
      <ul>
        <p>LEARN MORE</p>
        <li>Privacy</li>
        <li>Security</li>
        <li>Terms</li>
      </ul>
    </div>
    <div className="l6">
      <ul>
        <p>SOCIAL LINKS</p>
        <li><i className="fa-brands fa-linkedin-in" /></li>
        <li><i className="fa-brands fa-instagram" /></li>
        <li><i className="fa-brands fa-twitter" /></li>
        <li><i className="fa-brands fa-youtube" /></li>
        <li><i className="fa-brands fa-facebook" /></li>
      </ul>
    </div>
  </div>
</section>

  )
}

export default Footer