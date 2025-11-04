import {test, expect, Shell} from "@microsoft/tui-test";
import * as path from "node:path";

const binDir = process.env.BIN_DIR || "../bin";
const gamestats = path.join(binDir, "gamestats");

test.use({shell: Shell.Bash, rows: 15});

test("should print help", async ({terminal}) => {
	terminal.submit(gamestats + " --help");
	await expect(terminal.getByText("Help")).toBeVisible();
	await expect(terminal).toMatchSnapshot();
});

test("should print rankings", async ({terminal}) => {
	terminal.submit(gamestats + " --ranks");
	await expect(terminal.getByText("Noob")).toBeVisible();
	await expect(terminal.getByText("Silver")).toBeVisible();
	await expect(terminal.getByText("Diamond")).toBeVisible();
	await expect(terminal.getByText("Grandmaster")).toBeVisible();
	await expect(terminal).toMatchSnapshot();
})