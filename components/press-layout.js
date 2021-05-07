
import { CONTAINER_WIDTH } from '../config/layout';
import Link from 'next/link';

export default ({children}) => (
  <div>
    <div className="press-container">
      <div className="press-nav">
          <div className="press-nav-header">Selected Press</div>
          <div className="press-nav-list">
          <div>
            <span className="note">Press coverage of projects that I helped create.</span>
          </div>
          <div><Link href="/"><a>Back Home</a></Link></div>
          </div>
      </div>
      <div className="press-details">
        { children }
      </div>
    </div>
    <style jsx>{`
      .press-nav-header {
        font-family: Helvetica, Arial, sans-serif;
        font-weight: bold;
        font-size: 14px;
        border-bottom: solid 1px black;
        padding-bottom: 10px;
        width: calc(100% - 25px);
      }

      .press-container {
        display: flex;
        max-width: ${CONTAINER_WIDTH};
      }

      .press-nav {
        flex: 25% 1;
      }
      .press-nav a {
        color: black;
        text-decoration: none;
        line-height: 18px;
      }
      .press-nav-list .note {
        font-style: italic;
        text-transform: none;
        line-height: 14px;
      }
      .press-nav-list .note a {
        // color: blue;
        text-decoration: underline;
      }

      .press-nav-list {
        text-transform: uppercase;
        padding-top: 10px;
        font-family: Helvetica, Arial, sans-serif;
      }

      .press-nav-list > div {
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 12px;
      }

      .press-details {
        flex: 75% 3;
        padding-left: 25px;
      }
      @media all and (max-width: 900px) {
        .press-container {
          width: calc(100vw - 40px);
          flex-direction: column;

        }

        .press-nav {
          text-align: center;
          flex: auto;
          padding-bottom: 20px;
        }
        .press-details {
          flex: auto;
          width: 100%;
          max-width: none;
          padding-left: 0;
        }
        .press-details ul {
          padding-left: 0;
        }
        .press-nav-header {
          width: 100%;
        }
        .press-container ul {
          padding-left: 0;
        }
      }

    `}
    </style>
  </div>
)