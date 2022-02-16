import 'bootstrap/dist/css/bootstrap.css'
import { initial } from 'lodash';
import { useState } from 'react';
import  HeaderSection  from './HeaderSection';  
import BannerSection from './BannerSection';
 
function HeaderBanner()
{
return(<>
<HeaderSection></HeaderSection>
<BannerSection></BannerSection>
</>)
}
export default HeaderBanner;
