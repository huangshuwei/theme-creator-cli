#!/usr/bin/env node
import { command, parse, version } from "commander";

// @ts-ignore
import packageJSON from "../package.json";

// commands
import { dev } from "./commands/dev";
import { build } from "./commands/build";

version(`theme-creator-cli ${packageJSON.version}`);

command("dev")
    .description("Run theme-creator-cli dev")
    /* .option("--currentTheme <type>", "set current theme") */
    .action(dev);

command("build")
    .description("Run theme-creator-cli build")
    .action(build);

parse();

