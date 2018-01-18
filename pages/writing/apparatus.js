import WithPost from '../../helpers/with-post';
import Appartus from '../../components/idyll/apparatus';
import Easer from '../../components/idyll/easer';
import Center from '../../components/idyll/center';
import * as Components from 'idyll-components';

export default WithPost({
  title: 'Using Apparatus with Idyll',
  subtitle: 'Combining the two tools gets us one step closer to an authoring environment with interactivity at its core.',
  date: 'December, 2017',
  idyll: {
    components: Object.assign({}, Components, {
      apparatus: Appartus,
      center: Center,
      easer: Easer
    }),
    markup: `

      [Apparatus](http://aprt.us/), a project by [Toby Schachman](http://tobyschachman.com/) and [Joshua Horowitz](http://joshuahhh.com/), is a hybrid graphics editor and programming environment for creating interactive diagrams. They offer an [online editor](http://aprt.us/) that allows authors to use a direct-manipulation
      style interface to create paramaterized interactive widgets. This video offers a quick overview:

      [iframe src:"https://player.vimeo.com/video/140304675" width:420 height:263 frameBorder:0 webkitallowfullscreen:"true" mozallowfullscreen:"true" allowfullscreen:"true" /]

      In this post
      I'll show how Apparatus graphics can be embedded in [Idyll documents](http://idyll-lang.org/), and how a two way binding between Idyll variables
      and Apparatus attributes can be created.

      ## Embedding

      First, we need an Apparatus figure. I'll use an [existing example](http://aprt.us/editor/viewer-test/javascript.html) for the purposes of this walkthrough. It displays a visual technique for thinking about summations of consecutive odd numbers starting with one: they always add to a perfect square!
      Drag the handle in this graphic to see:

      [var name:"_n" value:0 /]
      [var name:"roi" value:\` { x: [-1.5, 7.5], y: [-1.5, 7.5 ] } \` /]

      [Apparatus
        _url: "https://cdn.rawgit.com/mathisonian/3ad1fbf668086b5e4c742abfebbff541/raw/4a443db3db931c459b563bdea5323df75947d4ea/sum-of-odds.json"
        _regionOfInterest: roi
        _width: 300
        _height: 300
        N:_n  /]

      The graphic provides a geometric intuition for why this mathematical statement would hold true. The next odd number always completes the next outer "layer" of the square.
      Internally, this Apparatus figure keeps track of a single state variable, \`N\`, that determines how things are rendered on your screen. Currently \`N\` is [Display var:_n format:"d" /].

      I've created a new Apparatus component that makes it easy to embed these graphics
      in your Idyll documents. Here's the code to embed that interactive graphic:

      \`\`\`md
[Apparatus
  _url: "path/to/sum-of-odds.json"
  _regionOfInterest: roi
  _width: 300
  _height: 300 /]
      \`\`\`

      The \`_regionOfInterest\` parameter tells Apparatus where to focus, and can be passed in like \`{ x: [-1, 1], y: [-1, 1] }\`.
      The parameters starting with an underscore are used to configure Apparatus; other parameters will configure the graphic itself (you'll see more below).

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
        _url: "https://cdn.rawgit.com/mathisonian/3ad1fbf668086b5e4c742abfebbff541/raw/4a443db3db931c459b563bdea5323df75947d4ea/sum-of-odds.json"
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
  _url: "path/to/sum-of-odds.json"
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
      _url: "https://cdn.rawgit.com/mathisonian/d0946ec277daa876bf2157483123c479/raw/eb82e9ef390c214c86504d1d76c666ce8f763a3a/potted%2520plant%2520(1).json"
      _regionOfInterest: roi2
      _width: "100%"
      _height: 400
      growth:growth /]


    By parameterizing the figure with Idyll variables, we can quickly turn this into an
    animated graphic:

    [center style:\`{marginBottom: 60}\`]
    [easer value:growth targetValue:17 ] Make it day [/easer]

    [easer value:growth targetValue:-1.5 ] Make it night [/easer]
    [/center]

    The component is open source and available at [https://github.com/idyll-lang/idyll-apparatus-component](https://github.com/idyll-lang/idyll-apparatus-component). Thanks to Josh Horowitz for all of his help
    getting this to work!

    Learn more about the two projects:

[br/]
    [b]
      [a href:"https://idyll-lang.org" text:"https://idyll-lang.org" /]
    [/b]
    [br/][br/]

  [b]
    [a href:"http://aprt.us/" text:"http://aprt.us" /]
  [/b]
[br/][br/]

  [small][i][a href:"https://github.com/mathisonian/mathisonian.github.io/blob/master/pages/writing/apparatus.js"]See the source for this post[/a][/i].[/small]
    `
  }
});

