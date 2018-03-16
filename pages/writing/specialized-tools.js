import WithPost from '../../helpers/with-post';
import { Link } from '../../components/idyll/default';
import ReactTweetEmbed from 'react-tweet-embed';
import { readFileSync } from 'fs';
import { join } from 'path';

const markup = readFileSync(join(__dirname, 'idyll', 'specialized-tools.idl'), 'utf8');

export default WithPost({
  title: 'Specialized Tools',
  date: 'March 2018',
  subtitle: 'The JavaScript community should embrace and acknowledge diversity amongst technical problems.',
  idyll: {
    components: Object.assign({ Link }, {
      TweetEmbed: ReactTweetEmbed
    }),
    markup: markup
  },
  styles: `
    img: {
      height: auto;

    },

  `
});
