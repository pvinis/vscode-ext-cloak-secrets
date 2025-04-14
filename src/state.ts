import * as vscode from "vscode"
import { updateStatusBarItem } from "./statusbar"
import { updateDecorations } from "./decorations"

let extensionContext: vscode.ExtensionContext

const SECRETS_CLOAKED_KEY = "secretsCloaked"

export function initializeState(context: vscode.ExtensionContext) {
	extensionContext = context

	if (extensionContext.workspaceState.get(SECRETS_CLOAKED_KEY) === undefined) {
		extensionContext.workspaceState.update(SECRETS_CLOAKED_KEY, false)
	}
}

export function areSecretsCloaked(): boolean {
	return extensionContext.workspaceState.get(SECRETS_CLOAKED_KEY, false)
}

export function setSecretsCloaked(cloak: boolean) {
	console.log("Secrets are now " + (cloak ? "cloaked" : "uncloaked") + ".")
	return extensionContext.workspaceState.update(SECRETS_CLOAKED_KEY, cloak).then(() => {
		updateStatusBarItem()
		updateDecorations()
	})
}
