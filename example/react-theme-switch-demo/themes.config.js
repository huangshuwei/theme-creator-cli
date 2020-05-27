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
    // html link id  [string]。default link id is "theme_creator_cli_style_id"
    htmlLinkId: "theme_creator_cli_style_id"
};
