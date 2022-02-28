import React from 'react';
import {AppstoreOutlined} from '@ant-design/icons';
import './feature.css'
const Features = ()=>{
  return (<div>
    <hr class="horizontalLine mt-5"/>
    <p class="text-center display-3 mt-3 mb-4 theStacks">Features <span><AppstoreOutlined /></span></p> 
                {/* CARD */}
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 mt-4">
            <div class="card mb-3 ">
            <div class="card-body">
              <p class="card-text theStacks text-center lead display-5 text-primary">Individual Saving</p>
            </div>
            <img src="/resources/images/calculate.png" class="card-img-top" alt="..."/>
          </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 mt-4">
            <div class="card">
            <div class="card-body">
              <p class="card-text theStacks text-center lead display-5 text-primary">Group Saving</p>
            </div>
            <img src="/resources/images/group.png" class="card-img-top" alt="..."/>
          </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 mt-4">
            <div class="card">
            <div class="card-body">
              <p class="card-text theStacks text-center lead display-5 text-primary">Cummulative Accounting</p>
            </div>
            <img src="/resources/images/contribute.png" class="card-img-top" alt="..."/>
          </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 mt-4">
            <div class="card">
            <div class="card-body">
              <p class="card-text theStacks text-center lead display-5 text-primary">Target Saving</p>
            </div>
            <img src="/resources/images/spot.png" class="card-img-top" alt="..."/>
          </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 mt-4">
            <div class="card">
            <div class="card-body">
              <p class="card-text theStacks text-center lead display-5 text-primary">Task Management</p>
            </div>
            <img src="/resources/images/steps.png" class="card-img-top" alt="..."/>
          </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 mt-4">
            <div class="card">
            <div class="card-body">
              <p class="card-text theStacks text-center lead display-5 text-primary">Messaging</p>
            </div>
            <img src="/resources/images/message.png" class="card-img-top" alt="..."/>
          </div>
            </div>
        </div>    
    </div>
                {/* CARD */}
                <hr class="horizontalLine mt-3"/>
    </div>);
}
export default Features;