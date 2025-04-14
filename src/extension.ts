
let statusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
  console.log('Cloak Secrets is now active.');

  statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
  context.subscriptions.push(statusBarItem);

export function updateStatusBarItem() {
  const icon = areSecretsCloaked() ? `$(eye-closed)` : `$(eye)`;
  const text = areSecretsCloaked() ? 'Uncloak' : 'Cloak';
  const tooltip = areSecretsCloaked() ? 'Uncloak secrets' : 'Cloak secrets';

  statusBarItem.text = `${icon} ${text}`;
  statusBarItem.tooltip = tooltip;
  statusBarItem.show();
}

