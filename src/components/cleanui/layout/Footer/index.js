import React from 'react'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import style from './style.module.scss'

const Footer = () => {
  return (
    // <div className={style.footer}>
      <div className={`${style.footer} container-fluid`}>
        <div className='row'>
          <Fade left>
            <div className='col-md-4'>
              {/* <div className={style.footerInner}> */}
              <a
                href="/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src='/resources/images/logo.svg' alt='logo' />
              </a>
              <br />
              <p className='mb-0'>
                Download the app to manage your projects, keep track of the progress and complete tasks without procastinating. Stay on track and complete on time!
              </p>
              <a
                href="/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src='/resources/images/playstore.svg' alt='download store' className={style.logo} />
              </a>
              {/* <p className="mb-0">
                Copyright © 2017-2020 Mdtk Soft |{' '}
                <a href="https://www.mediatec.org/privacy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </p> */}
              {/* </div> */}
            </div>
          </Fade>
          <Fade bottom>
            <div className={`col-md-4`}>
              <div className={style.padLeft50}>
                <p>Quick Links</p>
                <a href='/#' className={style.link}>Blog</a><br />
                <a href='/#' className={style.link}>Press</a><br />
                <a href='/#' className={style.link}>Contact</a><br />
                <a href='/#' className={style.link}>We are hiring</a>
              </div>
            </div>
          </Fade>
          <Fade>
            <div className='col-md-4'>
              <div className={style.padLeft50}>
                <p>Help</p>
                <a href='/#' className={style.link}>Get Help</a><br />
                <a href='/#' className={style.link}>FAQ</a><br />
                <a href='/#' className={style.link}>Contact Us</a>
              </div>
            </div>
          </Fade>
        </div>
        <Zoom>
          <div className='d-flex justify-content-md-between align-items-center mt-5 pt-5'>
            <p>© 2021 Hackthor Technologies. All right reserved</p>
            <div>
              <a href='/#' className={`px-3 ${style.link}`}>Terms</a>
              <a href='/#' className={`px-3 ${style.link}`}>Privacy Policy</a>
              <a href='/#' className={`px-3 ${style.link}`}>Cookie Policy</a>
            </div>
          </div>
        </Zoom>
      </div>
    // </div>
  )
}

export default Footer
