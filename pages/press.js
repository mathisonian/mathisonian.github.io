import React from 'react'
import Layout from '../components/layout';
import PressLayout from '../components/press-layout';

export default class extends React.Component {
  static async getInitialProps({ req, query }) {
    return {
      category: query.category
    }
  }

  componentDidCatch() {

  }

  render() {
    return (
      <Layout title="Press" slug="/press">
        <PressLayout>
          <section>
            <h4>2019</h4>
            <ul>
              <li>
                <a href="https://wonkhe.com/blogs/simulating-university-life-from-feast-to-famine/">
                Simulating university life: from feast to famine
                </a>
                <span className="source">— Wonkhe</span>
              </li>
              <li>
                <a href="https://www.fastcompany.com/90353987/the-secret-life-of-a-jpeg">
                The secret life of a JPEG
                </a>
                <span className="source">— Fast Company</span>
              </li>
              <li>
                <a href="https://www.microsiervos.com/archivo/ordenadores/viaje-interactivo-archivo-jpeg-explicaciones-byte-a-byte.html">
                  Viaje interactivo a las entrañas de un archivo JPEG con explicaciones detalladas byte a byte
                </a>
                <span className="source">— microsiervos</span>
              </li>
              <li>
                <a href="http://www.visualisingdata.com/2019/02/10-significant-visualisation-developments-july-to-december-2018/">
                  10 Significant Visualization Developments: July to December 2018
                </a>
                <span className="source">— Visualizing Data</span>
              </li>
            </ul>
          </section>
          <section>
            <h4>2018</h4>
            <ul>
              <li>
                <a href="https://www.cc.gatech.edu/news/615416/designers-programmers-and-researchers-join-forces-create-new-kind-digital-magazine">
                Designers, Programmers, and Researchers Join Forces to Create a New Kind of Digital Magazine Called the Parametric Press
                </a>
                <span className="source">— Georgia Tech CSE</span>
              </li>
              <li>
                <a href="https://flowingdata.com/2018/12/27/kernel-density-estimation-explainer/">
                Kernel density estimation explainer
                </a>
                <span className="source">— FlowingData</span>
              </li>
              <li>
                <a href="https://www.cjr.org/special_report/2018-midterms-forecasts-538-cnn-times-needle.php">
                Forecasting the midterms: Uncertainty with a chance of finger-pointing
                </a>
                <span className="source">— Columbia Journalism Review</span>
              </li>
              <li>
                <a href="http://www.visualisingdata.com/2018/12/best-of-the-visualisation-web-october-2018/">
                  Best of the Visualization Web, October 2018
                </a>
                <span className="source">— Visualizing Data </span>
              </li>
              <li>
                <a  href="https://medium.com/swlh/make-your-app-stand-out-with-data-driven-stories-b6d6f2c2449c">
                  Idyll-lang: Make your app stand out with interactive data-driven stories
                </a>
                <span className="source">— The Startup | Medium </span>
              </li>
              <li>
                <a href="http://www.visualisingdata.com/2018/09/best-of-the-visualisation-web-june-2018/">
                  Best of the Visualization Web, June 2018
                </a>
                <span className="source">— Visualizing Data </span>
              </li>
              <li>
                <a href="https://gigazine.net/news/20180509-how-to-tune-guitar/">
                  ギターを耳でチューニングする方法がわかる「How To: Tune a Guitar」
                </a>
                <span className="source">— GIGAZINE {' '}
                <a href="https://gigazine.net/gsc_news/en/20180509-how-to-tune-guitar/">
                  (english)
                </a></span>
              </li>
              <li>
                <a href="https://tympanus.net/codrops/collective/collective-414/">
                  A beautiful and interactive guide that will teach you how to tune a guitar.
                </a>
                <span className="source">— Codrops: Collective</span>
              </li>
            </ul>
          </section>
          <section>
            <h4>2017</h4>
            <ul>
              <li>
                <a href="http://www.visualisingdata.com/2017/12/best-visualisation-web-october-2017/">
                  Best of the Visualization Web, October 2017
                </a>
                <span className="source">— Visualizing Data </span>
              </li>
              <li>
                <a href="https://survivejs.com/blog/idyll-interview/">
                  Idyll - Narratives for the web - Interview with Matthew Conlen
                </a>
                <span className="source">— SurviveJS</span>
              </li>
            </ul>
          </section>
          <section>
            <h4>2016</h4>
            <ul>
              <li>
                <a href="https://www.cjr.org/q_and_a/could_explorable_explanations_help_tell_a_new_kind_of_story.php">
                Could ‘explorable explanations’ help tell a new kind of story?
                </a>
                <span className="source">— Columbia Journalism Review</span>
              </li>
              <li>
                <a href="https://javascriptweekly.com/issues/313">
                  premonish: Predicts Which DOM Element A User Will Interact With Next
                </a>
                <span className="source">— JavaScript Weekly </span>
              </li>
              <li>
                <a href="https://www.livescience.com/56881-information-is-beautiful-awards.html">
                  Winning Data Visualizations Reveal Information Is Beautiful
                </a>
                <span className="source">— Live Science </span>
              </li>
              <li>
                <a href="https://theundefeated.com/features/fivethirtyeight-breaks-down-the-more-than-33000-annual-u-s-gun-deaths/">
                FiveThirtyEight breaks down the more than 33,000 annual U.S. gun deaths
                </a>
                <span className="source">— The Undefeated </span>
              </li>
              <li>
                <a href="https://flowingdata.com/2016/05/16/history-of-sumo-charted/">
                  History of Sumo charted
                </a>
                <span className="source">— Flowing Data </span>
              </li>
              <li>
                <a href="http://mashable.com/2016/02/12/facebook-votes-president/#CSV4s7m7ruqc">
                  Here’s who would be president if Facebook likes counted as votes
                </a>
                <span className="source">— Mashable </span>
              </li>
            </ul>
          </section>
          <section>
            <h4>2015</h4>
            <ul>
              <li>
                <a href="http://www.artnews.com/2015/11/02/under-construction-since-1996-rhizomes-newly-remodeled-website-makes-debut/">
                ‘Under Construction Since 1996’: Rhizome’s Newly Remodeled Website Debuts
                </a>
                <span className="source">— Art News </span>
              </li>
              <li>
                <a href="https://flowingdata.com/2015/08/04/criminal-sentencing-with-probabilities-and-uncertainty/">
                Criminal sentencing and a stat lesson on probabilities and uncertainty
                </a>
                <span className="source">— Flowing Data </span>
              </li>
              <li>
                <a href="https://www.simonsfoundation.org/2015/05/15/simons-collaboration-on-the-global-brain-investigator-co-organizes-codeneuro-event/">
                Simons Collaboration on the Global Brain Investigator Co-Organizes CodeNeuro Event
                </a>
                <span className="source">— Simons Foundation </span>
              </li>
            </ul>
          </section>
          <section>
            <h4>2014</h4>
            <ul>
            <li>
              <a href="https://www.livescience.com/56881-information-is-beautiful-awards.html">
                FiveThirtyEight Launches, Unveils March Madness Predictions
              </a>
              <span className="source">— U.S. News & World Report</span>
            </li>
            <li>
              <a href="https://www.salon.com/2014/08/02/everything_youve_heard_about_millennials_is_wrong_partner/">
                Everything you’ve heard about millennials is wrong
              </a>
              <span className="source">— Salon </span>
            </li>
            </ul>
          </section>
          <section>
            <h4>2012</h4>
            <ul>

            <li>
              <a href="https://techcrunch.com/2012/08/29/huffington-post-now-has-its-own-labs-site-for-online-news-experiments/">
                Huffington Post Now Has Its Own “Labs” Site For Online News Experiments
              </a>
              <span className="source">— Tech Crunch </span>
            </li>
            <li>
              <a href="http://techpresident.com/news/22993/how-people-brooklyn-dual-screened-vice-presidential-debate">
                How People in Brooklyn "Dual-Screened" the Vice Presidential Debate
              </a>
              <span className="source">— Tech President </span>
            </li>
            </ul>
          </section>
          <section>
            <h4>2011</h4>
            <ul>
              <li>
                <a href="https://creators.vice.com/en_us/article/kbgvme/meet-the-winners-of-art-hack-weekend">
                  Meet The Winners Of Art Hack Weekend
                </a>
                <span className="source">— Vice </span>
              </li>
            </ul>
          </section>
        </PressLayout>
        <style jsx>{`
          .source {
            display: block;
            font-style: italic;
            margin-top: 10px;
            margin-left: 10px;
          }

          h4 {
            margin-top: 0;
          }
          a, a:visited {
            color: #000;
          }
          a:hover {
          }
          li {
            margin-bottom: 20px;
            line-height: 18px;
          }
          ul {
            list-style-type: none;
            margin-bottom: 30px;
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