# yun
serverless project


## Requirements

- Node.js v6.11.x
- [Yarn](https://yarnpkg.com/en/)
- [Serverless](https://github.com/serverless/serverless)
- `awscli` and config/credential file


## Install

```
$ yarn
```


# Setting
- Edit sample/serverless.yml profile name to be consistent with your awscli setting


## Run local

```
$ sls invoke local --funcation hello
```


## Deploy to aws lambda

```
$ cd sample
$ sls deploy --function hello 
```


## Run

```
$ sls invoke local --funcation hello
```
