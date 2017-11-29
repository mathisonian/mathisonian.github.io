import React from 'react'
import Layout from '../components/layout';
import WorkLayout from '../components/work-layout';
import WorkItem from '../components/work-item';
import { Link } from '../routes';

export default class extends React.Component {
  static async getInitialProps({ req }) {
    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    // return { userAgent }
    return {}
  }

  componentDidCatch() {

  }

  render() {
    return (
      <Layout slug="/">
        <WorkLayout>
          <WorkItem
            title="Featured Project"
            subtitle="Idyll: interactive document language"
            image="idyll.png"
            >
            <p>
            Idyll is a tool that makes it easier to author interactive narratives for the web. The goal of the project is to provide a friendly markup language — and an associated toolchain — that can be used to create dynamic, text-driven web pages. <a target="_blank" href="https://idyll-lang.org">Learn more</a>.
            </p>
          </WorkItem>
          Use the links on the left to browse other projects;
          {' '}<Link to="/press"><a>click here</a></Link> for selected press.
        </WorkLayout>
        <style jsx>{`
          a, a:visited {
            color: #000;
          }
        `}
        </style>
      </Layout>
    )
  }
}