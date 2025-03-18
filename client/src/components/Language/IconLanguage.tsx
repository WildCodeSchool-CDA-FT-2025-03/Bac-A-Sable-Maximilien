import React from 'react';
import 'devicon';
type PropsLanguage = {
    lang: string,
    selected: boolean,
};

const iconMap: Record<string, { icon: string, color: string }> = {
    // Langages de programmation
    "c++": { icon: "cplusplus-plain", color: "#00599C" }, // Modifié: bleu officiel C++
    "cpp": { icon: "cplusplus-plain", color: "#00599C" }, // Modifié: même couleur que C++
    "python": { icon: "python-plain", color: "#3776AB" }, // Modifié: bleu Python officiel
    "shell": { icon: "bash-plain", color: "#79B4FE" }, // Conservé: couleur appropriée
    "batchfile": { icon: "windows8-plain", color: "#79B488" }, // Conservé: couleur appropriée
    "vim script": { icon: "vim-plain", color: "#4DD17A" }, // Conservé: peut rester tel quel
    "cmake": { icon: "cmake-plain", color: "#4A92D6" }, // Conservé: couleur appropriée
    "renderscript": { icon: "javascript-plain", color: "#ADADAD" }, // Conservé: pas d'équivalent direct
    "javascript": { icon: "javascript-plain", color: "#F7DF1E" }, // Modifié: jaune JS officiel
    "typescript": { icon: "typescript-plain", color: "#3178C6" }, // Modifié: bleu TS officiel
    "java": { icon: "java-plain", color: "#007396" }, // Modifié: bleu Java officiel
    "c#": { icon: "csharp-plain", color: "#239120" }, // Modifié: vert C# officiel
    "csharp": { icon: "csharp-plain", color: "#239120" }, // Modifié: même couleur que c#
    "go": { icon: "go-plain", color: "#00ADD8" }, // Modifié: bleu Go officiel
    "golang": { icon: "go-plain", color: "#00ADD8" }, // Modifié: même couleur que go
    "ruby": { icon: "ruby-plain", color: "#CC342D" }, // Modifié: rouge Ruby officiel
    "php": { icon: "php-plain", color: "#777BB4" }, // Modifié: violet PHP officiel
    "swift": { icon: "swift-plain", color: "#FA7343" }, // Modifié: orange Swift officiel
    "kotlin": { icon: "kotlin-plain", color: "#7F52FF" }, // Modifié: violet Kotlin officiel
    "html": { icon: "html5-plain", color: "#E34F26" }, // Modifié: orange HTML5 officiel
    "css": { icon: "css3-plain", color: "#1572B6" }, // Modifié: bleu CSS3 officiel
    "dart": { icon: "dart-plain", color: "#0175C2" }, // Modifié: bleu Dart officiel
    "scala": { icon: "scala-plain", color: "#DC322F" }, // Modifié: rouge Scala officiel
    "haskell": { icon: "haskell-plain", color: "#5D4F85" }, // Modifié: violet Haskell officiel
    "lua": { icon: "lua-plain", color: "#2C2D72" }, // Modifié: bleu foncé Lua officiel
    "elixir": { icon: "elixir-plain", color: "#4B275F" }, // Modifié: violet Elixir officiel
    "clojure": { icon: "clojure-plain", color: "#5881D8" }, // Modifié: bleu Clojure officiel
    "sql": { icon: "mysql-plain", color: "#71A3D6" }, // Conservé: représentation générique SQL
    "docker": { icon: "docker-plain", color: "#2496ED" }, // Modifié: bleu Docker officiel
    "react": { icon: "react-original", color: "#61DAFB" }, // Modifié: bleu React officiel
    "node": { icon: "nodejs-plain", color: "#339933" }, // Modifié: vert Node.js officiel
    "nodejs": { icon: "nodejs-plain", color: "#339933" }, // Modifié: vert Node.js officiel
    "gradle": { icon: "gradle-plain", color: "#02303A" }, // Modifié: bleu-noir Gradle officiel
    "markdown": { icon: "markdown-plain", color: "#000000" }, // Modifié: noir officiel Markdown
    "nim": { icon: "javascript-plain", color: "#FFC866" }, // Conservé: pas d'équivalent direct
    "angular": { icon: "angularjs-plain", color: "#DD0031" }, // Modifié: rouge Angular officiel
    "vue": { icon: "vuejs-plain", color: "#4FC08D" }, // Conservé: déjà la couleur officielle
    "svelte": { icon: "svelte-plain", color: "#FF3E00" }, // Conservé: déjà la couleur officielle
    "nextjs": { icon: "nextjs-plain", color: "#000000" }, // Modifié: noir Next.js officiel
    "next": { icon: "nextjs-plain", color: "#000000" }, // Modifié: même couleur que nextjs
    "nuxt": { icon: "nuxtjs-plain", color: "#00DC82" }, // Modifié: vert Nuxt officiel
    "express": { icon: "express-original", color: "#000000" }, // Modifié: noir Express officiel
    "expressjs": { icon: "express-original", color: "#000000" }, // Modifié: même couleur que express
    "laravel": { icon: "laravel-plain", color: "#FF2D20" }, // Modifié: rouge Laravel officiel
    "flask": { icon: "flask-plain", color: "#000000" }, // Modifié: noir Flask officiel
    "spring": { icon: "spring-plain", color: "#6DB33F" }, // Conservé: déjà la couleur officielle
    "makefile": { icon: "dot-net-plain", color: "#aaaaaa" }, // Conservé: pas d'équivalent direct

    // Technologies additionnelles de Devicon (conservées en majorité)
    "3dsmax": { icon: "3dsmax-plain", color: "#00AEEF" }, // Conservé
    "aarch64": { icon: "aarch64-plain", color: "#16A4BC" }, // Conservé
    "aftereffects": { icon: "aftereffects-plain", color: "#D291FF" }, // Conservé
    "amazonwebservices": { icon: "amazonwebservices-original", color: "#FF9900" }, // Conservé: couleur officielle
    "aws": { icon: "amazonwebservices-original", color: "#FF9900" }, // Conservé: couleur officielle
    "android": { icon: "android-plain", color: "#3DDC84" }, // Conservé: couleur officielle
    "androidstudio": { icon: "androidstudio-plain", color: "#3DDC84" }, // Conservé
    "apache": { icon: "apache-plain", color: "#D22128" }, // Conservé: couleur officielle
    "apollographql": { icon: "apollographql-plain", color: "#311C87" }, // Conservé: couleur officielle
    "apple": { icon: "apple-original", color: "#A2AAAD" }, // Conservé
    "arduino": { icon: "arduino-plain", color: "#00979D" }, // Conservé: couleur officielle
    "atom": { icon: "atom-original", color: "#66595C" }, // Conservé
    "azure": { icon: "azure-plain", color: "#0089D6" }, // Conservé: couleur officielle
    "babel": { icon: "babel-plain", color: "#F9DC3E" }, // Conservé: couleur officielle
    "bash": { icon: "bash-plain", color: "#4EAA25" }, // Conservé: couleur officielle
    "behance": { icon: "behance-plain", color: "#1769FF" }, // Conservé: couleur officielle
    "bitbucket": { icon: "bitbucket-original", color: "#0052CC" }, // Conservé: couleur officielle
    "blender": { icon: "blender-original", color: "#F5792A" }, // Conservé: couleur officielle
    "bootstrap": { icon: "bootstrap-plain", color: "#7952B3" }, // Conservé: couleur officielle
    "bulma": { icon: "bulma-plain", color: "#00D1B2" }, // Conservé: couleur officielle
    "c": { icon: "c-plain", color: "#03599C" }, // Modifié: bleu C officiel
    "canva": { icon: "canva-original", color: "#00C4CC" }, // Conservé: couleur officielle
    "cassandra": { icon: "cassandra-plain", color: "#1287B1" }, // Conservé
    "centos": { icon: "centos-plain", color: "#262577" }, // Conservé
    "ceylon": { icon: "ceylon-plain", color: "#AB710A" }, // Conservé
    "chrome": { icon: "chrome-plain", color: "#4285F4" }, // Conservé: couleur officielle
    "circleci": { icon: "circleci-plain", color: "#343434" }, // Conservé
    "codeigniter": { icon: "codeigniter-plain", color: "#EE4323" }, // Conservé: couleur officielle
    "codepen": { icon: "codepen-plain", color: "#000000" }, // Conservé: couleur officielle
    "coffeescript": { icon: "coffeescript-original", color: "#2F2625" }, // Conservé
    "composer": { icon: "composer-line", color: "#885630" }, // Conservé
    "confluence": { icon: "confluence-original", color: "#172B4D" }, // Conservé: couleur officielle
    "couchdb": { icon: "couchdb-plain", color: "#E42528" }, // Conservé
    "crystal": { icon: "crystal-original", color: "#000000" }, // Conservé
    "d3js": { icon: "d3js-plain", color: "#F9A03C" }, // Conservé
    "deno": { icon: "denojs-original", color: "#000000" }, // Conservé: couleur officielle
    "debian": { icon: "debian-plain", color: "#A81D33" }, // Conservé: couleur officielle
    "devilbox": { icon: "devilbox-plain", color: "#F60000" }, // Conservé
    "digitalocean": { icon: "digitalocean-plain", color: "#0080FF" }, // Conservé: couleur officielle
    "discordjs": { icon: "discordjs-plain", color: "#5865F2" }, // Conservé: couleur officielle
    "django": { icon: "django-plain", color: "#092E20" }, // Conservé: couleur officielle
    "doctrine": { icon: "doctrine-plain", color: "#F56D39" }, // Conservé
    "dotnet": { icon: "dot-net-plain", color: "#512BD4" }, // Conservé: couleur officielle
    "dotnetcore": { icon: "dotnetcore-plain", color: "#512BD4" }, // Conservé: couleur officielle
    "drupal": { icon: "drupal-plain", color: "#0678BE" }, // Conservé: couleur officielle
    "electron": { icon: "electron-original", color: "#47848F" }, // Conservé: couleur officielle
    "eleventy": { icon: "eleventy-plain", color: "#000000" }, // Conservé
    "embeddedc": { icon: "embeddedc-plain", color: "#444444" }, // Conservé
    "ember": { icon: "ember-original", color: "#E04E39" }, // Conservé: couleur officielle
    "erlang": { icon: "erlang-plain", color: "#A90533" }, // Conservé: couleur officielle
    "eslint": { icon: "eslint-original", color: "#4B32C3" }, // Conservé: couleur officielle
    "fastapi": { icon: "fastapi-plain", color: "#009688" }, // Conservé
    "fedora": { icon: "fedora-plain", color: "#294172" }, // Conservé: couleur officielle
    "figma": { icon: "figma-plain", color: "#F24E1E" }, // Conservé: couleur officielle
    "firebase": { icon: "firebase-plain", color: "#FFCA28" }, // Conservé: couleur officielle
    "firefoxbrowser": { icon: "firefox-plain", color: "#FF7139" }, // Conservé: couleur officielle
    "flutter": { icon: "flutter-plain", color: "#02569B" }, // Conservé: couleur officielle
    "foundation": { icon: "foundation-plain", color: "#074E68" }, // Conservé
    "fsharp": { icon: "fsharp-plain", color: "#378BBA" }, // Conservé: couleur officielle
    "gatling": { icon: "gatling-plain", color: "#FF9E2A" }, // Conservé
    "gcc": { icon: "gcc-plain", color: "#FFCFAB" }, // Conservé
    "gentoo": { icon: "gentoo-plain", color: "#54487A" }, // Conservé: couleur officielle
    "gherkin": { icon: "gherkin-plain", color: "#00BF53" }, // Conservé
    "gimp": { icon: "gimp-plain", color: "#5C5543" }, // Conservé
    "git": { icon: "git-plain", color: "#F05032" }, // Conservé: couleur officielle
    "github": { icon: "github-original", color: "#181717" }, // Conservé: couleur officielle
    "gitlab": { icon: "gitlab-plain", color: "#FCA121" }, // Conservé: couleur officielle
    "gitter": { icon: "gitter-plain", color: "#ED1965" }, // Conservé
    "godot": { icon: "godot-plain", color: "#478CBF" }, // Conservé: couleur officielle
    "googlecloud": { icon: "googlecloud-plain", color: "#4285F4" }, // Conservé: couleur officielle
    "graphql": { icon: "graphql-plain", color: "#E10098" }, // Conservé: couleur officielle
    "grunt": { icon: "grunt-plain", color: "#FAA918" }, // Conservé: couleur officielle
    "gulp": { icon: "gulp-plain", color: "#CF4647" }, // Conservé: couleur officielle
    "handlebars": { icon: "handlebars-plain", color: "#000000" }, // Conservé
    "haxe": { icon: "haxe-plain", color: "#EA8220" }, // Conservé: couleur officielle
    "heroku": { icon: "heroku-original", color: "#430098" }, // Conservé: couleur officielle
    "illustrator": { icon: "illustrator-plain", color: "#FF9A00" }, // Conservé: couleur officielle
    "intellij": { icon: "intellij-plain", color: "#000000" }, // Conservé
    "ionic": { icon: "ionic-original", color: "#3880FF" }, // Conservé: couleur officielle
    "jamstack": { icon: "jamstack-original", color: "#F0047F" }, // Conservé
    "jasmine": { icon: "jasmine-plain", color: "#8A4182" }, // Conservé: couleur officielle
    "jenkins": { icon: "jenkins-line", color: "#D33833" }, // Conservé: couleur officielle
    "jest": { icon: "jest-plain", color: "#C21325" }, // Conservé: couleur officielle
    "jetbrains": { icon: "jetbrains-plain", color: "#000000" }, // Conservé
    "jira": { icon: "jira-plain", color: "#0052CC" }, // Conservé: couleur officielle
    "jquery": { icon: "jquery-plain", color: "#0769AD" }, // Conservé: couleur officielle
    "julia": { icon: "julia-plain", color: "#9558B2" }, // Conservé: couleur officielle
    "jupyter": { icon: "jupyter-plain", color: "#F37626" }, // Conservé: couleur officielle
    "kafka": { icon: "apachekafka-original", color: "#231F20" }, // Conservé
    "karate": { icon: "karate-plain", color: "#429F87" }, // Conservé
    "karma": { icon: "karma-plain", color: "#56C5A8" }, // Conservé
    "koa": { icon: "koa-plain", color: "#33333D" }, // Conservé
    "kubernetes": { icon: "kubernetes-plain", color: "#326CE5" }, // Conservé: couleur officielle
    "labview": { icon: "labview-plain", color: "#FFDB00" }, // Conservé: couleur officielle
    "latex": { icon: "latex-original", color: "#008080" }, // Conservé
    "less": { icon: "less-plain-wordmark", color: "#1D365D" }, // Conservé: couleur officielle
    "linkedin": { icon: "linkedin-plain", color: "#0A66C2" }, // Conservé: couleur officielle
    "linux": { icon: "linux-plain", color: "#FCC624" }, // Conservé: couleur officielle
    "llvm": { icon: "llvm-plain", color: "#262D3A" }, // Conservé
    "magento": { icon: "magento-original", color: "#EE672F" }, // Conservé: couleur officielle
    "mariadb": { icon: "mariadb-plain", color: "#003545" }, // Conservé: couleur officielle
    "materialui": { icon: "materialui-plain", color: "#0081CB" }, // Conservé: couleur officielle
    "matlab": { icon: "matlab-plain", color: "#0076A8" }, // Conservé
    "maya": { icon: "maya-plain", color: "#0F80CC" }, // Conservé
    "meteor": { icon: "meteor-plain", color: "#DF5052" }, // Conservé
    "microsoftsqlserver": { icon: "microsoftsqlserver-plain", color: "#CC2927" }, // Conservé: couleur officielle
    "msdos": { icon: "msdos-plain", color: "#4EAA25" }, // Conservé
    "mongodb": { icon: "mongodb-plain", color: "#47A248" }, // Conservé: couleur officielle
    "moodle": { icon: "moodle-plain", color: "#F7931E" }, // Conservé
    "mysql": { icon: "mysql-plain", color: "#4479A1" }, // Conservé: couleur officielle
    "neo4j": { icon: "neo4j-plain", color: "#008CC1" }, // Conservé: couleur officielle
    "nestjs": { icon: "nestjs-plain", color: "#E0234E" }, // Conservé: couleur officielle
    "networkx": { icon: "networkx-original", color: "#2C7FB8" }, // Conservé
    "nginx": { icon: "nginx-original", color: "#009639" }, // Conservé: couleur officielle
    "nixos": { icon: "nixos-plain", color: "#5277C3" }, // Conservé: couleur officielle
    "numpy": { icon: "numpy-original", color: "#013243" }, // Conservé: couleur officielle
    "ocaml": { icon: "ocaml-plain", color: "#EC6813" }, // Conservé: couleur officielle
    "opencv": { icon: "opencv-plain", color: "#5C3EE8" }, // Conservé
    "opengl": { icon: "opengl-plain", color: "#5586A4" }, // Conservé
    "opensuse": { icon: "opensuse-plain", color: "#73BA25" }, // Conservé: couleur officielle
    "opera": { icon: "opera-plain", color: "#FF1B2D" }, // Conservé: couleur officielle
    "oracle": { icon: "oracle-original", color: "#F80000" }, // Conservé: couleur officielle
    "pandas": { icon: "pandas-original", color: "#150458" }, // Conservé: couleur officielle
    "perl": { icon: "perl-plain", color: "#39457E" }, // Conservé: couleur officielle
    "phalcon": { icon: "phalcon-plain", color: "#76C39B" }, // Conservé
    "photoshop": { icon: "photoshop-plain", color: "#31A8FF" }, // Conservé: couleur officielle
    "phpstorm": { icon: "phpstorm-plain", color: "#000000" }, // Conservé
    "podman": { icon: "podman-plain", color: "#892CA0" }, // Conservé: couleur officielle
    "polygon": { icon: "polygon-plain", color: "#8247E5" }, // Conservé
    "postgresql": { icon: "postgresql-plain", color: "#4169E1" }, // Conservé: couleur officielle
    "premierepro": { icon: "premierepro-plain", color: "#9999FF" }, // Conservé: couleur officielle
    "processing": { icon: "processing-plain", color: "#0096D8" }, // Conservé
    "prometheus": { icon: "prometheus-original", color: "#E6522C" }, // Conservé: couleur officielle
    "protractor": { icon: "protractor-plain", color: "#ED163A" }, // Conservé
    "putty": { icon: "putty-plain", color: "#0000CE" }, // Conservé
    "pycharm": { icon: "pycharm-plain", color: "#000000" }, // Conservé
    "pytest": { icon: "pytest-plain", color: "#009FE3" }, // Conservé
    "qt": { icon: "qt-original", color: "#41CD52" }, // Conservé: couleur officielle
    "r": { icon: "r-plain", color: "#276DC3" }, // Conservé: couleur officielle
    "rails": { icon: "rails-plain", color: "#CC0000" }, // Conservé: couleur officielle
    "raspberrypi": { icon: "raspberrypi-line", color: "#A22846" }, // Conservé: couleur officielle
    "rect": { icon: "rect-plain", color: "#61DAFB" }, // Conservé: similaire à React
    "redhat": { icon: "redhat-plain", color: "#EE0000" }, // Conservé: couleur officielle
    "redis": { icon: "redis-plain", color: "#DC382D" }, // Conservé: couleur officielle
    "redux": { icon: "redux-original", color: "#764ABC" }, // Conservé: couleur officielle
    "rocksdb": { icon: "rocksdb-plain", color: "#2A2A2A" }, // Conservé
    "ros": { icon: "ros-plain", color: "#22314E" }, // Conservé
    "rspec": { icon: "rspec-original", color: "#00C100" }, // Conservé
    "rstudio": { icon: "rstudio-plain", color: "#75AADB" }, // Conservé: couleur officielle
    "rubymine": { icon: "rubymine-plain", color: "#000000" }, // Conservé
    "rust": { icon: "rust-plain", color: "#cb4e16" }, // Conservé
    "safari": { icon: "safari-plain", color: "#000000" }, // Conservé
    "salesforce": { icon: "salesforce-plain", color: "#00A1E0" }, // Conservé: couleur officielle
    "sass": { icon: "sass-original", color: "#CC6699" }, // Conservé: couleur officielle
    "sdl": { icon: "sdl-plain", color: "#0C5A93" }, // Conservé
    "selenium": { icon: "selenium-original", color: "#43B02A" }, // Conservé: couleur officielle
    "sequelize": { icon: "sequelize-plain", color: "#52B0E7" }, // Conservé: couleur officielle
    "shopware": { icon: "shopware-original", color: "#189EFF" }, // Conservé
    "shotgrid": { icon: "shotgrid-plain", color: "#000000" }, // Conservé
    "sketch": { icon: "sketch-line", color: "#F7B500" }, // Conservé: couleur officielle
    "socketio": { icon: "socketio-original", color: "#010101" }, // Conservé
    "solidity": { icon: "solidity-plain", color: "#363636" }, // Conservé
    "sourcetree": { icon: "sourcetree-original", color: "#0052CC" }, // Conservé: couleur officielle
    "splunk": { icon: "splunk-plain", color: "#000000" }, // Conservé
    "spss": { icon: "spss-plain", color: "#CC1E4A" }, // Conservé
    "sqlite": { icon: "sqlite-plain", color: "#003B57" }, // Conservé: couleur officielle
    "ssh": { icon: "ssh-original", color: "#231F20" }, // Conservé
    "storybook": { icon: "storybook-plain", color: "#FF4785" }, // Conservé: couleur officielle
    "stylus": { icon: "stylus-original", color: "#333333" }, // Conservé
    "subversion": { icon: "subversion-original", color: "#809CC9" }, // Conservé
    "symfony": { icon: "symfony-original", color: "#000000" }, // Conservé
    "tailwindcss": { icon: "tailwindcss-plain", color: "#06B6D4" }, // Conservé: couleur officielle
    "tensorflow": { icon: "tensorflow-original", color: "#FF6F00" }, // Conservé: couleur officielle
    "terraform": { icon: "terraform-plain", color: "#7B42BC" }, // Conservé: couleur officielle
    "thealgorithms": { icon: "thealgorithms-plain", color: "#00BCB4" }, // Conservé
    "threejs": { icon: "threejs-original", color: "#000000" }, // Conservé
    "tomcat": { icon: "tomcat-line", color: "#F8DC75" }, // Conservé
    "tortoisegit": { icon: "tortoisegit-plain", color: "#3561A3" }, // Conservé
    "towergit": { icon: "towergit-plain", color: "#ED1C24" }, // Conservé
    "travis": { icon: "travis-plain", color: "#3EAAAF" }, // Conservé: couleur officielle
    "trello": { icon: "trello-plain", color: "#0052CC" }, // Conservé: couleur officielle
    "twitter": { icon: "twitter-original", color: "#1DA1F2" }, // Conservé: couleur officielle
    "typo3": { icon: "typo3-plain", color: "#FF8700" }, // Conservé: couleur officielle
    "ubuntu": { icon: "ubuntu-plain", color: "#E95420" }, // Conservé: couleur officielle
    "unity": { icon: "unity-original", color: "#000000" }, // Conservé
    "unix": { icon: "unix-original", color: "#4B4B4B" }, // Conservé
    "unrealengine": { icon: "unrealengine-original", color: "#0E1128" }, // Conservé
    "uwsgi": { icon: "uwsgi-plain", color: "#23CC4D" }, // Conservé
    "vagrant": { icon: "vagrant-plain", color: "#1563FF" }, // Conservé: couleur officielle
    "vim": { icon: "vim-plain", color: "#019833" }, // Conservé: couleur officielle
    "visualstudio": { icon: "visualstudio-plain", color: "#5C2D91" }, // Conservé: couleur officielle
    "vscode": { icon: "vscode-plain", color: "#007ACC" }, // Conservé: couleur officielle
    "vuejs": { icon: "vuejs-plain", color: "#4FC08D" }, // Conservé: couleur officielle
    "vuestorefront": { icon: "vuestorefront-plain", color: "#5ECE7B" }, // Conservé
    "webflow": { icon: "webflow-original", color: "#4353FF" }, // Conservé
    "weblate": { icon: "weblate-plain", color: "#2ECCAA" }, // Conservé
    "webpack": { icon: "webpack-plain", color: "#8DD6F9" }, // Conservé: couleur officielle
    "webstorm": { icon: "webstorm-plain", color: "#000000" }, // Conservé
    "windows8": { icon: "windows8-original", color: "#0078D6" }, // Conservé: couleur officielle
    "woocommerce": { icon: "woocommerce-plain", color: "#96588A" }, // Conservé: couleur officielle
    "wordpress": { icon: "wordpress-plain", color: "#21759B" }, // Conservé: couleur officielle
    "xamarin": { icon: "xamarin-original", color: "#3498DB" }, // Conservé: couleur officielle
    "xcode": { icon: "xcode-plain", color: "#147EFB" }, // Conservé: couleur officielle
    "xd": { icon: "xd-plain", color: "#FF61F6" }, // Conservé: couleur officielle
    "yarn": { icon: "yarn-plain", color: "#2C8EBB" }, // Conservé: couleur officielle
    "yii": { icon: "yii-plain", color: "#0073BB" }, // Conservé
    "yunohost": { icon: "yunohost-plain", color: "#FFFFFF" }, // Conservé
    "zapier": { icon: "zapier-plain", color: "#FF4A00" }, // Conservé: couleur officielle
    "zeit": { icon: "zeit-plain", color: "#000000" }, // Conservé
    "zendesk": { icon: "zendesk-plain", color: "#03363D" }, // Conservé: couleur officielle
    "zend": { icon: "zend-plain", color: "#0679EA" }, // Conservé
    "zig": { icon: "zig-original", color: "#F7A41D" }, // Conservé: couleur officielle
};

const IconLanguage = (props: PropsLanguage) => {
    const { lang, selected } = props;
    const baseClass = selected ? "selected" : "disable";
    const normalizedLang = lang.toLowerCase();

    const getDeviconClass = (icon: string) => {
        return `devicon-${icon} ${baseClass}`;
    };

    const iconStyle = {
        fontSize: '1.2rem',
    };

    const iconInfo = iconMap[normalizedLang] || { icon: "code-plain", color: "#F07F73" };

    return (
        <i 
            className={getDeviconClass(iconInfo.icon)} 
            style={{ 
                ...iconStyle, 
                color: iconInfo.color
            }}
        />
    );
};

export default IconLanguage;