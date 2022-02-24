import React from 'react';
import { MessageOutlined } from '@ant-design/icons';
const UserFeedback = ()=>{
  return (<div>
    <p class="text-center display-3 mt-3 mb-5 theStacks">User Feedback<span><MessageOutlined /></span></p> 
        <div>
        {/*????*/}
        {/*????*/}
        <div id="carouselExampleControls" class="carousel slide container" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
          <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <img src="/resources/images/users/user.jpg" class="w-75" alt="First slide"/>
          </div>            
          
          <div class="col-lg-6 col-md-6 col-sm-12 goDown">
          <p class="toDown">With ajo online software i have been able to save money both individually and with my friends, 
          as a student it has help me to manage my money, saving up for unsolicited events that could happen at any ungiven time, 
          and the pay out is so so stress free, I am giving a 10 out 0f 10, kudos to the developer.</p>
          </div>            
     </div>
          </div>
          <div class="carousel-item">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <img src="/resources/images/save.png" class="blueImage" alt=""/>
            </div>            
            
            <div class="col-lg-6 col-md-6 col-sm-12 goDown">
            <p class="text-primary toBlue">Save to Wave</p>
            <p class="toDown">The habit of saving has been one of the most observed and inculcated in todays world, saving for rainy days or for any project, business or investment of choice as goofy as it looks or may soaund always have a happy ending.</p>
            </div>            
       </div>
          </div>
          <div class="carousel-item">
          <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <img src="/resources/images/save.png" class="blueImage" alt=""/>
          </div>            
          
          <div class="col-lg-6 col-md-6 col-sm-12 goDown">
          <p class="text-primary toBlue">Save to Wave</p>
          <p class="toDown">The habit of saving has been one of the most observed and inculcated in todays world, saving for rainy days or for any project, business or investment of choice as goofy as it looks or may soaund always have a happy ending.</p>
          </div>            
     </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
       
        {/*????*/}
        



        </div>
    </div>);
}
export default UserFeedback;