import react from 'react';
import 'bootstrap/dist/css/bootstrap.css'

function HeaderSection()
{

return(<>
<link href="/fontawesome-free-5.15.4-web/css/all.css" rel="stylesheet"></link>

<header className="animated fadeInDown">
<ul>
<li className="social"><a href="https://www.facebook.com/groups/2562263050658372" target="_blank">
<i className="fab fa-facebook" aria-hidden="true" title="facebook link"></i>
<span className="sr-only">Facebook</span></a></li>
<li className="social"><a href="https://mobile.twitter.com/runnercityapp" target="_blank">
<i className="fab fa-twitter" aria-hidden="true" title="twitter link"></i>
<span className="sr-only">Twitter</span></a></li>
<li><a href="#store" className="button">Shop Merch</a></li>
</ul>
</header></>);
}
export default HeaderSection;