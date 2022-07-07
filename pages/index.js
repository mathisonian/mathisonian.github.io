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
            subtitle="Idyll: Interactive Document Language"
            image="idyll.png"
            >
            <p>
            Idyll is a tool that makes it easier to author <a href="https://explorabl.es/">explorable explanations</a> for the web. The goal of the project is to provide a friendly markup language — and an associated toolchain — that can be used to create dynamic, data-driven web pages. <a target="_blank" href="https://idyll-lang.org">Learn more</a>.
            </p>
          </WorkItem>

          {/* <WorkItem
            title="Featured Project"
            subtitle="NASA Climate"
            image="climate.png"
            url="https://climate.nasa.gov/"
            >
            <p>
            I worked with researchers and communications experts at NASA's Jet Propulsion Laboratory to help design new ways of visualizing the massive
            quantities of climate change, like the <a href="https://climate.nasa.gov/news/2933/visualizing-the-quantities-of-climate-change/">amount of ice that has melted</a> or the <a href="https://climate.nasa.gov/news/3020/how-much-carbon-dioxide-are-we-emitting/">tons of CO₂ emitted</a> due to human activity.
            </p>
          </WorkItem> */}
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