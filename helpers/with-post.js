import React from 'react'
import Post from '../components/post'
import Layout from '../components/layout';
import WritingLayout from '../components/writing-layout';

export default function WithPost(postData) {
  return class _WithPost extends React.Component {
    static async getInitialProps({ req }) {
      // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
      // return { userAgent }
      return {}
    }

    componentDidCatch() {

    }

    render() {
      return (
        <Layout smallIntro={true} slug="/writing">
          <WritingLayout back={true}>
            <Post {...postData} />
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
              font-family: 'Lora;
            }
          `}
          </style>
        </Layout>
      )
    }
  }
};