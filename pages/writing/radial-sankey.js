import WithPost from '../../helpers/with-post';
import Appartus from '../../components/idyll/apparatus';
import Easer from '../../components/idyll/easer';
import Center from '../../components/idyll/center';
import * as Components from 'idyll-components';
import { readFileSync } from 'fs';
import { join } from 'path';
const markup = readFileSync(join(__dirname, 'idyll', 'radial-sankey.idl'), 'utf8');

export default WithPost({
  title: 'Notes on the Sankey Diagram',
  subtitle: 'Experimenting with the structure of the classic flow diagram.',
  date: 'January, 2018',
  idyll: {
    components: Object.assign({}, Components, {
      apparatus: Appartus,
      center: Center,
      easer: Easer
    }),
    markup: markup
  }
});



