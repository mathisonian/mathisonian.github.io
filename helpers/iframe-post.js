import React from 'react'
import Post from '../components/post'
import { Link } from '../routes';

export default function WithPost(iframeUrl) {
  return class _WithPost extends React.Component {
    static async getInitialProps({ req }) {
      // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
      // return { userAgent }
      return {}
    }

    componentDidCatch() {

    }

    render() {
      return (
        <div>
          <iframe src={iframeUrl}>
            Your browser doesn't support iframes
          </iframe>
          <Link to="/writing"><div className="back">
            <a>← Back</a>
          </div></Link>
          <style jsx>{`
            iframe {
              position:fixed;
              top:0px;
              left:0px;
              bottom:0px;
              right:0px;
              width:100%;
              height:100%;
              border:none;
              margin:0;
              padding:0;
              overflow:hidden;
              z-index:999998;
            }

            .back {
              position: fixed;
              bottom: 10px;
              left: 10px;
              font-family: Helvetica, Arial, sans-serif;
              z-index:999999;
              background: rgba(0, 0, 0, 0.8);
              padding: 10px;
              color: white;
              cursor: pointer;
            }
            .back a {
              color: white;
              text-decoration: none;
            }
          `}</style>
        </div>
      )
    }
  }
};