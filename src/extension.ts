import * as vscode from "vscode"
import { registerCommands } from "./commands"
import { initializeState } from "./state"
import { registerStatusBarItem } from "./statusbar"
import { initializeDecorations, registerDecorations, disposeDecorations } from "./decorations"

export function activate(context: vscode.ExtensionContext) {
	console.log("Cloak Secrets is now active.")

	initializeState(context)
	registerStatusBarItem(context)
	registerCommands(context)

	initializeDecorations()
	registerDecorations(context)
}

export function deactivate() {
	disposeDecorations()
}

