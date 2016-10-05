# bizweb_theme
A console tool for interacting with Bizweb Theme Assets

<div class="documentation">
      <div class="pagewidth">

<h3 id="requirements">Requirements</h3>

<ul>
  <li>Node.js 0.10.22+ (<a href="http://stackoverflow.com/questions/20887400/gruntjs-bus-error-grunt-watch">check and upgrade Node.js here</a>)</li>
  <li><a href="https://github.com/bizwebvn/bizweb_theme">Bizweb Theme Tool</a></li>
</ul>

<h3 id="basic-theme-structure">Basic theme structure</h3>

<pre><code>├── assets/
├── layout/
├── snippets/
├── templates/
│
├── // Non-theme files/folders (Theme Tool, Grunt, Gulp, etc.)
├── config.yml
├── css/
├── Gemfile
├── Gruntfile.js
├── package.json
├── gulpfile.js
└── node_modules/
</code></pre>

<h2 id="gruntjs">Grunt.js</h2>

<p>Navigate to your theme root in Terminal.</p>

<h3 id="install-grunt-globally">1. Install grunt globally</h3>

<pre><code>npm install -g grunt-cli
</code></pre>

<p>You may have to use <code>sudo</code> for this.</p>

<h3 id="create-this-packagejson-file-in-your-themes-root">2. Create this package.json file in your theme’s root</h3>

<pre><code>{
  "name": "BwTheme",
  "devDependencies": {
      "grunt":"~1.0.0",
      "glob":"~7.0.6",
      "growl":"~1.9.2",
      "grunt-contrib-watch":"~1.0.0",
      "grunt-bizweb":"*"
  }
}
</code></pre>

<h3 id="create-this-gruntjs-file-in-your-themes-root">3. grunt config</h3>

<pre><code>grunt.initConfig({
     bizweb: {
      options: {
          api_key: "5ed23438423448e7bbe16cb7d641eb31",
          password: "c27928e47ddf4876865bba964c7fb4c2",
          url: "only-one3.bizwebvietnam.net",
          base: 'theme',
          theme: '44467',
          sync: '44467'
        }
    }
</code></pre>

<h3 id="install-required-packages">4. Install required packages</h3>

<pre><code>npm install
</code></pre>

<h3 id="run-grunt">5. Run grunt</h3>

<pre><code>grunt
</code></pre>

<p>That’s it. Gruntfile.js will run both <code>grunt watch</code> to upload new theme files to your store.</p>

<h2 id="gulpjs">Gruntfile.js</h2>

<p>Navigate to your theme root in Terminal.</p>

<h3 id="run-grunt-watch">1. Run Grunt watch</h3>
<p>Live sync.</p>
<pre><code>grunt watch
</code></pre>

<h3 id="run-grunt-download">2. Run Grunt bizweb:download</h3>
<p>Download theme.</p>
<pre><code>grunt bizweb:download
</code></pre>

<h3 id="run-grunt-sync">3. Run Grunt bizweb:sync</h3>
<pre><code>grunt bizweb:sync
</code></pre>

<h3 id="run-grunt-themes">4. Run Grunt bizweb:themes</h3>
<p>Get all themes.</p>
<pre><code>grunt bizweb:themes
</code></pre>

<h3 id="run-grunt-upload">5. Run Grunt bizweb:upload</h3>
<p>Upload theme.</p>
<pre><code>grunt bizweb:upload
</code></pre>

<h3 id="run-grunt-delete">6. Run Grunt bizweb:delete</h3>
<p>Delete theme.</p>
<pre><code>grunt bizweb:delete
</code></pre>

<h3 id="run-bizweb-theme-tool">7. Run Bizweb theme tool</h3>
<p>Make sure your package.json file is setup properly. <a href="https://github.com/bizwebvn/bizweb_theme">Docs here</a>.
In a separate them Terminal window that is still in your theme’s root, run:</p>

<pre><code>grunt watch
</code></pre>
<h2 id="license">License</h2>

<p>Copyright (c) 2016 Bizweb. Released under the <a href="http://opensource.org/licenses/MIT">MIT-LICENSE</a>.</p>


    </div>
