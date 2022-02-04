- [Introduction](#introduction)
  - [Resources](#resources)
    - [Github](#github)
    - [Homework and Assignments](#homework-and-assignments)
  - [Summary of Tools and Technology](#summary-of-tools-and-technology)
  - [Introductory Exercise](#introductory-exercise)
    - [Dev Tools](#dev-tools)
    - [The Box Model](#the-box-model)
    - [Block vs Inline](#block-vs-inline)
    - [HTML and Semantics](#html-and-semantics)
    - [User Agent Styles](#user-agent-styles)
  - [CSS Syntax](#css-syntax)
    - [Three Pillars of the Web](#three-pillars-of-the-web)
    - [HTML, CSS and JavaScript Comments](#html-css-and-javascript-comments)
    - [Box Sizing](#box-sizing)
    - [Media Queries Demo](#media-queries-demo)

# Introduction

1. There is no such thing as a silly question, you are encouraged to speak up anytime something is not clear to you
2. There is no such thing as a silly mistake, they are a gateway to learning
3. Do not dismiss someone because they have a different level of experience - be kind to others
4. During class exercises you promise to alert me the second something goes awry with your project
5. I will make myself available before or after class to clarify or expand on topics (or we can set an alternate time via email)

## Resources

Your instructor - Daniel Deverell (he, him): Front & Back end developer specializing in CSS, JavaScript, React and Node.

[Email](mailto:daniel.deverell@nyu.edu) - `daniel.deverell@nyu.edu`

[Syllabus](syllabus.docx) - syllabus.docx

[LinkedIn](https://www.linkedin.com/in/danieldeverell/) - https://www.linkedin.com/in/danieldeverell/

### Github

Go to [Github](https://github.com/front-end-foundations). `https://github.com/front-end-foundations`, is the source for _all files_ and notes used in this class. Class activities are documented in a readme file.

_The notes are updated frequently so do not download them until the day of the class._

Please keep the notes open in a tab during class for reference and in order to copy and paste code.

At the end of class I typically upload or "push" my files back up to Github for your reference. 

<!-- ### Recommended Text

To enhance your experience, consider purchasing Wes Bos' [beginner javascript video series](https://beginnerjavascript.com/). It is comprehensive and even those familiar with JavaScript can benefit from it.

Student pricing is available (see the site's FAQ) and there is a detailed [reference](https://wesbos.com/javascript/).

I will be assigning homework from from this series. If you do not buy the video series you can refer to the [reference](https://wesbos.com/javascript/) write ups. -->

<!-- ### NYU Server

You are welcome to use your own preferred resources for sharing code however [server Space](http://oit2.scps.nyu.edu) at `http://oit2.scps.nyu.edu` - is provided.

First, test to ensure your account is active by entering `http://oit2.scps.nyu.edu/~<username>` into a browser (note the tilde`~`, be sure to replace `<username>` with your username). E.g. [http://oit2.scps.nyu.edu/~devereld](http://oit2.scps.nyu.edu/~devereld)

Your username is the first seven letters of your last name + the first letter of first name. e.g `jdoe`. (If your name is less than 7 characters, your username is your entire last name plus the first letter of your first name.)

Your password is your first initial plus your last initial plus 123890. e.g. `dd123890` and the computer name is `oit2.scps.nyu.edu`.

You can upload and download files using SFTP (Secure File Transfer Protocol). Recommended free SFTP clients include [Cyberduck](https://cyberduck.io) and [Filezilla](https://filezilla-project.org). Note - you _must_ use port 22 or SFTP in order to connect via SFTP.

When you log into your account you will see a number of files and folders. The `web` folder is where you place folders and files in order to make them accessible at `http://oit2.scps.nyu.edu/~<username>/`.

Do not leave original copies of material on the server as accounts are deleted at the end of the semester. -->

### Homework and Assignments

Assignments should be handed in by uploading the files to Github and alerting me via email - daniel.deverell@nyu.edu.

## Zoom Tips

- Press the spacebar if muted to temporarily enable the microphone
- If possible, leave your camera on
- Use a second screen by dialing into Zoom on another device or use a larger monitor
- You will need to configure Zoom for screen sharing (requires restarting Zoom)
- Recordings are made available on request
- If you raise your hand please alert me via voice


## Summary of Tools and Technology

A listing of applications and technologies you will be introduced to in the class include:

- HTML, CSS and JavaScript DOM manipulation
- Visual Studio Code and the Terminal
- Git and Github
- Node and Node Package Manager (NPM)
- SASS - a CSS preprocessor
- the [JAM Stack](https://jamstack.org/) (JAM: JavaScript, API's, Markup)
- Static site generation [eleventy](https://www.11ty.io/)
- AJAX and fetching and displaying data from APIs

## Introductory Exercise

This exercise introduces some web development basics but is primarily intended to get set up and to give you a feel for the techniques we will be using.

1. Create a directory in your preferred location that you will use for _all files in this class_.
2. Download the zip file from this page using the green "Code" download button on Github
3. Unarchive the zip file into your new directory
4. Open the folder `introduction-master` in VS Code
5. Create a new `index.html` in the `app` directory
6. In your .html file - type in ! and press tab and this should appear:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

1. Add the code below to `index.html`

```html
<h1>Hello world!</h1>
<div>
  <p>Paragraph's and divs are block elements. They're rendered inside a box.</p>
  <p>
    This <em>italic text</em> is an inline element. Here is a
    <a href="#test">link</a> - also an inline element.
  </p>
</div>
```

1. Install the Live Server extension in VSCode and use it to open `app/index.html` in Google Chrome
2. Right click on any text and choose `Inspect`.

### Dev Tools

No matter which browser you are working in, the developer tools are your first line of defense when troubleshooting and should be kept open when you are working.

Set the inspector to the right side of the screen using the "kebab" (...) menu.

(The shortcut for opening the developer tools is `command-option-i`.)

### The Box Model

HTML tags or elements are interpreted as a box in the browser. They have CSS properties such as padding, border, position and margins. Taken together these elements form the box model.

### Block vs Inline

Most HTML elements have a default `display` property of `block` which means that they create a rectangular box in the browser.

The "opposite" of block in HTML is `inline`. An example might be a piece of italicized text `<em>` or a link `<a>`. A `<div>` tag is used to create an arbitrary block element and a `<span>` tag is used to create arbitrary inline elements.

The paragraph tag `<p>` creates a box (block) and by default has space above and below it while the italicized text (inline) does not and simply flows along with the rest of the text.

A `<div>` tag is a block tag which is used to create a logical division in your code. It creates an arbitrary box in a browser but other than that has no display characteristics. `div` tags are useful but don't say anything about the content inside them. Use HTML5 [semantic tags](https://www.w3schools.com/html/html5_semantic_elements.asp) whenever possible.

Try:

1. Use the inspector to add `margin`, `padding`, `border` and `height` to the `em` tag with and without `display: block` and `display: inline-block` noting the box model graphic in the inspector

### HTML and Semantics

HTML tags convey _meaning_ to the content that makes up the document to help make it understandable. Since HTML tags can be made to look anyway you want they are [semantically](https://en.wikipedia.org/wiki/Semantic_HTML) - not stylistically - important. The proper use of HTML tags is important for accessibility.

HTML tags have _attributes_ that provide additional information about HTML elements such as the `href` in the anchor (`<a href >`) tag.

Try:

- Use the inspector to change the `div` tag to an `article` tag

There are quite a [few html tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) - each has a meaning and appropriate use.

### User Agent Styles

`User agent styles` are the default styles for HTML elements. By default the browser places margins above and below the header, paragraph and on all four sides of the body. These default styles make sure that the document can be displayed even in the absence of a style sheet. You will typically build on top of these.

1. Add `<link rel="stylesheet" href="styles.css" />` to the head of the html document

## CSS Syntax

CSS rules consist of a [selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors), a set of curly braces, and a series of properties and values separated by a full colon and terminated by a semi colon.

```css
selector {
  property: value;
  property: value;
}
```

The selector determines which HTML element will be selected and properties are set by the value after the full colon. These almost always have a unit such as `px`, `s`, `em` or `%`.

Let's add padding, border and override the margins.

Edit `styles.css` to add:

```css
p {
  padding: 16px;
  margin: 1em;
  border: 3px solid #333;
  height: 100px;
  width: 80%;
}
```

Inspect the paragraph again. Note the changes in the inspector.

<!-- Try:

- Setting the height to 4px with `overflow: hidden;` and `overflow: auto;` -->

Note the drop down (triangle) next to padding, margin and border properties in the inspector. This indicates a CSS shortcut. Click on it. Our border property could also be written in long form.

```css
border-style: solid;
border-color: #333333;
border-width: 3px;
```

Try:

- `border-top-style: dotted;`

Delete the body tag and its contents. Paste the following in in its place.

```html
<body>
  <h1>Hello world!</h1>
  <div>
    <p>
      Paragraph's and divs are block elements. They're rendered inside a box.
    </p>
    <p>
      This <em>italic text</em> is an inline element. Here is a
      <a href="#test">link</a> - also an inline element.
    </p>
    <img src="http://placekitten.com/320/240" alt="click the kitten" />
    <p>You clicked on the kitten <span>0</span> times</p>
  </div>
  <p id="test"><a href="#top">Down here!</a></p>
  <script src="scripts.js"></script>
</body>
```

Note that the CSS is linked in the head of the document and the JavaScript is the last item in the HTML just above the closing body tag.

Click on the kitten and on the links to test.

Try:

- Click on the cat picture and note how the Elements inspector displays the number, and what happens in the Console tab
- Click on the link and note the change in the browser's address bar
- Force the link to hover using the inspector

Examine the applicable JS and CSS.

### Three Pillars of the Web

This simple document illustrates the three pillars of the web - content, appearance and behavior - working together. It is an example of the [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) - an important principle in programming.

1. Content (HTML) - uses HTML to _semantically_ markup the content
1. Appearance (CSS) - uses CSS to determine how the content will appear to the user
1. Behavior (JavaScript) - uses JavaScript to control how the pages works and allow the user to interact with the content

<!-- ## Separation of Concerns

This sample page illustrates the three pillars of the web and comprise an example of the [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) - an important principle in programming.

Another example of the separation of concerns might be MVC (model, view, controller) which corresponds to database, interface, and business logic.

Concerns here are the different aspects of software functionality. For instance, in MVC, the business logic or _controller_ is a concern, and the interface or _view_ through which a person uses this logic is another. Changing the interface should not require changing the business logic, and vice versa. This makes it possible to assign different roles and responsibilities to each area for a large organization. -->

### HTML, CSS and JavaScript Comments

In most editors the keyboard shortcut `cmd-/` will comment out a line or lines with the appropriate code:

- HTML: `<!-- -->`
- CSS: `/* */`
- JavaScript: `/* */` for multiline comments and `//` for single line comments

Try:

- Comment on and off the meta tag in the HTML file while viewing the result in the browser with the Toggle device button on and off
- Comment out the body CSS rule and a CSS rule
- Comment out the first line of JavaScript - click on the kitten and note the error

### Box Sizing

Examine the paragraphs in the inspector. Box dimensions are additive by default - the amount of space they take up in the browser will be a combination of the amount of content, width, padding and border properties (margins are outside the box model).

There is another sizing method called `border-box`. This method calculates the border and padding within the width and is simpler to work with.

Add `box-sizing: border-box/content-box` to review box model options.

```css
p {
  box-sizing: border-box;
  ...;
}
```

Note the the height is now exactly 100px.

Try:

- Setting the width of the paragraphs to 400px
- Then comment out the box sizing property and examine the width and height using the inspector

See this [sample](https://codepen.io/DannyBoyNYC/pen/gqeKqd) on Codepen.

### Media Queries Demo

Add a media query to `styles.css`:

```css
@media (min-width: 700px) {
  p {
    border: 3px solid red;
    width: 600px;
  }
}
```

Resize the browser and note:

- overrides in the inspector
- `min-width` means "greater than"
- the css for `>` (greater than) 700px is _added_ to the styles when the condition is true.

Change it to use `max-width`:

```css
@media (max-width: 700px) {
  p {
    border: 3px solid red;
    width: 80%;
  }
}
```

Note: `max-width` means "less than".

In the first case (`min-width`) the styles are added when the screen is small. In the second the styles are added when the screen is wide. This will be important when we start optimizing our CSS for devices with different screen sizes.
