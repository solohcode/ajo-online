import React from 'react';
import './newsletter.css';
const Newsletter = ()=>{
  return (<div class="fullBody">
            <form class="Body text-center text-white">
                <p class="text-center text-white fw-bold pt-4 new">Subscribe to our Newsletter</p>
                <p class="text-center btn-group rounded-pill">    
                <input type="email" class="form-control btn" placeholder="Enter your e-mail address"/>
                <button class="btn btn-primary" type="button"> <b>Submit</b></button>
                </p>
            </form>

            <img src="/resources/images/logos/logo-white.png" width="40%" class="mb-4" alt="White-logo"/>
    </div>);
}
export default Newsletter;