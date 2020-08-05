import React from 'react'
import Layout from '../components/layout';
import WorkLayout from '../components/work-layout';
import WorkItem from '../components/work-item';
import Link from 'next/link';

export default class extends React.Component {
  render() {
    return (
      <Layout slug="/">
        <WorkLayout>
          <WorkItem
            title="Featured Project"
            subtitle="Parametric Press"
            image="parametric.png"
            url="https://parametric.press/"
            >
            <p>
            An interactive magazine that I help create. The articles use simulations and visualizations to tell
            data-driven stories.
            </p>
          </WorkItem>
          Use the links on the left to browse other projects;
          {' '}<Link href="/press"><a>click here</a></Link> for selected press.
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