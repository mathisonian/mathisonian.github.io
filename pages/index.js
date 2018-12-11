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
            subtitle="Towards Design Principles for Visual Analytics in Operations Contexts"
            image="meridian.png"
            >
            <p>
            The Meridian system was designed for operations engineers at the NASA Jet Propulsion Laboratory. Engineers using the system are tasked with selecting a heading at which to park the rover and an overpassing satellite to connect to in order to maximize the amount of data transferred back to Earth.
            </p>
            <p>
            Through research, design, implementation, and informal evaluation of our new tool, we developed principles to inform the design of visual analytics systems in operations contexts. <a target="_blank" href="https://idl.cs.washington.edu/papers/meridian">Learn more</a>.
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