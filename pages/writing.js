import React from 'react'
import Layout from '../components/layout';
import WritingLayout from '../components/writing-layout';
import Link from 'next/link';

export default class extends React.Component {
  render() {
    return (
      <Layout title="Writing" slug="/writing">
        <WritingLayout>
          <section>
            <h4>Interactivity and Data Visualization</h4>
            <ul>
              <li><a href="https://mathisonian.github.io/kde/">Kernel Density Estimation</a>
              <span className="year"> — 2018 </span>
              </li>
              <li><a href="https://mathisonian.github.io/idyll/how-to-tune-a-guitar/">How To: Tune a Guitar</a>
              <span className="year"> — 2018 </span>
              </li>
              <li><a href="https://mathisonian.github.io/diy-data-fugazi/">The D-I-Y Data of Fugazi</a>
              <span className="year"> — 2018 </span>
              </li>
              <li><Link href="/writing/etymology-of-trig-functions"><a>The Etymology of Trig Functions</a></Link>
              <span className="year"> — 2017 </span>
              </li>
              <li><Link href="/writing/autumnal-colors"><a>Autumnal Colors</a></Link>
              <span className="year"> — 2017 </span>
              </li>
              <li><Link href="/writing/lorenz-attractor"><a>Lorenz Attractors</a></Link>
              <span className="year"> — 2017 </span>
              </li>
              <li><Link href="/writing/united-complaints-of-america"><a>Exploring the U.S. consumer complaint database</a></Link>
              <span className="year"> — 2017 </span>
              </li>
              <li><Link href="/writing/seattle-pds-dashcam-problem"><a>Visualizing Seattle PD's dashcam problem</a></Link>
              <span className="year"> — 2017 </span>
              </li>
              <li><Link href="/writing/music-vis"><a>Music oscillator visualization </a></Link>
              <span className="year"> — 2016 </span>
              </li>
              <li><a href="http://mathisonian.github.io/sunrise/">Sunrise and sunset times</a>
              <span className="year"> — 2015 </span>
              </li>
              <li><Link href="/writing/state-bar"><a>State shaped bar charts </a></Link>
              <span className="year"> — 2014 </span>
              </li>
            </ul>
          </section>
          <section>
            <h4>Technical</h4>
            <ul>
              <li><Link href="/writing/a-short-note-on-debuggers"><a>A Short Note on Debuggers</a></Link>
              <span className="year"> — 2018 </span>
              </li>
              <li><Link href="/writing/specialized-tools"><a>Specialized Tools</a></Link>
              <span className="year"> — 2018 </span>
              </li>
              <li><Link href="/writing/apparatus"><a>Using Apparatus with Idyll</a></Link>
              <span className="year"> — 2017 </span>
              </li>
              <li><Link href="/writing/nonlinear-range-sliders"><a>Nonlinear range sliders</a></Link>
              <span className="year"> — 2017 </span>
              </li>
              <li><a href="/writing/easy-responsive-svgs-with-viewbox">Easy responsive SVGs with ViewBox</a>
              <span className="year"> — 2016 </span>
              </li>
              <li><a href="/writing/using-symbolset-font-on-ios">Using the Symbolset font on iOS</a>
              <span className="year"> — 2013 </span>
              </li>
              <li><a href="/writing/postgres-full-text-search-with-sequelizejs">Postgres full-text search with Sequelize</a>
              <span className="year"> — 2013 </span>
              </li>
              <li><a href="/writing/hacking-breaking-news">Hacking breaking news</a>
              <span className="year"> — 2013 </span>
              </li>
            </ul>
          </section>
          {/* <section>
            <h4>Personal</h4>
            <ul>
              <li><Link href="/writing/keith"><a>The story of my close friend's death</a></Link>
               {' '}[warning] <span className="year"> — 2016</span>
              </li>
              <li><Link href="/writing/on-moving-to-the-nyc-tech-scene"><a>An introduction the New York tech scene</a></Link>
              <span className="year"> — 2013 </span>
              </li>
            </ul>
          </section> */}
        </WritingLayout>
        <style jsx>{`
          h1 {
            font-family: Helvetica, Arial, sans-serif;
          }
          h2 {
            font-family: Helvetica, Arial, sans-serif;
            font-weight: lighter;
          }
          div, p {
            font-family: 'Lora', serif;
          }
          a, a:visited {
            color: #000;
          }
          a:hover {
            color:
          }
          li {
            margin-bottom: 20px;
          }
          ul {
            list-style-type: none;
            margin-bottom: 30px;
          }

          h4 {
            margin-top: 0;
          }
          .year {
            // font-family: 'Lora';
            font-style: italic;
          }

          @media all and (max-width: 900px) {
            ul {
              padding-left: 0;
            }
          }
        `}
        </style>
      </Layout>
    )
  }
}