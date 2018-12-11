import React from 'react'
import Layout from '../components/layout';
import WorkLayout from '../components/work-layout';
import WorkItem from '../components/work-item';

export default class extends React.Component {
  static async getInitialProps({ req, query }) {
    return {
      category: query.category
    }
  }

  componentDidCatch() {

  }

  renderOpenSource() {
    return (
      <div>
          <WorkItem
          title="Idyll"
          subtitle="Interactive document language"
          image="idyll.png"
          >
          <p>
          Idyll is a tool that makes it easier to author interactive narratives for the web. The goal of the project is to provide a friendly markup language — and an associated toolchain — that can be used to create dynamic, text-driven web pages. <a target="_blank" href="https://idyll-lang.org">Learn more</a>.
          </p>
        </WorkItem>
        <WorkItem
          title="Lightning"
          subtitle="Data visualization management system"
          image="lightning.png" >
          <p>
          Lightning is a framework for interactive data visualization, including a server, visualizations, and client libraries.
          </p>
          <p>
          The Lightning server provides API-based access to reproducible, web-based visualizations. It can be deployed in many ways, including Heroku, Docker, a public server, a local app for OS X — and even a server-less version well-suited to notebooks like Jupyter. It comes bundled with a core set of visualizations, but is built to support custom ones. <a target="_blank" href="https://lightning-viz.org">Learn more</a>.
          </p>
        </WorkItem>
        <WorkItem
          title="Small modules" >
          <p>
          I maintain a number of small open source JavaScript modules; these modules have been downloaded over a million times in the past year alone.
          </p>
          <ul>
            <li>
              <a href="https://github.com/mathisonian/premonish" target="_blank">
                premonish
              </a> — predict which DOM element a user will interact with next.
            </li>
            <li>
              <a href="https://github.com/fivethirtyeight/d3-pre" target="_blank">
                d3-pre
              </a> — pre-render d3 visualizations.
            </li>
            <li>
              <a href="https://github.com/mathisonian/d3moji" target="_blank">
                d3moji
              </a> — first class emoji support for D3.
            </li>
            <li>
              <a href="https://www.npmjs.com/package/command-exists" target="_blank">
                command-exists
              </a> — node module to check if a command-line command exists in the current environment.
            </li>
            <li>
              <a href="https://www.npmjs.com/package/gulp-sass-bulk-import" target="_blank">
                gulp-sass-bulk-import
              </a> — a gulp plugin to import an entire folder of sass stylesheets.
            </li>
            <li>
              <a href="https://www.npmjs.com/package/svg-path-generator" target="_blank">
                svg-path-generator
              </a> — a plugin to make SVG path generation more readable by humans.
            </li>
            <li>
              <a href="https://www.npmjs.com/package/gulp-sri" target="_blank">
                gulp-sri
              </a> — a gulp plugin to generate SubReseource Integrity hashes.
            </li>
          </ul>
          <p>
            For a full list, see my <a target="_blank" href="https://github.com/mathisonian">GitHub profile</a>.
          </p>
        </WorkItem>
          <style jsx>{`
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
              padding-left: 0;
            }
          `}
          </style>
      </div>
    );
  }
  renderScience() {
    return (
      <div>
        <WorkItem title="Jet Propulsion Laboratory" subtitle="Optimizing data transmission from the Opportunity rover on Mars"  image="jpl.png" >
          <p>
          I spent the summer of 2017 at NASA's Jet Propulsion Laboratory, as part of a
          collaborative program between JPL, CalTech, and Art Center. I led the design and development of a visual analytics tool for NASA spacecraft systems engineers to optimize how data is transmitted from the <i>Opportunity</i> rover on Mars to overpassing relay satellites.
          </p>
          <p>
            The tool was developed using human-centered design techniques, including contextual inquiry, user interviews, paper prototyping, and a battery of user testing and design critiques. The system, named <i>Meridian</i>, is currently being developed for production
            deployment.
          </p>
        </WorkItem>
        <WorkItem title="Janelia Farm" subtitle="Mapping brain activity at scale" image="freemanlab.gif">
        <p>
        I worked in Jeremy Freeman's computational neuroscience lab at HHMI Janelia to develop a next-generation visualization pipeline for experimental analysis in scientific environments and efficient visual representations of large collections of data. The lab developed tools and analysis techniques for analyzing scientific data and collaborated with experimental neuroscience groups to apply these techniques.
        </p>
        <p>
        I was also involved in organizing <a target="_blank" href="http://codeneuro.org/">CodeNeuro</a>, a conference dedicated to bringing together neuroscientists, data scientists, and software engineers to collaborate on hard problems in science.
        </p>
        </WorkItem>
        <WorkItem title="Los Alamos National Laboratory" subtitle="Building a database to track nuclear waste" >
          <p>
          I spent two summers working as an intern at Los Alamos during my undergraduate years. During this time I helped develop a database system that would track the lab's production of nuclear waste, and ensure that storage was being properly handled to avoid nuclear criticality incidents.
          </p>
          <p>
          The system was a success and is currently in production use at Los Alamos.
          </p>
        </WorkItem>
          <style jsx>{`
            a, a:visited {
              color: #000;
            }
            a:hover {
            }
            li {
              margin-bottom: 20px;
              line-height: 18px;
              margin-left: 0;
              padding-left: 0;
            }
            ul {
              list-style-type: none;
              margin-bottom: 30px;
              margin-left: 0;
              padding-left: 0;
            }
          `}
          </style>
      </div>
    );
  }
  renderResearch() {
    return (
      <div>
        <WorkItem title="Interactive Data Lab" subtitle="Ph.D. Student"  image="idl.png" >
          <p>
          I am currently pursuing a Ph.D. in computer science at the University of Washington, advised by <a href="https://homes.cs.washington.edu/~jheer/" target="_blank">Jeffrey Heer</a> in the <a href="https://idl.cs.washington.edu/" target="_blank">Interactive Data Lab</a>. My work lies at the intersection of human computer interaction (HCI), and data visualization. Currently my primary focus is on exploring tools for creating and publish interactive documents for expository writing.
          </p>
        </WorkItem>
        <WorkItem
          title="Selected papers and presentations" >
          <ul>
            <li>
              <b>The Beginner's Guide to Dimensionality Reduction</b>: Matthew Conlen, Fred Hohman. <i>IEEE Vis Workshop on Visualization for AI Explainability</i> 2018. <a href="https://idyll.pub/post/dimensionality-reduction-293e465c2a3443e8941b016d/">Interactive Article</a>
            </li>
            <li>
              <b>Idyll: A Markup Language for Authoring and Publishing Interactive Articles on the Web</b>: Matthew Conlen, Jeffrey Heer. <i>UIST</i> 2018. <a href="/static/papers/2018-Idyll-UIST.pdf">PDF</a>
            </li>
            <li>
              <b>Towards Design Principles for Visual Analytics in Operations Contexts</b>: Matthew Conlen, Sara Stalla, Chelly Jin, Maggie Hendrie, Hillary Mushkin, Santiago Lombeyda, and Scott Davidoff. <i>CHI</i> 2018. <a href="/static/papers/towards-design-principles-for-visual-analtyics-in-operations-contexts.pdf">PDF</a>
            </li>
            <li>
            <b>Idyll: A domain specific language for the rapid development of interactive news articles</b>: Matthew Conlen and Jeffrey Heer. <i>Computation+Journalism Symposium</i>. 2017.
            </li>
            <li>
              <b>A Winning Strategy for Tic-Tac-Toe on an Affine Plane of Order 4</b>: Matthew Conlen and Juraj Milcak.<i> Joint Mathematics Meeting</i>. 2011.
            </li>
            <li>
            A Winning Strategy for Tic-Tac-Toe on an Affine Plane of Order 4: Matthew Conlen and Juraj Milcak. <i>Young Mathematicians Conference</i>. 2010.
            </li>
          </ul>
        </WorkItem>
        <style jsx>{`
          a, a:visited {
            color: #000;
          }
          a:hover {
          }
          li {
            margin-bottom: 20px;
            line-height: 18px;
            margin-left: 0;
            padding-left: 0;
          }
          ul {
            list-style-type: none;
            margin-bottom: 30px;
            margin-left: 0;
            padding-left: 0;
          }
        `}
        </style>
      </div>
    );
  }

  renderJournalism() {
    return (
      <div>
        <WorkItem title="Selected bylines">
          <ul>
            <li>
              <a href="https://www.cnn.com/election/2018/forecast/" target="_blank">CNN’s 2018 Election Forecast with Harry Enten</a> — CNN
            </li>
            <li>
              <a href="https://fivethirtyeight.com/features/gun-deaths/" target="_blank">Gun Deaths In America</a> — FiveThirtyEight. <i>Winner: Information is Beautiful, Data Visualization of the Year, Bronze.</i>
            </li>
            <li>
              <a href="https://www.newyorker.com/news/news-desk/interactive-how-to-save-the-democratic-party">How to Save the Democratic Party</a> — The New Yorker
            </li>
            <li>
              <a href="https://pudding.cool/2017/10/satellites/">Seeing Earth from Outer Space</a> — The Pudding
            </li>
            <li>
              <a href="https://fivethirtyeight.com/features/prison-reform-risk-assessment/" target="_blank">Should Prison Sentences Be Based On Crimes That Haven’t Been Committed Yet?</a> — FiveThirtyEight
            </li>
            <li>
              <a href="https://projects.fivethirtyeight.com/2016-election-forecast/" target="_blank">2016 Election Forecast</a> — FiveThirtyEight
            </li>
            <li>
              <a href="https://projects.fivethirtyeight.com/sumo/" target="_blank">A History of Sumo</a> — FiveThirtyEight
            </li>
            <li>
              <a href="http://www.vocativ.com/culture/society/generation-y/index.html">Turns Out That Under-25s Are Smarter and Safer Than Ever</a> — Vocativ
            </li>
          </ul>
        </WorkItem>
        <WorkItem title="FiveThirtyEight" image="fivethirtyeight.gif" >
        <p>
        I've worked with Nate Silver's <a target="_blank" href="https://fivethirtyeight.com">FiveThirtyEight</a> for several
        years in various capacities. I started with them in 2013 when the site launched under
        ESPN, authoring <a target="_blank" href="https://fivethirtyeight.com/interactives/march-madness-predictions/">the first interactive on the new site</a>. Since then, I worked to build an internal suite of
        tools to facilitate the production of high quality interactive graphics, and worked
        on many more public facing stories. I currently work with FiveThirtyEight on a part-time
        basis.
        </p>
        <p><small><i>See more at <a href="https://fivethirtyeight.com/contributors/matthew-conlen/">https://fivethirtyeight.com/contributors/matthew-conlen/</a>. The animation above was created by Allison McCann.</i></small></p>

        </WorkItem>
        <WorkItem title="The Huffington Post" image="huffpost2.png" >
        <p>
          I previously worked as a creative software developer and generalist hacker for The Huffington Post Labs, an internal R&D group dedicated to exploring new tools for journalists and readers.
        </p>
        <p>Projects included <i><a href="https://www.huffingtonpost.com/arianna-huffington/huffpost-highlights-lab_b_1840955.html" target="_blank">Highlights</a></i>, a machine-learning based technique to surface the most interesting quotes based on reader highlights and shares; <i><a href="http://techpresident.com/news/22993/how-people-brooklyn-dual-screened-vice-presidential-debate" target="_blank">Tomatovision</a></i>, an experimental interface that allowed viewers to overlay emojis onto live video feeds to display their feelings (years before Facebook Live!); <i>Petri</i>, an
          open-source platform for community building and management. We also built tools for crowd-sourcing audio transcriptions of articles and for readers to have civil debates about
          divisive topics.
        </p>
          </WorkItem>
          <style jsx>{`
            a, a:visited {
              color: #000;
            }
            a:hover {
            }
            li {
              margin-bottom: 20px;
              line-height: 18px;
              margin-left: 0;
              padding-left: 0;
            }
            ul {
              list-style-type: none;
              margin-bottom: 30px;
              margin-left: 0;
              padding-left: 0;
            }
          `}
          </style>
      </div>
    )
  }

  renderOther() {
    return (
      <div>
        <WorkItem title="Rhizome" image="rhizome.png" >
        <p>
        <a href="https://rhizome.org" target="_blank">Rhizome</a> is a not-for-profit arts organization that supports and provides a platform for new media art. I worked as their senior developer for a period of time, managing the technical direction of the organization. Most notably, I rebuilt their website from the ground up, in collaboration with designers at Weiden+Kennedy.
        </p>

        </WorkItem>
          <style jsx>{`
            a, a:visited {
              color: #000;
            }
            a:hover {
            }
            li {
              margin-bottom: 20px;
              line-height: 18px;
              margin-left: 0;
              padding-left: 0;
            }
            ul {
              list-style-type: none;
              margin-bottom: 30px;
              margin-left: 0;
              padding-left: 0;
            }

            @media all and (max-width: 900px) {
              ul {
                padding-left: 0;
              }
            }
          `}
          </style>
      </div>
    )
  }

  renderDetails() {
    switch (this.props.category) {
      case 'journalism':
        return this.renderJournalism();
      case 'science':
        return this.renderScience();
      case 'open-source':
        return this.renderOpenSource();
      case 'research':
        return this.renderResearch();
      case 'other':
        return this.renderOther();
    }
  }

  render() {
    return (
      <Layout title="Work" slug="/">
        <WorkLayout slug={this.props.category}>
          {this.renderDetails()}
        </WorkLayout>
      </Layout>
    )
  }
}