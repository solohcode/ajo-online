import { CheckCircleOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({dispatch, data}) => ({
  dispatch,
  loading: data.loading,
  balance: data.savings_balance
})

function TransactionPage({dispatch, loading, balance}) {

  useEffect(() => {
    dispatch({
      type: 'data/GET_SAVINGS_BALANCE'
    })
  }, [])
  return (
    <div>
      <div>
        <Card loading={loading} className='card' style={{ width: 250, display: 'block', height: '100px' }}>
          <div className='card-top-3'>Total Savings</div>
          <div className='texts'>
            <h5 className='middle' style={{paddingLeft: '20px'}}>#{balance}</h5>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(TransactionPage)