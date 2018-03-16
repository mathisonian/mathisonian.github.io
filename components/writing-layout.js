
import { CONTAINER_WIDTH } from '../config/layout';
import { Link } from '../routes';

export default ({back, children}) => (
  <div>
    <div className="writing-container">
      <div className="writing-nav">
          <div className="writing-nav-header">Writing</div>
          <div className="writing-nav-list">
          {
            back ? <div><Link to="/writing/"><a>← Back</a></Link></div> : (
              <div>
                <span className="note">This is a collection of personal writing. For news bylines,
                  see <Link to="/work/journalism"><a>journalism</a></Link>.</span>
              </div>
            )
          }
          </div>
      </div>
      <div className="writing-details">
        { children }
      </div>
    </div>
    <style jsx>{`

      .writing-nav-header {
        font-family: Helvetica, Arial, sans-serif;
        font-weight: bold;
        font-size: 14px;
        border-bottom: solid 1px black;
        padding-bottom: 10px;
        width: calc(100% - 25px);
      }

      .writing-container {
        display: flex;
        max-width: calc(1.15 * ${CONTAINER_WIDTH});
      }

      .writing-nav {
        flex: 25% 1;
      }
      .writing-nav a {
        color: black;
        text-decoration: none;
      }

      .writing-nav-list {
        text-transform: uppercase;
        font-family: Helvetica, Arial, sans-serif;
        padding-top: 10px;
      }

      .writing-nav-list .note {
        font-style: italic;
        text-transform: none;
        line-height: 14px;
      }
      .writing-nav-list .note a {
        // color: blue;
        text-decoration: underline;
      }

      .writing-nav-list > div {
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 12px;
      }

      .writing-details {
        flex: 75% 3;
        padding-left: 25px;
        max-width: 75%;
      }
      .writing-details ul {
        padding-left: 0;
      }
      .writing-details li {
        padding-left: 0;
      }

      @media all and (max-width: 900px) {
        .writing-container {
          width: calc(100vw - 40px);
          flex-direction: column;

        }

        .writing-nav {
          text-align: center;
          flex: auto;
          padding-bottom: 20px;
        }
        .writing-details {
          flex: auto;
          width: 100%;
          max-width: none;
          padding-left: 0;
        }
        .writing-details ul {
          padding-left: 0;
        }
        .writing-details li {
          padding-left: 0;
        }
        .writing-nav-header {
          width: 100%;
        }
      }
    `}
    </style>
  </div>
)