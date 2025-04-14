import * as vscode from "vscode"
import { registerCommands } from "./commands"
import { initializeState } from "./state"
import { registerStatusBarItem } from "./statusbar"

export function activate(context: vscode.ExtensionContext) {
	console.log("Cloak Secrets is now active.")

	initializeState(context)
	registerStatusBarItem(context)
	registerCommands(context)
}

export function deactivate() {}

