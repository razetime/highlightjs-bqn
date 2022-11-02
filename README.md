# highlightjs-bqn

A third-party highlightjs libarary for the [BQN](https://mlochbaum.github.io/BQN) array language.

# Testing
Do the following for testing the highlighting on a browser. See the
[highlightjs docs](https://highlightjs.readthedocs.io/en/latest/building-testing.html) for more.

```
git clone https://github.com/highlightjs/highlight.js.git
cd highlight.js/
cd extra/
git clone https://github.com/razetime/highlightjs-bqn.git
cd ..
npm install
node tools/build.js -t browser
```

Then you can open `tools/developer.html` from the highlightjs repository to test the detection and highlighting of bqn.
In the dropdown, BQN will be at the very end.
