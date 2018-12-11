import WithPost from '../../helpers/with-post';
import { Link } from '../../components/idyll/default';
import { readFileSync } from 'fs';
import { join } from 'path';

const markup = readFileSync(join(__dirname, 'idyll', 'debuggers.idl'), 'utf8');

export default WithPost({
  title: 'A Short Note on Debuggers',
  date: 'May 2018',
  idyll: {
    components: Object.assign({ Link }, {
    }),
    markup: markup
  },
  styles: `
    img: {
      height: auto;
    },

  `
});
