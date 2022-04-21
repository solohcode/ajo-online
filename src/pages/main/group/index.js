import React, { Component } from 'react';
import './index.css'

class Group extends Component {
  render() {
    return (
      <div className='col-xs-2 col-sm-3 col-md-6 col-lg-12 col-xl-12'>
              
      <div className='col fs-4 fw-1 mt-4'>Groups</div>
      

  
  <div id='all-menu'>
<div className="dropdown ms-4  col-10" >
  
<a className="btn rounded-3 col-1 btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">

</a> 



<ul class="dropdown-menu " aria-labelledby="dropdownMenuLink">
<li><a className="dropdown-item" href="#">Action</a></li>
<li><a className="dropdown-item" href="#">Another action</a></li>
<li><a className="dropdown-item" href="#">Something else here</a></li>
</ul>
</div> 
  <a className='btn pt-1 pb-3 col-1 btn-secondary' href='#' role='button' id='btn'>Create Group</a>
  
</div>
        <table class="table table-bordered" id='table'>
<thead>
<tr>
<th scope="col">GROUP NAME</th>
<th scope="col">ADMIN NAME</th>
<th scope="col">NO OF MEMBER</th>
<th scope="col">AMOUNT</th>
<th scope="col">ACTION</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">GROUP A</th>
<td> Micheal Harvey </td>
<td>36</td>
<td>$30,000</td>
<td><i class="fa-solid fa-pencil"></i></td>
</tr>
<tr>
<th scope="row">GROUP B</th>
<td>Wiliam Morgan</td>
<td>41</td>
<td>$25,000</td>
<td><i class="fa-solid fa-pencil"></i></td>
</tr>
<tr>
<th scope="row">GROUP C</th>
<td>Scotfeild Dave</td>
<td>24</td>
<td>$20,000</td>
<td><i class="fa-solid fa-pencil"></i></td>
</tr>
<tr>
<th scope="row">GROUP D</th>
<td>Scott Carson</td>
<td>30</td>
<td>$15,000</td>
<td><i class="fa-solid fa-pencil"></i></td>
</tr>
<th scope="row">GROUP E</th>
<td>Larson jones</td>
<td>27</td>
<td>$10,000</td>
<td><i class="fa-solid fa-pencil"></i></td>
<tr></tr>
</tbody>
</table>
    </div>
    );
  }
}

export default Group;
