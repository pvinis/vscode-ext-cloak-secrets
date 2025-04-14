import * as vscode from "vscode"
import { areSecretsCloaked } from "./state"

let statusBarItem: vscode.StatusBarItem

export function updateStatusBarItem() {
	const secretsCloaked = areSecretsCloaked()

	const icon = secretsCloaked ? `$(eye-closed)` : `$(eye)`
	const text = secretsCloaked ? "Uncloak" : "Cloak"
	statusBarItem.text = `${icon} ${text}`
	statusBarItem.command = "cloak-secrets.toggleSecrets"
	statusBarItem.tooltip = secretsCloaked ? "Uncloak secrets" : "Cloak secrets"
	statusBarItem.backgroundColor = secretsCloaked
		? undefined
		: new vscode.ThemeColor("statusBarItem.warningBackground")

	statusBarItem.show()
}

export function registerStatusBarItem(context: vscode.ExtensionContext) {
	statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left)
	context.subscriptions.push(statusBarItem)

	updateStatusBarItem()
}
