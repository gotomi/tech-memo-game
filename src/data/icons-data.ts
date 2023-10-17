export type GameIcon = {
  icon: string;
  src: string;
  state: "open" | "hidden" | "resolved";
  marked?: boolean;
};

const icons: GameIcon[] = [
  {
    icon: "abell",
    src: "abell.svg",
    state: "hidden",
  },
  {
    icon: "default",
    src: "default.svg",
    state: "hidden",
  },
  {
    icon: "gradle",
    src: "gradle.svg",
    state: "hidden",
  },
  {
    icon: "pnpm",
    src: "pnpm.svg",
    state: "hidden",
  },
  {
    icon: "save",
    src: "save.svg",
    state: "hidden",
  },
  {
    icon: "tailwind",
    src: "tailwind.svg",
    state: "hidden",
  },
  {
    icon: "vitest",
    src: "vitest.svg",
    state: "hidden",
  },
  {
    icon: "android",
    src: "android.svg",
    state: "hidden",
  },
  {
    icon: "build",
    src: "build.svg",
    state: "hidden",
  },
  {
    icon: "dhall",
    src: "dhall.svg",
    state: "hidden",
  },
  {
    icon: "graphql",
    src: "graphql.svg",
    state: "hidden",
  },
  {
    icon: "next",
    src: "next.svg",
    state: "hidden",
  },
  {
    icon: "postcss",
    src: "postcss.svg",
    state: "hidden",
  },
  {
    icon: "scala",
    src: "scala.svg",
    state: "hidden",
  },
  {
    icon: "terraform",
    src: "terraform.svg",
    state: "hidden",
  },
  {
    icon: "angular",
    src: "angular.svg",
    state: "hidden",
  },
  {
    icon: "cakephp",
    src: "cakephp.svg",
    state: "hidden",
  },
  {
    icon: "docker",
    src: "docker.svg",
    state: "hidden",
  },
  {
    icon: "grunt",
    src: "grunt.svg",
    state: "hidden",
  },
  {
    icon: "julia",
    src: "julia.svg",
    state: "hidden",
  },
  {
    icon: "nextjs",
    src: "nextjs.svg",
    state: "hidden",
  },
  {
    icon: "powerpoint",
    src: "powerpoint.svg",
    state: "hidden",
  },
  {
    icon: "scheme",
    src: "scheme.svg",
    state: "hidden",
  },
  {
    icon: "test",
    src: "test.svg",
    state: "hidden",
  },
  {
    icon: "vsc",
    src: "vsc.svg",
    state: "hidden",
  },
  {
    icon: "apache",
    src: "apache.svg",
    state: "hidden",
  },
  {
    icon: "clojure",
    src: "clojure.svg",
    state: "hidden",
  },
  {
    icon: "dotenv",
    src: "dotenv.svg",
    state: "hidden",
  },
  {
    icon: "gulp",
    src: "gulp.svg",
    state: "hidden",
  },
  {
    icon: "jupyter",
    src: "jupyter.svg",
    state: "hidden",
  },
  {
    icon: "nginx",
    src: "nginx.svg",
    state: "hidden",
  },
  {
    icon: "prettier",
    src: "prettier.svg",
    state: "hidden",
  },
  {
    icon: "sentry",
    src: "sentry.svg",
    state: "hidden",
  },
  {
    icon: "testjs",
    src: "testjs.svg",
    state: "hidden",
  },
  {
    icon: "vue",
    src: "vue.svg",
    state: "hidden",
  },
  {
    icon: "cmake",
    src: "cmake.svg",
    state: "hidden",
  },
  {
    icon: "dotnet",
    src: "dotnet.svg",
    state: "hidden",
  },
  {
    icon: "handlebars",
    src: "handlebars.svg",
    state: "hidden",
  },
  {
    icon: "karma",
    src: "karma.svg",
    state: "hidden",
  },
  {
    icon: "nim",
    src: "nim.svg",
    state: "hidden",
  },
  {
    icon: "prisma",
    src: "prisma.svg",
    state: "hidden",
  },
  {
    icon: "sequelize",
    src: "sequelize.svg",
    state: "hidden",
  },
  {
    icon: "wasm",
    src: "wasm.svg",
    state: "hidden",
  },
  {
    icon: "app",
    src: "app.svg",
    state: "hidden",
  },
  {
    icon: "codekit",
    src: "codekit.svg",
    state: "hidden",
  },
  {
    icon: "ejs",
    src: "ejs.svg",
    state: "hidden",
  },
  {
    icon: "harbour",
    src: "harbour.svg",
    state: "hidden",
  },
  {
    icon: "keystone",
    src: "keystone.svg",
    state: "hidden",
  },
  {
    icon: "nix",
    src: "nix.svg",
    state: "hidden",
  },
  {
    icon: "proto",
    src: "proto.svg",
    state: "hidden",
  },
  {
    icon: "settings-red",
    src: "settings-red.svg",
    state: "hidden",
  },
  {
    icon: "tests",
    src: "tests.svg",
    state: "hidden",
  },
  {
    icon: "webpack",
    src: "webpack.svg",
    state: "hidden",
  },
  {
    icon: "applescript",
    src: "applescript.svg",
    state: "hidden",
  },
  {
    icon: "coffeescript",
    src: "coffeescript.svg",
    state: "hidden",
  },
  {
    icon: "elixir",
    src: "elixir.svg",
    state: "hidden",
  },
  {
    icon: "haskell",
    src: "haskell.svg",
    state: "hidden",
  },
  {
    icon: "kotlin",
    src: "kotlin.svg",
    state: "hidden",
  },
  {
    icon: "puppet",
    src: "puppet.svg",
    state: "hidden",
  },
  {
    icon: "settings",
    src: "settings.svg",
    state: "hidden",
  },
  {
    icon: "tex",
    src: "tex.svg",
    state: "hidden",
  },
  {
    icon: "word",
    src: "word.svg",
    state: "hidden",
  },
  {
    icon: "arduino",
    src: "arduino.svg",
    state: "hidden",
  },
  {
    icon: "cpp-alt",
    src: "cpp-alt.svg",
    state: "hidden",
  },
  {
    icon: "elm",
    src: "elm.svg",
    state: "hidden",
  },
  {
    icon: "haxe",
    src: "haxe.svg",
    state: "hidden",
  },
  {
    icon: "less",
    src: "less.svg",
    state: "hidden",
  },
  {
    icon: "node",
    src: "node.svg",
    state: "hidden",
  },
  {
    icon: "purescript",
    src: "purescript.svg",
    state: "hidden",
  },
  {
    icon: "singularity",
    src: "singularity.svg",
    state: "hidden",
  },
  {
    icon: "xi",
    src: "xi.svg",
    state: "hidden",
  },
  {
    icon: "asciidoc",
    src: "asciidoc.svg",
    state: "hidden",
  },
  {
    icon: "cpp",
    src: "cpp.svg",
    state: "hidden",
  },
  {
    icon: "eslint",
    src: "eslint.svg",
    state: "hidden",
  },
  {
    icon: "html",
    src: "html.svg",
    state: "hidden",
  },
  {
    icon: "liquid",
    src: "liquid.svg",
    state: "hidden",
  },
  {
    icon: "notepad",
    src: "notepad.svg",
    state: "hidden",
  },
  {
    icon: "python",
    src: "python.svg",
    state: "hidden",
  },
  {
    icon: "sketch",
    src: "sketch.svg",
    state: "hidden",
  },
  {
    icon: "theme",
    src: "theme.svg",
    state: "hidden",
  },
  {
    icon: "yaml",
    src: "yaml.svg",
    state: "hidden",
  },
  {
    icon: "assembly",
    src: "assembly.svg",
    state: "hidden",
  },
  {
    icon: "crystal",
    src: "crystal.svg",
    state: "hidden",
  },
  {
    icon: "excel",
    src: "excel.svg",
    state: "hidden",
  },
  {
    icon: "livescript",
    src: "livescript.svg",
    state: "hidden",
  },
  {
    icon: "npm",
    src: "npm.svg",
    state: "hidden",
  },
  {
    icon: "racket",
    src: "racket.svg",
    state: "hidden",
  },
  {
    icon: "slim",
    src: "slim.svg",
    state: "hidden",
  },
  {
    icon: "todo",
    src: "todo.svg",
    state: "hidden",
  },
  {
    icon: "yarn",
    src: "yarn.svg",
    state: "hidden",
  },
  {
    icon: "autoit",
    src: "autoit.svg",
    state: "hidden",
  },
  {
    icon: "csharp",
    src: "csharp.svg",
    state: "hidden",
  },
  {
    icon: "favicon",
    src: "favicon.svg",
    state: "hidden",
  },
  {
    icon: "i18n",
    src: "i18n.svg",
    state: "hidden",
  },
  {
    icon: "log",
    src: "log.svg",
    state: "hidden",
  },
  {
    icon: "nsis",
    src: "nsis.svg",
    state: "hidden",
  },
  {
    icon: "react-alt",
    src: "react-alt.svg",
    state: "hidden",
  },
  {
    icon: "snowpackjs",
    src: "snowpackjs.svg",
    state: "hidden",
  },
  {
    icon: "tslint",
    src: "tslint.svg",
    state: "hidden",
  },
  {
    icon: "zephir",
    src: "zephir.svg",
    state: "hidden",
  },
  {
    icon: "avalonia",
    src: "avalonia.svg",
    state: "hidden",
  },
  {
    icon: "css",
    src: "css.svg",
    state: "hidden",
  },
  {
    icon: "figma",
    src: "figma.svg",
    state: "hidden",
  },
  {
    icon: "illustrator",
    src: "illustrator.svg",
    state: "hidden",
  },
  {
    icon: "lua",
    src: "lua.svg",
    state: "hidden",
  },
  {
    icon: "nuget",
    src: "nuget.svg",
    state: "hidden",
  },
  {
    icon: "react",
    src: "react.svg",
    state: "hidden",
  },
  {
    icon: "solidity",
    src: "solidity.svg",
    state: "hidden",
  },
  {
    icon: "turborepo",
    src: "turborepo.svg",
    state: "hidden",
  },
  {
    icon: "zig",
    src: "zig.svg",
    state: "hidden",
  },
  {
    icon: "azure",
    src: "azure.svg",
    state: "hidden",
  },
  {
    icon: "cuda",
    src: "cuda.svg",
    state: "hidden",
  },
  {
    icon: "firebase",
    src: "firebase.svg",
    state: "hidden",
  },
  {
    icon: "markdown",
    src: "markdown.svg",
    state: "hidden",
  },
  {
    icon: "nunjucks",
    src: "nunjucks.svg",
    state: "hidden",
  },
  {
    icon: "reason",
    src: "reason.svg",
    state: "hidden",
  },
  {
    icon: "source",
    src: "source.svg",
    state: "hidden",
  },
  {
    icon: "typescript",
    src: "typescript.svg",
    state: "hidden",
  },
  {
    icon: "zip",
    src: "zip.svg",
    state: "hidden",
  },
  {
    icon: "babel",
    src: "babel.svg",
    state: "hidden",
  },
  {
    icon: "images",
    src: "images.svg",
    state: "hidden",
  },
  {
    icon: "marko",
    src: "marko.svg",
    state: "hidden",
  },
  {
    icon: "objectivec",
    src: "objectivec.svg",
    state: "hidden",
  },
  {
    icon: "rescript",
    src: "rescript.svg",
    state: "hidden",
  },
  {
    icon: "storybook",
    src: "storybook.svg",
    state: "hidden",
  },
  {
    icon: "unity",
    src: "unity.svg",
    state: "hidden",
  },
  {
    icon: "cypress",
    src: "cypress.svg",
    state: "hidden",
  },
  {
    icon: "fortran",
    src: "fortran.svg",
    state: "hidden",
  },
  {
    icon: "jade",
    src: "jade.svg",
    state: "hidden",
  },
  {
    icon: "matlab-red",
    src: "matlab-red.svg",
    state: "hidden",
  },
  {
    icon: "objectivecpp",
    src: "objectivecpp.svg",
    state: "hidden",
  },
  {
    icon: "rollup",
    src: "rollup.svg",
    state: "hidden",
  },
  {
    icon: "vercel",
    src: "vercel.svg",
    state: "hidden",
  },
  {
    icon: "bench",
    src: "bench.svg",
    state: "hidden",
  },
  {
    icon: "cython",
    src: "cython.svg",
    state: "hidden",
  },
  {
    icon: "fsharp",
    src: "fsharp.svg",
    state: "hidden",
  },
  {
    icon: "java-alt",
    src: "java-alt.svg",
    state: "hidden",
  },
  {
    icon: "matlab",
    src: "matlab.svg",
    state: "hidden",
  },
  {
    icon: "ocaml",
    src: "ocaml.svg",
    state: "hidden",
  },
  {
    icon: "styles",
    src: "styles.svg",
    state: "hidden",
  },
  {
    icon: "blade",
    src: "blade.svg",
    state: "hidden",
  },
  {
    icon: "dart",
    src: "dart.svg",
    state: "hidden",
  },
  {
    icon: "java",
    src: "java.svg",
    state: "hidden",
  },
  {
    icon: "mdx",
    src: "mdx.svg",
    state: "hidden",
  },
  {
    icon: "root",
    src: "root.svg",
    state: "hidden",
  },
  {
    icon: "stylus",
    src: "stylus.svg",
    state: "hidden",
  },
  {
    icon: "views",
    src: "views.svg",
    state: "hidden",
  },
  {
    icon: "database",
    src: "database.svg",
    state: "hidden",
  },
  {
    icon: "git",
    src: "git.svg",
    state: "hidden",
  },
  {
    icon: "javascript",
    src: "javascript.svg",
    state: "hidden",
  },
  {
    icon: "mjml",
    src: "mjml.svg",
    state: "hidden",
  },
  {
    icon: "pascal-project",
    src: "pascal-project.svg",
    state: "hidden",
  },
  {
    icon: "rstudio",
    src: "rstudio.svg",
    state: "hidden",
  },
  {
    icon: "sublime",
    src: "sublime.svg",
    state: "hidden",
  },
  {
    icon: "vim",
    src: "vim.svg",
    state: "hidden",
  },
  {
    icon: "bower",
    src: "bower.svg",
    state: "hidden",
  },
  {
    icon: "database2",
    src: "database2.svg",
    state: "hidden",
  },
  {
    icon: "gitlab",
    src: "gitlab.svg",
    state: "hidden",
  },
  {
    icon: "jenkins",
    src: "jenkins.svg",
    state: "hidden",
  },
  {
    icon: "mocha",
    src: "mocha.svg",
    state: "hidden",
  },
  {
    icon: "pdf",
    src: "pdf.svg",
    state: "hidden",
  },
  {
    icon: "ruby",
    src: "ruby.svg",
    state: "hidden",
  },
  {
    icon: "svelte",
    src: "svelte.svg",
    state: "hidden",
  },
  {
    icon: "visualbasic",
    src: "visualbasic.svg",
    state: "hidden",
  },
  {
    icon: "brainfuck",
    src: "brainfuck.svg",
    state: "hidden",
  },
  {
    icon: "gnu",
    src: "gnu.svg",
    state: "hidden",
  },
  {
    icon: "model",
    src: "model.svg",
    state: "hidden",
  },
  {
    icon: "phalcon",
    src: "phalcon.svg",
    state: "hidden",
  },
  {
    icon: "rust",
    src: "rust.svg",
    state: "hidden",
  },
  {
    icon: "svg",
    src: "svg.svg",
    state: "hidden",
  },
  {
    icon: "visualstudio",
    src: "visualstudio.svg",
    state: "hidden",
  },
  {
    icon: "browserlist",
    src: "browserlist.svg",
    state: "hidden",
  },
  {
    icon: "db",
    src: "db.svg",
    state: "hidden",
  },
  {
    icon: "go",
    src: "go.svg",
    state: "hidden",
  },
  {
    icon: "jest",
    src: "jest.svg",
    state: "hidden",
  },
  {
    icon: "moleculer",
    src: "moleculer.svg",
    state: "hidden",
  },
  {
    icon: "photoshop",
    src: "photoshop.svg",
    state: "hidden",
  },
  {
    icon: "sass",
    src: "sass.svg",
    state: "hidden",
  },
  {
    icon: "swift",
    src: "swift.svg",
    state: "hidden",
  },
  {
    icon: "visualstudiocode",
    src: "visualstudiocode.svg",
    state: "hidden",
  },
  {
    icon: "brunch",
    src: "brunch.svg",
    state: "hidden",
  },
  {
    icon: "godot",
    src: "godot.svg",
    state: "hidden",
  },
  {
    icon: "jinja",
    src: "jinja.svg",
    state: "hidden",
  },
  {
    icon: "mysql-workbench",
    src: "mysql-workbench.svg",
    state: "hidden",
  },
  {
    icon: "php",
    src: "php.svg",
    state: "hidden",
  },
];
export default icons;
