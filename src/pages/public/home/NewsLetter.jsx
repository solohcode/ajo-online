import React from 'react';
import './newsletter.css';
const Newsletter = ()=>{
  return (<div class="fullBody">
            <form class="Body text-center text-white">
                <p class="text-center text-white fw-bold pt-4 new">Subscribe to our Newsletter</p>
                <label class="label me-1">Email: </label>
                <p class="text-center btn-group">    
                <input type="email" placeholder='Enter your email' class="rounded px-5 w-100"/>
                    <input type="submit" value="Subscribe" class="btn btn-outline-dark rounded"/>
                </p>
            </form>

            <img src="/resources/images/logos/logo-white.png" width="40%" class="mb-4" alt="White-logo"/>
    </div>);
}
export default Newsletter
;