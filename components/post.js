
import React from 'react';
import dynamic from 'next/dynamic'

export const hashCode = (str) => {
  var hash = 0;
  var i;
  var chr;
  if (str.length === 0) {
    return hash;
  }
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};


export default class Post extends React.Component {

  renderIdyll() {
    const { idyll } = this.props;
    const IdyllDocument = dynamic(import('idyll-document'));
    const compile = require('idyll-compiler');
    return <IdyllDocument
      ast={compile(idyll.markup)}
      components={idyll.components}
      key={hashCode(idyll.markup)}
      datasets={{}} />
  }
  render() {
    const { title, idyll, iframe, image, html, subtitle, date, children } = this.props;
    return (
      <div className="post">
        <div className="post-header">
        {
         title ? title : null
        }
        {
         subtitle ? <div className="subtitle">{subtitle}</div> : null
        }
        </div>
        {
          image ? (
            <div className="post-image" style={{backgroundImage: `url(/static/img/${image})`}} />
          ) : null
        }

        <div className="post-details">
          {
          date ? <div className="date">{date}</div> : null
          }
          {
            html ? <div style={{}} dangerouslySetInnerHTML={{__html: html }} /> : null
          }

          {
            idyll ? this.renderIdyll() : null
          }
          {
            iframe ? <iframe src={iframe.src} style={{height: iframe.height}} frameBorder="0" /> : null
          }

          {children}
        </div>

        <style jsx>{`
          .post-header {
            font-family: Helvetica, Arial, sans-serif;
            font-weight: bold;
            font-size: 28px;
            // line-height: 20px;
          }

          .post-header .subtitle {
            padding-top: 5px;
            font-weight: 300;
            font-size: 18px;
            // font-style: italic;
          }

          .post-details {
            font-family: 'Lora', serif;
            font-size: 14px;
            line-height: 18px;
            // max-width: 500px;
            // width: 100%;
            margin-top: ${title ? '14px' : '0'};
          }

          .post-details img {
            max-width: 100%;
            display: block;
            margin: 0 auto;
          }

          .post-details iframe {
            width: 100%;
            height: auto;
            overflow-y: hidden;
          }

          .post-image {
            height: 200px;
            width: 100%;
            margin-top: 14px;
            background-size: 100%;
            background-position: center center;
            background-repeat: no-repeat;
          }

          .post {
            margin-bottom: 56px;
          }

          .date {
            // font-weight: lighter;
            font-family: 'Lora', serif;
            // font-style: italic;
            line-height: 0;
            margin-bottom: 30px;
            // font-size: 14px;

          }
        `}
        </style>
        <style global jsx>{`

          hr {
            color: black;
            margin 3em 0;
          }
          a  {
            cursor: pointer;
          }
          .post-details img {
            max-width: 100%;
            display: block;
            margin: 0 auto;
          }

          .post-details li {
            margin-bottom: 30px;
          }

          .post-details a {
            color: #5601FF;
          }

          .post-details iframe {
            display: block;
            margin: 30px auto;
          }

          .post-details a {
            color: #000;
            cursor: pointer;
          }
          .post-details input {
            padding-top: 15px;
            padding-bottom: 15px;
          }
          .post-details h1,
          .post-details h2,
          .post-details h3,
          .post-details h4,
          .post-details h5,
          .post-details h6 {
            margin-top: 45px;
          }
        `}</style>
      </div>
    )
  }
};