# Github list open pull requests

## Install

```
npm install -g gitlist
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