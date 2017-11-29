import WithPost from '../../helpers/with-post';
import { Range, Display } from 'idyll-components';

export default WithPost({
  // title: 'A post made with Idyll',
  idyll: {
    components: {
      range: Range,
      display: Display
    },
    markup: `
      # This post written with Idyll

      I'll declare a var and use it in this post.

      [var name:"x" value:0  /]

      [Range value:x min:-100 max:100 /]

      [Display var:x /]
    `
  }
});
