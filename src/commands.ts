import * as vscode from "vscode"
import { areSecretsCloaked, setSecretsCloaked } from "./state"

export function hideSecrets() {
	setSecretsCloaked(true)
}

export function showSecrets() {
	setSecretsCloaked(false)
}

export function toggleSecrets() {
	const currentState = areSecretsCloaked()
	setSecretsCloaked(!currentState)
}

export function registerCommands(context: vscode.ExtensionContext) {
	const hide = vscode.commands.registerCommand("cloak-secrets.hideSecrets", hideSecrets)
	context.subscriptions.push(hide)

	const show = vscode.commands.registerCommand("cloak-secrets.showSecrets", showSecrets)
	context.subscriptions.push(show)

	const toggle = vscode.commands.registerCommand("cloak-secrets.toggleSecrets", toggleSecrets)
	context.subscriptions.push(toggle)
}
