import WithPost from '../../helpers/with-post';
import * as Components from 'idyll-components';
import { readFileSync } from 'fs';
import { join } from 'path';
const markup = readFileSync(join(__dirname, 'idyll', 'sci-fi.idl'), 'utf8');

export default WithPost({
  title: 'How to live forever.',
  subtitle: '',
  date: 'January, 2018',
  idyll: {
    components: Components,
    markup: markup
  }
});



