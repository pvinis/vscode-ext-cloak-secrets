# `Cloak Secrets` for Visual Studio Code

![Cloak Secrets icon](./resources/cloak-small.png)

`Cloak Secrets` hides/shows your secrets in environment files, to avoid accidentally sharing them with everyone who sees your screen.

## Features

Cloak Secrets can be useful if you:

- present on stage
- stream on Twitch or YouTube
- record screencasts of your code

Just run the command `Cloak: Hide Secrets` from the command palette and all your secrets will be hidden. You can confidently go to your `.env` files and show them to the world.

> Tip: There is a statusbar item can toggle the visibility of your secrets.

## Installation

1. Open **Extensions** panel in VSCode.
1. Search for `Cloak Secrets`
1. Click **Install**

## Settings

| Property                      | Description                          | Default |
| ----------------------------- | ------------------------------------ | ------- |
| `cloak-settings.initialValue` | Whether to cloak secrets on startup. | `true`  |

## Commands

- `Hide Secrets`
- `Show Secrets`
- `Toggle Secrets`

## How it Works

Cloak Secrets:

- does **not** modify your files.
- does **not** store any information about your secrets.
- does change the **foreground color** to an alpha color of 00, which makes the secret transparent and hidden

## Changelog

See the [CHANGELOG](/changelog) latest changes.

## Thanks

Inspired by [John Papas](https://x.com/john_papa)'s https://github.com/johnpapa/vscode-cloak, which is turn was inspired by [John Lindquist](https://twitter.com/johnlindquist) and [Wes Bos](https://twitter.com/wesbos).
