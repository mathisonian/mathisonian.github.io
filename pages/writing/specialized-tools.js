import WithPost from '../../helpers/with-post';
import { Link } from '../../components/idyll/default';
import ReactTweetEmbed from 'react-tweet-embed';

const markup = `
There are about 3.6 million software developers in the United States, and over 18 million worldwide.
Every month 40 million people [visit the site Stack Overflow](https://insights.stackoverflow.com/survey/2017) to learn about programming,
and more than 50% of them are interested in JavaScript. Survey analysts estimate that of these
 40 million people, about 17 million are professional developers or university students. The
rest might be learning to code, hobbyists, or otherwises curious individual.

The JavaScript community is massive, and people use the language to solve a diverse set of problems.
Fortune 500 companies use it for their e-commerce platforms, game designers and journalists use it
to create interactive content that can be delivered almost instantly via a web browser. People who
have no interest in becoming professional devlopers use it to tweak their portfolio sites and
personal blogs, ad-men use it to gather and sell people's private information.

That's a lot of people. And they're solving a lot of different problems.
Despite this diversity of userbase and task, discourse in the open source JavaScript world often
takes on an all-or-nothing mentality: *since this tool doesn't work for me, it must be terrible.*

I reject this attitude. Sure, there's a lot of terrible software out there, but we
shouldn't cast stones at something just because it doesn't fit into our workflow.
I don't think I'll ever have a need for a this thing that turns trees into logs, but I can
understand the use for it, and think its a pretty cool machine.

[img style:\`{height: "400px", margin: "30px auto 5px auto"}\`  src:"http://i.imgur.com/QXaORxD.gif" /]
[small][link text:"http://i.imgur.com/QXaORxD.gif" url:"http://i.imgur.com/QXaORxD.gif" /][/small]

## Who is this for, and why?

One concrete thing that open source maintainers can be do to combat this attitude
is to make it very clear (1) who the intended audience for
the tool is, and (2) why they would want to use use it.

Put this right up front, at the top of your READMEs and documentation pages. It
will make a difference, I promise. Are you designing for enterprise teams
or individual developers on a deadline? What other assumptions do you
make about the worldview of your users?

[img style:\`{width: '100%'}\`  src:"https://i.imgur.com/RxmHo69.gif" /]
[small][link text:"https://i.imgur.com/RxmHo69.gif" url:"https://i.imgur.com/RxmHo69.gif" /][/small]

Don't shame people for the tools that they do use. A script tag and
jQuery are perfectly acceptable to use in 2018 if you just want to make a few tweaks
to an otherwise static site. Stop telling your artist friends to learn Redux just to
make some tweaks to their personal site.


## Paying for software

The elephant in the room here is that in order to engender a healthy
ecosystem of specialized tools, developers need to be able to support themselves
making these tools. That means that they either need to sell these tools, or find a
model for monitizing them as open-source software.

It also means that companies need to start paying for software. If you are a developer
who works for an organization, congratulations: you work for an organization that can
afford to hire a software developer, and can afford to pay for software!

If there are procurement or other procedural problems at your
institution, tell developers about this so that they can make it easier for companies to
pay them. While I appreciate the sentiment of command line tools like [thanks](https://www.npmjs.com/package/thanks),
I think that it is fighting the wrong battle. A professional developers working at the command line
is the wrong target, those expenses should be going on a manger's corporate card.


[img style:\`{width: '100%'}\`  src:"https://i.imgur.com/IaaYlO7.gif" /]
[small][link text:"https://i.imgur.com/IaaYlO7.gif" url:"https://i.imgur.com/IaaYlO7.gif" /][/small]


Thanks to the [Specialized Tools](https://www.reddit.com/r/specializedtools/top/?sort=top&t=all) page
on Reddit for all of these inspiring GIFs.
`

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
