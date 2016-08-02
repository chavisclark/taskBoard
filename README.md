>## TaskBoard Challenge

>Hallo! I've really enjoyed working on this project and becoming more familiar with the technologies at Sharepop. I'm running webpack dev server. See what I've done:

1) Integrated Foundation Sites (with Sass)
2) Implemented simple responsive design
3) Developed editable modal for color and tags
4) Implemented drag and drop functionality across lists
5) Minimal unit/functional tests



### Usage

```
npm install
npm start
open http://localhost:3000
```


### Disclaimer

I've never been in charge of testing but I gave it a try anyway!
It's only a few tests.
```
npm test
```

### Things to be improved
1) Keep tags from consolidating after list change (possible bug)
2) InputBox: Clear input field after after click event. (Currently is only cleared after ENTER)
3) Modal: Submit tags on ENTER
4) Implement { task, tags, list } remove functionality
5) Implement Add New List
6) Configure localstorage
-- These are things that I started, and will implement in the near future

### Conclusion

Thank you for extending this challenge to me. I look forward to hearing your thoughts regarding any parts of this code.

### Required Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
* [react-dnd](https://github.com/gaearon/react-dnd)
* There are others added to the package.json file that compliments these dependencies also
