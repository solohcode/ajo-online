import React from 'react'
import { Card } from 'antd';
import './dashboard.css'
import { CheckCircleOutlined, ClockCircleOutlined, TeamOutlined, DeploymentUnitOutlined  } from '@ant-design/icons'

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <div className="site-card-border-less-wrapper">
          <Card className='card' style={{ width: 250, display: 'block', height: '100px' }}>
            <div className='card-top-1'>Completed Savings</div>
            <h5 className='texts'><CheckCircleOutlined />003</h5>
          </Card>
          <Card className='card' style={{ width: 250, display: 'block', height: '100px' }}>
            <div className='card-top-2'>Ongoing Savings</div>
            <h5 className='texts'><ClockCircleOutlined />005</h5>
          </Card>
          <Card className='card' style={{ width: 250, display: 'block', height: '100px' }}>
            <div className='card-top-3'>Total Amount On App</div>
            <h5 className='texts middle' >#34,000,246</h5>
          </Card>
          <Card className='card' style={{ width: 250, display: 'block', height: '100px' }}>
            <div className='card-top-4'>Groups</div>
            <h5 className='texts'><TeamOutlined />003</h5>
          </Card>
        </div>
        
        <div className="site-card-border-less-wrapper-1">
          <div className='chard'>
            <Card className='card' style={{ width: 300, height: '80px'}}>
              <div  style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'block', justifyContent: 'space-around' }}>
                  <h6 style={{fontWeight: 'bold'}}>Position:</h6>
                  <h6 style={{fontWeight: 'bold'}}>Email:</h6>
                  <h6 style={{fontWeight: 'bold'}}>Telegram ID:</h6>
                </div>
                <div style={{ display: 'block', justifyContent: 'space-around' }}>
                <h6>UI/UX designer</h6>
                <h6>abcdef@gmail.com</h6>
                <h6>35478769</h6>
                </div>
              </div>
            </Card>
            <Card className='card' style={{ width: 300, height: '100px', marginTop: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'block', justifyContent: 'space-around' }}>
                  <h6 style={{fontWeight: 'bold'}}>Hours worked this month:</h6>
                  <h6 style={{fontWeight: 'bold'}}>Number of tasks in progress:</h6>
                  <h6 style={{fontWeight: 'bold'}}>Number of closed tasks:</h6>
                  <h6 style={{fontWeight: 'bold'}}>Number of frozen tasks:</h6>
                </div>
                <div style={{ display: 'block', justifyContent: 'space-around' }}>
                  <h6>35</h6>
                  <h6>12</h6>
                  <h6>5</h6>
                  <h6>1</h6>
                </div>
              </div>
            </Card>
          </div>
          <Card className='card' style={{ width: 620, height: '300px' }}>
            <div className='botn' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4>Transactions</h4>
              <button>View all</button>
            </div>
            <div className='botny'>
              <div className="row">
                <div className="col">Energi.kg</div>
                <div className="col"><DeploymentUnitOutlined />12/04/2021</div>
                <div className="col"><DeploymentUnitOutlined />12/04/2021</div>
                <div className="col"><TeamOutlined />Adeniyi, Cole, Dave</div>
              </div>
              <div className="row">
                <div className="col">TextLab</div>
                <div className="col"><DeploymentUnitOutlined />12/04/2021</div>
                <div className="col"><DeploymentUnitOutlined />12/04/2021</div>
                <div className="col"><TeamOutlined />Adeniyi, Cole, Dave</div>
              </div>
              <div className="row">
                <div className="col">ComLab</div>
                <div className="col"><DeploymentUnitOutlined />12/04/2021</div>
                <div className="col"><DeploymentUnitOutlined />12/04/2021</div>
                <div className="col"><TeamOutlined />Adeniyi, Cole, Dave</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="site-card-border-less-wrapper-2">
          <Card className='card tong' style={{ width: '350px', height: '300px' }}>
            <h4>In Progress</h4>
            <div style={{ display: 'block', justifyContent: 'space-around' }}>
              <div className='card-border'>
                <div className='card-border-1'>
                  Notifications<h6 style={{ borderRadius: '10px', backgroundColor: 'green', width: '25px' }}>Low</h6>
                </div>
                <h6>Participant: King Arthur</h6>
                <h6>Dated added: 12/04/2021</h6>
              </div>
              <div  className='card-border'>
                <div className='card-border-1'>
                Task types<h6 style={{ borderRadius: '10px', backgroundColor: 'green', width: '25px' }}>Low</h6>
                </div>
                <h6>Participant: King Arthur</h6>
                <h6>Dated added: 12/04/2021</h6>
              </div>
            </div>
          </Card>
          <Card className='card cardy' style={{ width: 200, height: '150px', marginTop: '120px' }}>
              
          </Card>
        </div>  
      </div>
    </div>
  )
}
