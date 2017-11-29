import WithPost from '../../helpers/with-post';

export default WithPost({
  title: 'Easy responsive SVGs with ViewBox',
  date: 'January, 2016',
  html: `

  <script type="text/javascript" src="https://d3js.org/d3.v3.min.js"></script>

  <p>The viewBox attribute of SVGs is underutilized. While it has been written about
  before, it seems useful enough to warrant another post.</p>

  <p>There is a very simple technique that many interactive d3 creations can immediately
  benefit from. The viewBox attribute defines how an SVG scales up. To take advantage
  of it, use viewBox to define the aspect ratio for your graphic, and allow the browser to
  flexibly decide what size it should be displayed on a reader's screen.</p>

  <p>Consider the following two examples using d3.js. In both I use the following code to
  render a checkerboard pattern after creating an svg element.</p>

  <script src="https://gist.github.com/mathisonian/45c95fdfa41923c7bda7.js"></script>

  <p><i><br /></i></p>

  <p><i>without viewbox</i></p>

  <div id="example-1"></div>

  <small><em>Full code: <a href="https://gist.github.com/mathisonian/d5edeae8c805130a09e1">https://gist.github.com/mathisonian/d5edeae8c805130a09e1</a></em></small>

  <p><br /></p>

  <p><i>with viewbox (try resizing your browser window! this will always resize to fill its parent)</i><br /></p>

  <div id="example-2"></div>

  <small><em>Full code: <a href="https://gist.github.com/mathisonian/faceca3e51ecf73b3eb1">https://gist.github.com/mathisonian/faceca3e51ecf73b3eb1</a></em></small>

  <p><i><br /></i></p>

  <p>The only difference in the code is at the very beginning where I create the
  SVG. In example 1 I explicitly set the size to 202 pixels, while in the second I use viewbox.
  Note all subsequent code after creating the SVG is identical.</p>

  <script src="https://gist.github.com/mathisonian/3ab0184bde2a496439c1.js"></script>


  <p>The first example shows how the SVG behaves with an explicit width and height set.
  The second shows how it behaves using viewBox to resize dynamically. Try resizing your
  browser window to see the behavior of each.</p>

  <p>Even better is that all interactivity (for example, d3 click and mouseenter
  events) works as expected. See below for a responsively sized example that responds to these events:</p>


  <div id="example-3"></div>
  <small><em>Full code: <a href="https://gist.github.com/mathisonian/b161bfed68a177591e1d">https://gist.github.com/mathisonian/b161bfed68a177591e1d</a></em></small>

  <p><br /></p>

  <p>This technique can work on shapes with a different aspect ratio as well. Consider the following code to draw a rectangle with a 16:9 aspect ratio. Notice how the rectangle behaves when
  resizing the browser. It is set up in css to fill 75% of its parent's width.</p>

  <script src="https://gist.github.com/mathisonian/4f673f4e62b7b98fcfd1.js"></script>
  <p><br /></p>
  <p><em>Live example:</em></p>
  <p><br /></p>
  <div id="example-4" style="max-width: 75%; margin: 0 auto;"></div>
  <small><em>Full code: <a href="https://gist.github.com/mathisonian/42a4adf305916a9174f8">https://gist.github.com/mathisonian/42a4adf305916a9174f8</a></em></small>

  <p><br /></p>

  <p><br /></p>

  <p>Do note, this is just the tip of the iceberg in terms of what you can do with the
  SVG coordinate system. To learn more follow the links below.</p>

  <p><br /></p>

  <p><i>Further reading:</i></p>

  <ul>
    <li><i><a href=
    "https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox">https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox</a><br />
    </i></li>

    <li><i><a href=
    "https://sarasoueidan.com/blog/svg-coordinate-systems/">https://sarasoueidan.com/blog/svg-coordinate-systems/</a></i><br />
    </li>

    <li><i><a href=
    "https://css-tricks.com/scale-svg/">https://css-tricks.com/scale-svg/</a></i><br /></li>
  </ul>

  <br/>
  <br/>
  <br/>

  <script type="text/javascript" src="https://rawgit.com/mathisonian/d5edeae8c805130a09e1/raw/086735f1daad6ed278dced3b2508344acdce65ab/app.js"></script>
  <script type="text/javascript" src="https://rawgit.com/mathisonian/faceca3e51ecf73b3eb1/raw/63b5b5dc3cf5f8b634c559d7f377385881a9722c/app.js"></script>
  <script type="text/javascript" src="https://rawgit.com/mathisonian/b161bfed68a177591e1d/raw/3060569fecaa992669434da87209c5738733c7f9/app.js"></script>
  <script type="text/javascript" src="https://rawgit.com/mathisonian/42a4adf305916a9174f8/raw/65134cca1385a33f31a8597d90e5c3919a4e8da0/app.js"></script>
`
});
