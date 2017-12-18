import Link from 'next/link'
import Head from 'next/head'
import Fonts from './fonts';
import { BLACK } from '../config/colors';
import { CONTAINER_WIDTH } from '../config/layout';
import { logPageView, initGA } from '../helpers/analytics';


const margin = {
  top: '75px',
  left: '100px',
  right: '100px',
  bottom: '50px'
};

const illustrations = [{
  image: 'hawk.png',
  height: '125px'
}, {
  image: 'bird.png'
}, {
  image: 'giraffe.png',
  height: '125px',
  right: '-15px'
}, {
  image: 'moth.png',
  height: '125px'
}, {
  image: 'bear.png',
  width: '115px',
  height: '125px'
}, {
  image: 'fox.png',
  // width: '115px',
  // height: '125px'
}, {
  image: 'camel.png',
  // width: '115px',
  // height: '125px'
}, {
  image: 'aardvark.png',
  // width: '115px',
  // height: '125px'
},
// {
//   image: 'flower.png',
//   // width: '115px',
//   // height: '125px'
// },
{
  image: 'mushroom.png',
  // width: '115px',
  height: '140px'
}, {
  image: 'caterpillar.png',
  // width: '115px',
  width: '150px'
}, {
  image: 'slug.png',
  // width: '115px',
  width: '150px'
}, {
  image: 'berries.png'
}, {
  image: 'cat.png'
}]

let illo = null;


const isSelected = (slug, name) => {
  return slug === name ? 'selected' : ''
};


export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showContact: false,
      illustration: illo
    }
    this.toggleContact = this.toggleContact.bind(this);
  }

  componentDidMount() {
    if (!illo) {
      illo = illustrations[Math.floor(Math.random()*illustrations.length)];
      this.setState({
        illustration: illo
      });

      Fonts();
    }
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  toggleContact() {
    this.setState({
      showContact: !this.state.showContact
    })
  }

  getTitle() {
    const { title } = this.props;
    return title ? `${title} | Matthew Conlen (mathisonian)` : 'Matthew Conlen (mathisonian)';
  }

  getDescription() {
    const { subtitle } = this.props;
    return subtitle ? subtitle : 'Matthew Conlen is a computer science researcher and information designer based in Seattle, Washington. He collaborates with journalists, scientists, and engineers to tell stories and unlock insights with data.';
  }

  render() {
    const { children, title, slug, smallIntro, hideIllo } = this.props;
    const { illustration } = this.state;

    return (
      <div className="outer-container">
        <Head>
          <title>{this.getTitle()}</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta property='og:title' content={this.getTitle()} />
          <meta property='og:url' content='https://mathisonian.com' />
          <meta property='og:type' content='website' />
          <meta property='og:description' content={this.getDescription()} />
          <meta property='og:image' content='https://mathisonian.com/static/img/illustrations/berries.png' />
          <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
        </Head>
        <div className="content-container">

            <div className="illustration">
            {
              !hideIllo && illustration ? (
                <div>
                  <img src={`/static/img/illustrations/${illustration.image}`} />
                  <div className="caption">
                    Images from <a href="https://www.flickr.com/search/?tags=bookcollectionbiodiversity" taget="_blank">Biodiversity Heritage Library</a>.
                    Reload for a new illustration.
                  </div>
                </div>
              ) : null
            }
          </div>
          <div className="intro">
            <b>Matthew Conlen</b> is a computer science researcher and information designer based in Seattle, Washington. He collaborates with journalists, scientists, and engineers to tell stories and unlock insights with data.
          </div>
          <div className="layout-page-container">
            { children }
          </div>
          <header>
            <nav>
            <Link preload href='/'><div><a className={isSelected(slug, '/')}>Work</a></div></Link>
            <Link preload href='/writing'><div><a className={isSelected(slug, '/writing')}>Writing</a></div></Link>
            <Link preload href='/press'><div><a className={isSelected(slug, '/press')}>Press</a></div></Link>
            <div><a className={`no-border ${this.state.showContact ? 'selected' : ''}`} onClick={this.toggleContact}>Contact</a></div>
            <div className={`contact`}>
            <div><Link href='mailto:contact@mathisonian.com'><a>Email</a></Link></div>
            <div><Link href='https://github.com/mathisonian'><a>GitHub</a></Link></div>
            <div><Link href='https://twitter.com/mathisonian'><a>Twitter</a></Link></div>
            </div>
            </nav>
          </header>
        </div>
        <style jsx global>{`
          * {
            box-sizing: border-box;
          }
          body, html {
            margin: 0;
            padding: 0;
          }
          html {
            opacity: 0;
            transition: opacity 0.25s ease-in;
          }
          html.loaded {
            opacity: 1;
          }
        `}
        </style>
        <style jsx>{`
          .layout-page-container {
            margin-top: ${smallIntro ? '45px' : '60px'};
          }
          .content-container {
            // border: solid 8px ${BLACK};
            // height: 100vh;
            padding-left: ${margin.left};
            padding-right: ${margin.right};
            padding-top: ${margin.top};
            padding-bottom: ${margin.bottom};
            // overflow-y: auto;
          }


          .content-container::-webkit-scrollbar {
            display: none;
          }
          .intro {
            font-family: 'Lora', serif;
            font-size: ${smallIntro ? '14px' : '18px'};
            // letter-spacing: -1.1px;
            line-height: ${smallIntro ? '18px' : '25px'};
            max-width: ${smallIntro ? `calc(0.75 * ${CONTAINER_WIDTH})` : CONTAINER_WIDTH};
          }

          nav {
            position: fixed;
            right: ${margin.right};
            top: ${margin.top};
          }
          nav div {
            text-align: right;
            padding-top: 17px;
          }

          .illustration {
            position: fixed;
            right: calc(${margin.right} - 37.5px);
            bottom: ${margin.bottom};
          }
          .illustration > div {
            position: relative;
            text-align: center;
            max-width: 175px;
            right: ${illo && illo.right ? illo.right : '-30px'};
          }
          .illustration img {
            max-height: ${illo && illo.height ? illo.height : '100px'};
            max-width: ${illo && illo.width ? illo.width : '100px'};
            position: relative;
            z-index: -1;
          }
          .illustration .caption,
          .illustration .caption a {
            transition: all 0.15s;
            font-size: 10px;
            font-family: 'Lora', serif;
            font-style: italic;
            color: #ddd;
            margin-top: 15px;
          }
          .illustration:hover .caption,
          .illustration:hover .caption a {
            background: #efefef;
            color: #000;
          }

          nav a {
            font-family: Helvetica, Arial, sans-serif;
            cursor: pointer;
            color: #000;
            text-decoration: none;
            font-weight: 300;
            // text-transform: uppercase;
            font-size: 14px;
            padding-right: 15px;
            margin-right: -15px;
          }
          nav > div:hover > a,
          nav a.selected {
            border-right: solid 2px black;
            margin-right: -17px;
            font-weight: 500;
          }
          nav > div {
            cursor: pointer;
          }

          nav .contact {
            padding-top: 0;
            opacity: ${this.state.showContact ? 1 : 0};
            transition: opacity 0.25s;
          }
          nav .contact a {
            size: 10px;
            text-transform: none;
            color: #000;
          }
          a, a:visited {
            color: #000;
          }


          @media all and (max-width: 900px) {
            .content-container {
              padding-left: 20px;
              padding-right: 80px;
              padding-top: 10px;
              padding-bottom: 10px;
            }

            nav {
              right: 20px;
              top: 0;
            }


            .illustration {
              display: none;
            }
          }
          @media all and (max-width: 700px) {
            .content-container {
              padding-left: 20px;
              padding-right: 20px;
              padding-top: 10px;
              padding-bottom: 10px;
            }
            nav {
              margin-top: 60px;
              position: static;
              width: 100%;
              text-align: center;
            }
            nav div {
              width: 100%;
              text-align: center;
            }
            nav  a {
              margin-right: 0;
            }
            nav > div:hover > a,
            nav a.selected {
              border-right: none;
              margin-right: 0;
            }

          }
        `}
      </style>
      <style jsx global>{`
        h1,h2,h3,h4,h5,h6 {
          font-family: Helvetica, Arial, sans-serif;
        }
      `}</style>
    </div>
    )
  }
}