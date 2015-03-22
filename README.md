# Github list open pull requests

## Install

This will install the bin as `gitlist`

```
npm install -g github-notity-node
```

## Usage

### Setting Github token

The token is critical because the module doesn't support oauth login, we aren't saving the token as public, will only be in your folder.

```
gitlist -t TOKEN
```

### Feching open pull requests

```
gitlist -u USER -r REPOSITORY
```

### Help

```
gitlist -h
```