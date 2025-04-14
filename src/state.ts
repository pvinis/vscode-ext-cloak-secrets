import * as vscode from "vscode"
import { updateStatusBarItem } from "./statusbar"
import { updateDecorations } from "./decorations"

let extensionContext: vscode.ExtensionContext

const SECRETS_CLOAKED_KEY = "secretsCloaked"

export function initializeState(context: vscode.ExtensionContext) {
	extensionContext = context

	const config = vscode.workspace.getConfiguration("cloak-secrets")
	const initialValue = config.get("initialValue", true)
	extensionContext.workspaceState.update(SECRETS_CLOAKED_KEY, initialValue)
}

export function areSecretsCloaked(): boolean {
	return extensionContext.workspaceState.get(SECRETS_CLOAKED_KEY, true)
}

export function setSecretsCloaked(cloak: boolean) {
	console.log("Secrets are now " + (cloak ? "cloaked" : "uncloaked") + ".")
	return extensionContext.workspaceState.update(SECRETS_CLOAKED_KEY, cloak).then(() => {
		updateStatusBarItem()
		updateDecorations()
	})
}
