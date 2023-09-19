# depot-b2e

## Start

### install

```shell
pnpm install
```

### run

- run

```shell
pnpm start
```

- dev

```shell
pnpm start:dev
```

- debug

```shell
pnpm start:debug
```

> 啟動後打開: [http://localhost:3050](http://localhost:3000/)

## docker

### build image

```shell
docker build --pull --rm -f ".dockerfile" -t nest-app:latest .
```

### docker run

```shell
docker run --name car -p 8055:3050 nest-app
```
