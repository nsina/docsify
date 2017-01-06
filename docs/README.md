## Quick Start

### Create a project
First create a project, then create a `docs` folder
```shell
mkdir my-project && cd my-project
mkdir docs && cd docs
```

### Create entry file
Create a `index.html` file

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="//unpkg.com/docsify/themes/vue.css">
</head>
<body>
  <div id="app"></div>
</body>
<script src="//unpkg.com/docsify" data-router></script>
</html>
```

Create `README.md` as the main page

```
# Title

## blabla
```

### Deploy!
Push code and activate **GitHub Pages** via your repo's settings
![image](https://cloud.githubusercontent.com/assets/7565692/20639058/e65e6d22-b3f3-11e6-9b8b-6309c89826f2.png)

## CLI

Easy to setup and preview a docs.

### Install
```shell
npm i docsify-cli -g
```

### Setup

Setup a boilerplate docs
```shell
docsify init docs
```

### Preview
Preview and serve your docs using
```shell
docsify serve docs
```

Read more [docsify-cli](https://github.com/QingWei-Li/docsify-cli)



## More

### Themes
Currently available `vue.css` and `buble.css`
```html
<link rel="stylesheet" href="//unpkg.com/docsify/themes/vue.css">
<link rel="stylesheet" href="//unpkg.com/docsify/themes/buble.css">
```

Minified files

```html
<link rel="stylesheet" href="//unpkg.com/docsify/lib/themes/vue.css">
<link rel="stylesheet" href="//unpkg.com/docsify/lib/themes/buble.css">
```

### Multiple pages
If you need other pages, directly create the markdown file, such as `guide.md` is `/#/guide`.

### Navbar
Code in `index.html`

```html
<nav>
  <a href="/#/docsify/">En</a>
  <a href="/#/docsify/zh-cn">中文</a>
</nav>
```

### CDN
- UNPKG [https://unpkg.com/docsify/](https://unpkg.com/docsify/)
- jsDelivr [http://www.jsdelivr.com/projects/docsify](http://www.jsdelivr.com/projects/docsify)


### Cover Page

Generate a cover page with markdown. Create a `_coverpage.md` and set `data-coverpage` in the script tag.

```markdown
![logo](_media/icon.svg)

# docsify <small>1.2.0</small>

> A magical documentation site generator.

- Simple and lightweight (~12kb gzipped)
- Multiple themes
- Not build static html files


[GitHub](https://github.com/QingWei-Li/docsify/)
[Get Started](#quick-start)
```

#### Custom background
Currently the background of the cover page is generated randomly. We can customize the background color, or add a background image.

```markdown
# docsify <small>1.2.0</small>

> xxx

[GitHub](https://github.com/QingWei-Li/docsify/)
[Get Started](#quick-start)

<!-- background image -->
![](_media/bg.png)
<!-- background color -->
![color](#f0f0f0)
```

### Markdown parser

Docsify uses [marked](https://github.com/chjj/marked) to parse markdown. We can configure it

```js
window.$docsify = {
  markdown: {
    smartypants: true
  }
}
```

And it can even be customized

```js
window.$docsify = {
  markdown: function(marked) {
    // ...

    return marked
  }
}
```

## Options

You can add configurations in the script tag attributes or with `window.$docsify`.

### repo
Display the [GitHub Corner](http://tholman.com/github-corners/) widget.

```html
<script src="//unpkg.com/docsify" data-repo="your/repo"></script>
```


```js
window.$docsify = {
  repo: 'your/repo'
}
```

### max-level
TOC level.

```html
<script src="//unpkg.com/docsify" data-max-level="6"></script>
```

```js
window.$docsify = {
  maxLevel: 6
}
```

### el
Root element.

```html
<script src="//unpkg.com/docsify" data-el="#app"></script>
```

```js
window.$docsify = {
  el: '#app'
}
```

### sidebar-toggle

Sidebar with toggle

```html
<script src="//unpkg.com/docsify" data-sidebar-toggle></script>
```

```js
window.$docsify = {
  sidebarToggle: true
}
```

### sidebar

Custom sidebar. If it's set, the TOC will be disabled. Bind global variables on the `data-sidebar`.

![image](https://cloud.githubusercontent.com/assets/7565692/20647425/de5ab1c2-b4ce-11e6-863a-135868f2f9b4.png)

```html
<script>
  window.sidebar = [
    { slug: '/', title: 'Home' },
    {
      slug: '/pageA',
      title: 'page A',
      children: [
        { slug: '/pageA/childrenB', title: 'children B' }
      ]
    },
    { slug: '/PageC', title: 'Page C' }
  ]
</script>
<script src="/lib/docsify.js" data-sidebar="sidebar"></script>
```


```js
window.$docsify = {
  sidebar: 'sidebar'
}
```

### load-sidebar

Load sidebar markdown file. If it is configured, load the current directory `_sidebar.md` by default. If the file doesn't exist, the sidebar will appear as a TOC.
** you should add `.nojekyll` into docs folder to prevent GitHub Pages from ignoring the `_sidebar.md`**

```html
<script src="/lib/docsify.js" data-load-sidebar></script>
```

You can specify a file:

```html
<script src="/lib/docsify.js" data-load-sidebar="_sidebar.md"></script>
```

```js
window.$docsify = {
  loadSidebar: '_sidebar.md'
}
```

The contents of the file can be:

```markdown
- [Home](/)
- [Installation](/installation)
- Essentials
  - [Getting Started](/getting-started)
  - [Dynamic Route Matching](/dynamic-matching)
  - [Nested Routes](/nested-routes)
```

### sub-max-level

Display TOC in the custom sidebar. The default value is 0.


```html
<script src="/lib/docsify.js" data-load-sidebar data-max-sub-level="4"></script>
```


```js
window.$docsify = {
  maxSubLevel: 4
}
```

### load-navbar

Load navbar markdown file. If it is configured, load the current directory `_navbar.md` by default.

```html
<script src="/lib/docsify.js" data-load-navbar></script>
```

You can specify a file:

```html
<script src="/lib/docsify.js" data-load-navbar="_navbar.md"></script>
```

```js
window.$docsify = {
  loadNavbar: '_navbar.md'
}
```

The contents of the file can be:

```markdown
- [en](/)
- [chinese](/zh-cn)
```

If you write a sub level list, it will generate a dropdown list.

```markdown
- [download](/download)
- language
  - [en](/)
  - [chinese](/zh-cn)
```

### router

Hash router.

```html
<script src="/lib/docsify.js" data-router></script>
```

```js
window.$docsify = {
  router: true
}
```


### auto2top

Scroll to the top on changing hash.


```html
<script src="/lib/docsify.js" data-auto2top></script>
```

```js
window.$docsify = {
  auto2top: true
}
```

### homepage

`README.md` will be rendered as a homepage for your website in the docs folder, but sometimes we want to specify another file as a homepage, or even use the `README.md` in your repo. We can use (need `data-router`):

```html
<script src="/lib/docsify.js" data-homepage="https://raw.githubusercontent.com/QingWei-Li/docsify/master/README.md"></script>
<!-- Or using `Welcome.md` as homepge -->
<script src="/lib/docsify.js" data-homepage="Welcome.md"></script>
```


```js
window.$docsify = {
  homepage: true
}
```


### basePath

If your HTML entry file and the markdown files are in different directories, we can use:

```html
<script src="/lib/docsify.js" data-base-path="/base/"></script>

<!-- Even if the docs is on another site 😄 -->
<script src="/lib/docsify.js" data-base-path="https://docsify.js.org/"></script>
```


```js
window.$docsify = {
  basePath: '/base/'
}
```


### coverpage

Generate cover page.

```html
<script src="/lib/docsify.js" data-coverpage></script>
<!-- or -->
<script src="/lib/docsify.js" data-coverpage="other.md"></script>
```

```js
window.$docsify = {
  coverpage: true
}
```