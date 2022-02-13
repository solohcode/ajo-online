import React from 'react'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
import style from './style.module.scss'
import { ArrowDownOutlined } from '@ant-design/icons'

const Chart11 = ({datas}) => {
  const data = {
    series: [datas],
  }

  const options = {
    axisX: {
      showLabel: false,
      showGrid: false,
      offset: 0,
    },
    axisY: {
      showLabel: false,
      showGrid: false,
      offset: 0,
    },
    showArea: true,
    high: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    fullWidth: true,
    height: '50px',
    showPoint: true,
    plugins: [
      ChartistTooltip({
        anchorToPoint: false,
        appendToBody: true,
        seriesName: false,
      }),
    ],
  }

  return (
    <div className="card-body overflow-hidden position-relative px-3 pb-0 mb-0">
      <div className='w-100'>
        <div className='w-100 d-flex'>
          <div className='d-flex'>
            <img alt='...' src='/resources/images/btc-shape.png' width="25px" className='rounded-circle bg-warning p-2 me-1' />
            <p className='m-0 lh-1'><b>Bitcoin</b> <br /> BTC</p>
          </div>
          <div className='w-100'>
            <div className='text-end'>
              <b className='m-0'>$47,000</b>
            </div>
          </div>
          {/* <div className="font-size-36 font-weight-bold text-dark mb-n2">1240</div> */}
          {/* <div className="text-uppercase">Transactions</div> */}
        </div>
        <p className='text-end text-danger m-0 lh-1'>18.88% <ArrowDownOutlined /></p>
      </div>
      <div 
        className={style.chartContainer}
      >
        <ChartistGraph
          className={` ct-hidden-points ${style.chart}`}
          data={data}
          options={options}
          type="Line"
        />
      </div>
    </div>
  )
}

export default Chart11
