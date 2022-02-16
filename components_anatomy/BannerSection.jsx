import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
function BannerSection()
{
const [nameDiv,setNameDiv]=useState(false);
const [emailDiv,setEmailDiv]=useState(false);
const [phDiv,setPhDiv]=useState(false);

function nameDivClassHandler()
{
    setNameDiv(true);
}
function emailDivClassHandler()
{
    setEmailDiv(true);
}
function phDivClassHandler()
{
    setPhDiv(true);
}
    return(
        <>
<section id="banner">
<div className="container banner-content">
<div className="row">
<div className="col text-center animated fadeInDown delay-1">
<a href="/" id="logo"><img src="/logo.svg" alt="RunnerCity Logo"/></a>
<h1>Empower Locally.<br/> Gig Cooperatively.</h1>
<p>Get ready to delete your delivery app!<br/> <b>Runners Keep 100% & Local Businesses Keep 100%</b></p>
</div>
</div>
</div>
<video playsinline="" autoplay="" muted loop poster="/bg.jpg" data-src="/bg-small.mp4" id="bgvid" className="lazy lazied" data-lazied="IMG" src="/bg-small.mp4">
<source data-src="/bg-small.webm" type="video/webm" src="/bg-small.webm" className=" lazied"/>
<source data-src="/bg-small.mp4" type="video/mp4" src="/bg-small.mp4" className=" lazied"/>
</video>

<div id="signup">
    
<div className="container">
<div className="row">
<div className="col-12 text-center">
<h2><a href="#signup">Coming Soon. Be the first to know!</a></h2>
<p>Sign Up for Updates</p>
</div>
</div>
<form acceptCharset="utf-8" action="https://usebasin.com/f/318b425ae143" method="post" className="aos-item" data-aos="fade-in">
<input type="hidden" name="utm_source"/>
<input type="hidden" name="utm_medium"/>
<input type="hidden" name="utm_campaign"/>
<div className={ nameDiv ? "col col-12 col-md-3 labelToggle toggle-label":"col col-12 col-md-3 labelToggle"} >
<label htmlFor="full_name">Your Name*</label>
<input type="text" id="full_name" className="formField" name="full_name" placeholder="ex. John or Jane Doe" required onClick={nameDivClassHandler}/>
</div>
<div className={ emailDiv ? "col col-12 col-md-4 labelToggle toggle-label":"col col-12 col-md-4 labelToggle"} >
<label htmlFor="email_signup">Email Address*</label>
<input type="email" id="email_signup" name="email" placeholder="ex. yourname@email.com" required className="formField labelToggle" onClick={emailDivClassHandler}/>
</div>
<div className={ phDiv ? "col col-12 col-md-3 labelToggle toggle-label":"col col-12 col-md-3 labelToggle"}  >
<label htmlFor="phone">Phone Number*</label>
<input type="tel" id="phone" name="phone" className="phone" placeholder="(123) 456-7890" required className="formField labelToggle" onClick={ phDivClassHandler}/>
</div>
<div className="col col-12 col-md-2">
<button type="submit" className="button">Notify Me!</button>
</div>
</form>
</div>



</div>
</section>

        </>
    );
}
export default BannerSection;