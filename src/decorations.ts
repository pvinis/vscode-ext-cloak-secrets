import * as vscode from "vscode"
import { areSecretsCloaked } from "./state"
import { isSecretsFile } from "./utils"

let secretDecorationType: vscode.TextEditorDecorationType

export function initializeDecorations() {
	secretDecorationType = vscode.window.createTextEditorDecorationType({
		color: "#00000000",
		before: {
			contentText: "*******",
		},
	})
}

export function updateDecorations() {
	const secretsCloaked = areSecretsCloaked()

	vscode.window.visibleTextEditors.forEach((editor) => {
		if (isSecretsFile(editor.document)) {
			if (secretsCloaked) {
				applyDecorations(editor)
			} else {
				removeDecorations(editor)
			}
		}
	})
}

function applyDecorations(editor: vscode.TextEditor) {
	const document = editor.document
	const decorations: vscode.DecorationOptions[] = []

	for (let i = 0; i < document.lineCount; i++) {
		const line = document.lineAt(i)
		const text = line.text

		const equalsPos = text.indexOf("=")
		if (equalsPos !== -1) {
			const valueStart = new vscode.Position(i, equalsPos + 1)
			const valueEnd = new vscode.Position(i, text.length)
			const valueRange = new vscode.Range(valueStart, valueEnd)

			decorations.push({ range: valueRange })
		}
	}

	editor.setDecorations(secretDecorationType, decorations)
}

function removeDecorations(editor: vscode.TextEditor) {
	editor.setDecorations(secretDecorationType, [])
}

export function registerDecorations(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.window.onDidChangeActiveTextEditor((editor) => {
			if (editor && isSecretsFile(editor.document)) {
				updateDecorations()
			}
		}),
	)

	context.subscriptions.push(
		vscode.workspace.onDidChangeTextDocument((event) => {
			const editor = vscode.window.visibleTextEditors.find(
				(editor) => editor.document.uri.toString() === event.document.uri.toString(),
			)

			if (editor && isSecretsFile(editor.document)) {
				updateDecorations()
			}
		}),
	)

	updateDecorations()
}

export function disposeDecorations() {
	if (secretDecorationType) {
		secretDecorationType.dispose()
	}
}
