import React, { useState} from 'react'
import { Button, Card, Input } from  'antd'
import { Helmet } from 'react-helmet'
import Navbar from './Navbar'
import Map from './Map'
import TheStacks from './TheStacks'
import Features from './Features'
import UserFeedback from './UserFeedback'
import Playstore from './Playstore'
import Newsletter from './NewsLetter'
import Footer from './Footer'
import { connect } from 'react-redux'
// import Footer from 'components/cleanui/layout/Footer';
// import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom'  ;


const mapDispatchToProps = ({dispatch, user}) => ({
  dispatch,
  data: user.placeholderData,
  loading: user.loading,
})

const Index = ({
  dispatch,
  data,
  loading
}) => {

  // useEffect(() => {
  //   dispatch({
  //     type: 'user/PLACEHOLDER_DATA'
  //   });
  // })

  const [id, setid] = useState(0)

  const handleChange=(e)=>{
    const {value} = e.target
    setid(value)
  }

  const handleBtn = ()=>{
    dispatch({
      type: 'user/PLACEHOLDER_DATA',
      id
  })
}

  return (
    <div>
      <Helmet title="Home" />
        <div>
          <Card loading={loading}>
            <div className="card-body">
              <Input onChange={handleChange} type="number" size="large" />
              <h5 className="card-title">{data.title || 'Card Title'}</h5>
              <p className={`w-100 card-text alert alert-${data.completed?'success':'danger'}`}>{data.completed?'Completed':'Please Complete Authentication' || 'Card text'}</p>
              <Button disabled={!id} className="btn btn-primary" onClick={handleBtn}>Get Data</Button>
            </div>
          </Card>
        </div>
        <Navbar/>  
            <Map/>
              <TheStacks/>
                <Features/>
                  <UserFeedback/>
                    <Playstore/>
                      <Newsletter/>
                        <Footer/>

    </div>
  )
}

export default connect(mapDispatchToProps)(Index)
