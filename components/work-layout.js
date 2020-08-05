
import { CONTAINER_WIDTH } from '../config/layout';
import Link from 'next/link'

const isSelected = (slug, name) => {
  return slug === name ? 'selected' : ''
};

const WorkLayout = ({slug, children}) => (
  <div>
    <div className="work-container">
      <div className="work-nav">
          <div className="work-nav-header"><Link href="/"><a style={{fontWeight: 'bold'}}>Work</a></Link></div>
          <div className="work-nav-list">
          <Link href="/work/journalism"><div><a className={isSelected(slug, 'journalism')}>Journalism</a></div></Link>
          <Link href="/work/open-source"><div><a className={isSelected(slug, 'open-source')}>Open Source</a></div></Link>
          <Link href="/work/publishing"><div><a className={isSelected(slug, 'publishing')}>Publishing</a></div></Link>
          <Link href="/work/research"><div><a className={isSelected(slug, 'research')}>Research</a></div></Link>
          <Link href="/work/science"><div><a className={isSelected(slug, 'science')}>Science</a></div></Link>
          </div>
      </div>
      <div className="work-details">
        { children }
      </div>
    </div>
    <style jsx>{`
      .work-nav-header {
        font-family: Helvetica, Arial, sans-serif;
        font-weight: bold;
        font-size: 14px;
        border-bottom: solid 1px black;
        padding-bottom: 10px;
        width: calc(100% - 25px);
      }

      .work-container {
        display: flex;
        max-width: ${CONTAINER_WIDTH};
      }

      .work-nav {
        flex: 25% 1;
      }
      .work-nav a {
        color: black;
        text-decoration: none;
        font-weight: normal;
      }


      .work-nav-list > div {
        cursor: pointer;
      }
      .work-nav-list div:hover a {
        font-weight: bold;
      }

      .work-nav-list {
        text-transform: uppercase;
        font-family: Helvetica, Arial, sans-serif;
        padding-top: 10px;
      }

      .work-nav-list > div {
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 12px;
      }

      .work-details {
        flex: 75% 3;
        padding-left: 25px;
      }

      .work-nav .selected {
        font-weight: bold;
      }

      @media all and (max-width: 900px) {
        .work-container {
          width: calc(100vw - 40px);
          flex-direction: column;

        }

        .work-nav {
          text-align: center;
          flex: auto;
          padding-bottom: 20px;
        }
        .work-details {
          flex: auto;
          width: 100%;
          max-width: none;
          padding-left: 0;
        }
        .work-details ul {
          padding-left: 10px;
        }
        .work-nav-header {
          width: 100%;
        }
      }

    `}
    </style>
  </div>
)

export default WorkLayout;