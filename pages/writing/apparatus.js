import WithPost from '../../helpers/with-post';
import Appartus from '../../components/idyll/apparatus';
import Easer from '../../components/idyll/easer';
import Center from '../../components/idyll/center';
import * as Components from 'idyll-components';

export default WithPost({
  title: 'Using Apparatus with Idyll',
  date: 'November, 2017',
  idyll: {
    components: Object.assign({}, Components, {
      apparatus: Appartus,
      center: Center,
      easer: Easer
    }),
    markup: `

      Apparatus is a hybrid graphics editor and programming environment for creating interactive diagrams. In this post
      I'll show how Apparatus graphics can be embedded in Idyll documents, and how a two way binding between Idyll variables
      and Apparatus attributes can be created.

      ## Embedding

      First, we need an Apparatus figure. I'll use an existing example
      from [http://aprt.us/editor/viewer-test/javascript.html](http://aprt.us/editor/viewer-test/javascript.html) for the purposes of this walkthrough. It displays a visual technique for thinking about summations of odd numbers: they always add to a perfect square!
      Drag the handle in this graphic to see:

      [var name:"_n" value:0 /]
      [var name:"roi" value:\` { x: [-1.5, 7.5], y: [-1.5, 7.5 ] } \` /]

      [Apparatus
        _url: "http://aprt.us/editor/viewer-test/sum-of-odds.json"
        _regionOfInterest: roi
        _width: 300
        _height: 300
        N:_n  /]

      Internally, this Apparatus figure keeps track of a single state variable, \`N\`, that determines how things are drawn.
      Currently \`N\` is [Display var:_n format:"d" /].

      I've created a new Apparatus component that makes it easy to embed these graphics
      in your Idyll documents. Here's the code to embed that interactive graphic:

      \`\`\`md
[Apparatus
  _url: "http://aprt.us/editor/viewer-test/sum-of-odds.json"
  _regionOfInterest: roi
  _width: 300
  _height: 300 /]
      \`\`\`

      ## Communicating with the document

      The above code is nice in that it makes things easy to embed, but it doesn't really *do* a whole lot.
      Idyll's reactive variable system is a natural match for the architecture that Apparatus uses, and this new
      component makes it easy to create two way bindings between Idyll variables and Apparatus attributes.

      For example, I can create an Idyll variable, and connect it to the \`N\` attribute:

      [var name:"N" value:0 /]

      [center]
      **Move slider to update Idyll variable.**
      [br/]
      [Range value:N min:0 max:10 /]
      [br/]
      [Display var:N /]
      [br/]

      [br/]
      **Drag on the square below and notice the slider move.**
      [/center]

      [Apparatus
        _url: "http://aprt.us/editor/viewer-test/sum-of-odds.json"
        _regionOfInterest: roi
        _width: 300
        _height: 300
        N:N /]


      Updating works in both directions! Here's the code to make this work:

      \`\`\`md
[var name:"IdyllN" value:0 /]

**Move slider to update Idyll variable:**
[Range value:IdyllN min:0 max:10 /]
[Display var:IdyllN /]

**Drag on the square below and notice the slider move.**
[Apparatus
  _url: "http://aprt.us/editor/viewer-test/sum-of-odds.json"
  _regionOfInterest: roi
  _width: 300
  _height: 300
  N:IdyllN /]
      \`\`\`

      This code creates a variable in Idyll, called \`IdyllN\` and binds it to the \`N\` attribute from
      apparatus. If you interact with the Apparatus figure and change the size of the square, this change gets propagated back
      to Idyll. Similarly, taking an action that would modify the Idyll variable, for example moving a slider, will also
      cause the Apparatus figure to get updated.


    ## For fun


    [var name:"growth" value:0 /]
    [var name:"roi2" value:\`{ x: [-5, 5], y: [-8, 8] }\` /]

    Here's another example, modified from Bret Victor's figure on the Apparatus example gallery.
    It's a fully interactive Apparatus figure; click and drag the sun to change the time of
    day and growth of the plant.


    [display var:x /]

    [Apparatus
      _url: "https://rawgit.com/mathisonian/d0946ec277daa876bf2157483123c479/raw/eb82e9ef390c214c86504d1d76c666ce8f763a3a/potted%2520plant%2520(1).json"
      _regionOfInterest: roi2
      _width: "100%"
      _height: 400
      growth:growth /]


    By parameterizing the figure with Idyll variables, we can turn this into an
    animated graphic:

    [center]
    [easer value:growth targetValue:17 ] Make it day [/easer]

    [easer value:growth targetValue:-1.5 ] Make it night [/easer]
    [/center]
    `
  }
});
