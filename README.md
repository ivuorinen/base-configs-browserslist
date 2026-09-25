# @ivuorinen/browserslist-config <!-- omit in toc -->

[![npm package][npm-badge]][npm-link] [![license MIT][license-badge]][license-link] [![ivuorinen's Code Style][style-badge]][style-link]

> ivuorinen's shareable configuration for [`Browserslist`][browserslist-link].

## Table of Contents <!-- omit in toc -->

- [Supported Browsers](#supported-browsers)
- [Installation](#installation)
- [Documentations](#documentations)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

## Supported Browsers

> 'defaults and fully supports es6-module', 'maintained node versions'

See the up to date list of supported browsers in the [Browserslist docs](https://browsersl.ist/#q=%22browserslist%22%3A+%5B%0A++%22defaults+and+fully+supports+es6-module%22%2C%0A++%22maintained+node+versions%22%0A%5D).

## Installation

Install `this config` as a _`devDependencies`_:

```sh
# npm
npm install @ivuorinen/browserslist-config --save-dev

# Yarn
yarn add @ivuorinen/browserslist-config --dev
```

Create a _`.browserslistrc`_ in the project's root folder with the following configuration:

```text
extends @ivuorinen/browserslist-config
```

With npm, a `postinstall` script writes exactly this file when the project has no Browserslist config yet (npm 11
warns that the script is not covered by `allowScripts`). Yarn 4 does not run dependency install scripts, so no file is
written. pnpm refuses unapproved install scripts and fails the install until you allow this package with
`pnpm approve-builds`. In both cases create the file by hand as above — without it tools silently fall back to
Browserslist's `defaults`.

## Documentations

Read the [Browserslist docs][browserslist-docs-link] for more information.

## Contributing

If you are interested in helping contribute, please open an [issue][issue-link] or [pull request][pull-request-link].

## Changelog

See [CHANGELOG][changelog-link] for a human-readable history of changes.

## License

Distributed under the MIT License. See [LICENSE][license-link] for more information.

[changelog-link]: https://github.com/ivuorinen/base-configs-browserslist/releases
[browserslist-docs-link]: https://github.com/browserslist/browserslist
[browserslist-link]: https://github.com/browserslist/browserslist
[issue-link]: https://github.com/ivuorinen/base-configs-browserslist/issues
[license-badge]: https://img.shields.io/github/license/ivuorinen/base-configs-browserslist?style=flat-square&labelColor=292a44&color=663399
[license-link]: ./LICENSE.md
[npm-badge]: https://img.shields.io/npm/v/@ivuorinen/browserslist-config?style=flat-square&labelColor=292a44&color=663399
[npm-link]: https://www.npmjs.com/package/@ivuorinen/browserslist-config
[pull-request-link]: https://github.com/ivuorinen/base-configs-browserslist/pulls
[style-badge]: https://img.shields.io/badge/code_style-ivuorinen%E2%80%99s-663399.svg?labelColor=292a44&style=flat-square
[style-link]: https://github.com/ivuorinen/base-configs-browserslist
