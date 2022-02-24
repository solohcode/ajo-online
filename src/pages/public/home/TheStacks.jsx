import React from 'react';
import {TagOutlined} from '@ant-design/icons';
import './stacks.css'


const TheStacks = ()=>{
  return (<div>
    <p class="text-center display-3 mt-3 theStacks">The Stacks <span><TagOutlined/></span></p> 
      <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <img src="/resources/images/save.png" class="blueImage" alt=""/>
            </div>            
            
            <div class="col-lg-6 col-md-6 col-sm-12 goDown">
            <p class="text-primary toBlue">Save to Wave</p>
            <p class="toDown">The habit of saving has been one of the most observed and inculcated in todays world, saving for rainy days or for any project, business or investment of choice as goofy as it looks or may soaund always have a happy ending.</p>
            </div>            
       </div>


       <div class="row mt-4">
       <div class="col-lg-6 col-md-6 col-sm-12 goDown">
       <p class="text-primary toBlue">Home Comfort</p>
       <p class="toDown">What is it like to sit at the comfort of  ones home being relaxed from all physical stresses and having the joy of waiting for assured outcome of ones capital securify on a platform that is more befitting and extraordinarily easy to swing around.</p>
       </div>
    
       <div class="col-lg-6 col-md-6 col-sm-12">
         <img src="/resources/images/comfort.png" class="blueImage" alt=""/>
       </div>            
       
  </div>

    </div>
    </div>
    );
}
export default TheStacks;