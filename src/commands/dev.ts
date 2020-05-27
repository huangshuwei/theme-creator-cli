import { writeThemes } from "../common/write-themes";
import { writeThemeDb } from "../common/write-themes-db";
import { writeDefaultThemes } from "../common/write-default-theme";
import consola from "consola";
import { THEME_CREATOR_LOG, ENV_DEVELOPMENT } from "../common/constant";
import { watchFileChange } from "../common/watch-files";

export async function dev() {
    process.env.NODE_ENV = ENV_DEVELOPMENT;

    try {
        await writeThemes();
        await writeThemeDb();
        await writeDefaultThemes();
        watchFileChange();
    } catch (error) {
        consola.error(`${THEME_CREATOR_LOG} error:\n${error}`);
    }
}
