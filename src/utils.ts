import * as vscode from "vscode"

export function isSecretsFile(document: vscode.TextDocument): boolean {
	return (
		document.fileName.startsWith(".env") ||
		document.fileName.endsWith(".env") ||
		document.fileName.includes(".env.")
	)
}
