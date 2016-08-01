// require.context(directory, useSubdirectories = false, regExp = /^\.\//)
var context = require.context('./src', true, /-test.js$/);
context.keys().forEach(context);
