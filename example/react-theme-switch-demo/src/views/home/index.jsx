import React from "react";
import { message } from "antd";
import Table from "./table";
import Checkbox from "./checkbox";
import Radio from "./radio";
import Button from "./button";
import Collapse from "./collapse";
import SwitcherThemeTool from "theme-switcher-tool";

const themes = [
    {
        themeName: "theme-black",
        selected: false
    },
    {
        themeName: "theme-blue",
        selected: false
    },
    {
        themeName: "theme-orange",
        selected: false
    },
    {
        themeName: "theme-red",
        selected: false
    }
];

const themeList = window.theme_switcher_cli_themeVars.map(item => {
    item.themeName = item.key;
    item.themePath = item.themePath;
    return item;
});

const themeSwitcherTool = SwitcherThemeTool({
    themeList: themeList,
    styleLinkId: "theme_creator_cli_style_id",
    useStorage: true,
    storageKey: "theme_switcher_tool_theme"
});

let msgComp;

export default class Home extends React.Component {
    state = {
        themes: themes
    };

    componentDidMount() {
        // set default theme
        const currentTheme = themeSwitcherTool.getCurrentTheme();
        if (currentTheme) {
            this.changeTheme(currentTheme);
        }
    }

    // change theme
    changeTheme(themeName) {
        this.setState({
            themes: this.state.themes.slice().map(item => {
                item.selected = themeName === item.themeName;
                return item;
            })
        });

        themeSwitcherTool.switcher({
            themeName: themeName,
            loadingFn: this.switchThemeLoding,
            completedFn: this.switchThemeCompleted
        });
    }

    // switch Theme Loding
    switchThemeLoding() {
        msgComp = message.loading("theme loading...");
    }

    // switch Theme Completed
    switchThemeCompleted() {
        setTimeout(msgComp);
    }

    render() {
        return (
            <div className="home">
                <div className="home-top-bar">
                    <div className="title">
                        theme-creator-cli React Ant.Design UI Example
                    </div>
                    <div className="switch-theme-tool">
                        {this.state.themes.map((theme, index) => {
                            return (
                                <span
                                    key={index}
                                    onClick={() =>
                                        this.changeTheme(theme.themeName)
                                    }
                                    className={`${theme.themeName} color-item`}
                                >
                                    {theme.selected && (
                                        <i className="iconfont icon-check" />
                                    )}
                                </span>
                            );
                        })}
                    </div>
                </div>
                <div className="home-content">
                    <div className="content-item">
                        <div className="content-item-block">
                            <span className="icon" />
                            <span className="title">Table</span>
                        </div>
                        <Table />
                    </div>
                    <div className="content-item">
                        <div className="content-item-block">
                            <span className="icon" />
                            <span className="title">Checkbox</span>
                        </div>
                        <Checkbox />
                    </div>
                    <div className="content-item">
                        <div className="content-item-block">
                            <span className="icon" />
                            <span className="title">Radio</span>
                        </div>
                        <Radio />
                    </div>
                    <div className="content-item">
                        <div className="content-item-block">
                            <span className="icon" />
                            <span className="title">Button</span>
                        </div>
                        <Button />
                    </div>
                    <div className="content-item">
                        <div className="content-item-block">
                            <span className="icon" />
                            <span className="title">Collapse</span>
                        </div>
                        <Collapse />
                    </div>
                </div>
            </div>
        );
    }
}
