import 'bootstrap/dist/css/bootstrap.css'

function Footer()
{
return(
<footer>
<link href="/fontawesome-free-5.15.4-web/css/all.css" rel="stylesheet"></link>

    <div className="container">
    <div className="row">
    <div className="col text-center">
    <ul className="social-share">
    <li className="facebook"><a className="button" href="https://www.facebook.com/sharer/sharer.php?u=https://runnercity.com/?utm_source=website&utm_campaign=organic" target="_blank"><i className="fab fa-facebook-square"></i>&nbsp; Share This</a></li>
    <li className="twitter"><a className="button" href="https://twitter.com/intent/tweet?text=Check this out! https://runnercity.com/?utm_source=website" target="_blank"><i className="fab fa-twitter"></i>&nbsp; Tweet This</a></li>
    </ul>
    </div>
    </div>
    <div className="row">
    <div className="col text-center">
    <ul id="footerSocial">
    <li className="social"><a href="https://www.facebook.com/groups/2562263050658372" target="_blank"><i className="fab fa-facebook" aria-hidden="true" title="facebook link"></i><span className="sr-only">Facebook</span></a></li>
    <li className="social"><a href="https://mobile.twitter.com/runnercityapp" target="_blank"><i className="fab fa-twitter" aria-hidden="true" title="twitter link"></i><span className="sr-only">Twitter</span></a></li>
    </ul>
    </div>
    </div>
    <div className="row">
    <div className="col text-center">
    <p id="copyright" className="small">&copy; Copyright 2022 &nbsp;RunnerCity - All Rights Reserved</p>
    <p><a href="/pages/privacy">Privacy Policy</a> | <a href="#inquire" className="open-popup-link">Get in Touch</a></p>
    </div>
    </div>
    </div>
    </footer>)
}
export default Footer;
