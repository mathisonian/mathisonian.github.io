import WithPost from '../../helpers/with-post';

const markup = `
I think I’ve finally identified why I (almost) always prefer inline print statements over a real debugger.
It comes down to intention and the task at hand.

When writing console.log you are effectively creating your own custom interface into the state of a program at a particular time, surfacing only the information you care about, and are able to display it in an annotated and prioritized way that is appropriate for the situation.

With debuggers you get a way to see a program state where each variable is given uniform weight, and the display knows nothing about the semantics of the variables beyond what might be obvious in their name. The interface is optimized to step a user through the program over time. If navigation is necessary it would probably better be targeted at traveling backwards from a breakpoint, to points where some specified variable was modified.
`;

export default WithPost({
  title: 'A Short Note on Debuggers',
  date: 'May 2018',
  idyll: {
    components: {},
    markup: markup
  },
  styles: `
    img: {
      height: auto;
    },

  `
});
