## Theme Creator Cli
[![NPM version](https://img.shields.io/npm/v/theme-creator-cli.svg?style=flat)](https://npmjs.org/package/theme-creator-cli)
[![NPM downloads](http://img.shields.io/npm/dm/theme-creator-cli.svg?style=flat)](https://npmjs.org/package/theme-creator-cli) 

Theme creator cli for vuejs and react.

As long as the UI library supports less or sass theme customization, it should support.

Here are the tested UI libraries. 

support follow react ui:
- [ant.design](https://github.com/ant-design/ant-design)

support follow vuejs ui:
- [element](https://github.com/ElemeFE/element)
- [vant](https://github.com/youzan/vant)

### Examples
- code:[React ant.design UI example](https://github.com/huangshuwei/theme-creator-cli/tree/master/example/react-theme-switch-demo)
- site:[React ant.design UI example](http://doc.huangsw.com/theme-creator-cli-demo/)

### Install

```
npm i theme-creator-cli
// or
yarn add theme-creator-cli
```

### Features

- [x] support less\scss\css theme file
- [x] css optimization。
  - [x] uglify css
  - [x] autoprefixer
  - [x] remove duplicates css
  - [x] merge css rules
  - [x] css auto prefixer
- [x] less\scss\css file change watch

### Requirements
node >= V10.0

### Command

```
// package.json
{
  "scripts": {
    "theme:dev": "theme-creator-cli dev",
    "theme:build": "theme-creator-cli build"
  }
}
```

**dev**

Run the local development environment.
When you run the dev command, you can compile the packaging style file in real time.

**build**

Run publishing environment.

### Config

```
// themes.config.js
module.exports = {
    // themes info [Array<any>]
    themes: [
        {
            // theme name [string]
            themeName: "theme-black",
            // this theme includes files[Array<string>]。Relative to the `theme.config.js` file path
            themeFiles: [
                "./src/css/themes/black/app.scss",
                "./src/css/themes/black/ant-design.less"
            ]
        },
        {
            themeName: "theme-blue",
            themeFiles: [
                "./src/css/themes/blue/app.scss",
                "./src/css/themes/blue/ant-design.less"
            ]
        },
        {
            themeName: "theme-orange",
            themeFiles: [
                "./src/css/themes/orange/app.scss",
                "./src/css/themes/orange/ant-design.less"
            ]
        },
        {
            themeName: "theme-red",
            themeFiles: [
                "./src/css/themes/red/app.scss",
                "./src/css/themes/red/ant-design.less"
            ]
        }
    ],
    // default theme [string]。it will create link tag in your html file.
    defaultTheme: "theme-black",
    // themes output folder name [string].Will be created in the public directory
    outputFolderName: "themes",
    // watch directory [Array<string>],.css\.less\.scss file in development environment will recomiple.
    watchDir: ["./src"],
    // those html file will effect [Array<string>]
    htmlFiles: ["./public/index.html"],
    // html link id  [string]。default link id is `theme_creator_cli_style_id`
    htmlLinkId: "theme_creator_cli_style_id"
};

```

### Global Variable

`theme-creator-cli` will created the `script` tag in your html file. like:

```
<script type="text/javascript" id="theme_creator_cli_script_id">
            window.theme_creator_cli_themeVars = [
                { key: "theme-black", themePath: "./themes/theme-black.css" },
                { key: "theme-blue", themePath: "./themes/theme-blue.css" },
                { key: "theme-orange", themePath: "./themes/theme-orange.css" },
                { key: "theme-red", themePath: "./themes/theme-red.css" }
            ];
</script>
```

So you can get the generated themes info by global variables :`window.theme_creator_cli_themeVars`

## License
http://www.opensource.org/licenses/mit-license.php
