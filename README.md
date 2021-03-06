# Github list

Fetching all the pull requests open from an specifc user and repository.

## Install

This will install the bin as `gitlist`

```bash
npm install -g github-notity-node
```

## Usage

### Setting Github token

First generate a new token [follow this instructions](https://help.github.com/articles/creating-an-access-token-for-command-line-use/#creating-a-token), then set the token using the next command:

```bash
gitlist -t TOKEN
```

*Note: this will be saved in your `~/.ssh` folder with a file called `config.gitlist`*

### Feching open pull requests

```bash
gitlist -u USER -r REPOSITORY
```

### Help

```bash
gitlist -h
```

## License

[MIT](LICENSE.md)