import WithPost from '../../helpers/with-post';

export default WithPost({
  title: 'Using Symbolset font on iOS',
  date: 'March, 2013',
  html: `
  <p>As an iOS and icon-font novice, I had a tough time getting our projects symbol set icons to work properly on iOS. The following serves a tutorial to those attempting to do the same.</p><br><h4>1. Include the font in your project</h4><div>The first step to using any custom font with iOS is to include it in the project. You need to do two things:&nbsp;</div><div><ol><li>Copy the font file (usually a .ttf file) into xcode. &nbsp;I like to put mine in Supporting Files/Fonts/<br></li><li><b>Add the font to the .plist file</b>: to do this, Use the key "Fonts provided by application" and set it to an array. Add an entry to this array for each font file you want to add, with type string and value &lt;filename&gt;. For example, my symbolset entry was named, Item 0, type String, value ss-standard.ttf.</li></ol><br></div><h4>2. Set the font on your UILabel</h4><div>You can do this using a css toolkit like <a href="http://www.nativecss.com/">nativecss</a>, or <a href="https://github.com/tombenner/nui">nui</a>, or just by <a href="http://stackoverflow.com/questions/6747325/ios-how-can-i-set-a-non-system-font-family-style-size-of-uilabel">doing it in code</a></div><div>If you aren't sure about the name of the font or font family that you have available, you can include this snippet in your app delegate didFinishLaunchingWithOptions method:</div><div>
  <br/>
  <script src="https://gist.github.com/mathisonian/5573378.js"></script>
  </div><div><br></div><h4>3. Include a ligature or unicode character</h4><p>Symbolset includes methods to insert the symbols via unicode or via ligatures. Below I show the two ways to do this. The preferable method is up to you.</p><b>Unicode</b><div>This is done with code like this:</div><div><br/>
  <pre class="code">self.myUILabel.text = @"\U0001F44E"</pre><br/></div><div>Note that for this to work properly, you will have to <b>ensure that there are always 8 characters after the \U</b>. Thanks to <a href="https://coderwall.com/p/wrb3pw">Brendan O'Brien</a> for pointing this out.</div><div><br></div><b>Ligature</b><div>In order to use this method, you will have to add CoreText to your project and include the line&nbsp;</div><div>
  <p><pre class="code">#import &lt;CoreText/CoreText.h&gt;</pre></p>at the top of your file. The trick here is to tell iOS to use any available ligature, by setting the&nbsp;kCTLigatureAttributeName attribute to 2. This is done with the following code:</div><div></div><div><br/>
  <script src="https://gist.github.com/mathisonian/5573402.js"></script>
  <br/></div><div>Thanks to <a href="http://kylerosenbluth.com/2012/10/8/fonts">Kyle Rosenbluth</a>&nbsp;for discussing this method.</div><div><br></div><div><br/><b>If you have any questions on the topic, feel free to <a href="mailto:blog@mathisonian.com">email me</a> or ping me on <a href="http://www.twitter.com/mathisonian">twitter</a>.</b><br/><br/></div>
`
});
