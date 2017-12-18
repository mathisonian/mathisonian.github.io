import WithPost from '../../helpers/with-post';
import * as Components from '../../components/idyll/default';
import ReactTweetEmbed from 'react-tweet-embed';

console.log(Components);

export default WithPost({
  title: 'Specialized Tools',
  date: 'December 2017',
  subtitle: 'The JavaScript community should embrace and acknowledge diversity amongst technical problems.',
  idyll: {
    components: Object.assign({}, Components, {
      TweetEmbed: ReactTweetEmbed
    }),
    markup: `
      There are about 3.6 million software developers in the United States,
      and over 18 million worldwide. According to a survey conducted by Stack Overflow,
      about 50% of the 50 million programmers who use the site each month
      are interested in JavaScript.

      [var name:"showTreeMachine" value:0 /]

      That's a lot of people. And they're solving a lot of different problems.
      Some just want to put a simple website online. [Action onClick:\`showTreeMachine = 1\`] Sometimes you
      need a machine that's really great at turning trees into logs.[/Action]


      [img style:\`{height: "400px", margin: "30px auto", opacity: showTreeMachine }\` src:"http://i.imgur.com/QXaORxD.gif" /]



      [TweetEmbed id:"933447631514169344" /]



    `
  },
  styles: `
    img: {
      height: auto;

    },

  `
});
