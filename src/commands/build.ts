import { writeThemes } from "../common/write-themes";
import { writeThemeDb } from "../common/write-themes-db";
import consola from "consola";
import { writeDefaultThemes } from "../common/write-default-theme";
import { ENV_PRODUCTION, THEME_CREATOR_LOG } from "../common/constant";

export async function build() {
    process.env.NODE_ENV = ENV_PRODUCTION;

    try {
        await writeThemes();
        await writeThemeDb();
        await writeDefaultThemes();
    } catch (error) {
        consola.error(`${THEME_CREATOR_LOG} error:\n${error}`);
    }
}
