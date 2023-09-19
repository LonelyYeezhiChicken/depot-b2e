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

## TODO

### 資料維護

1. [] 車種資料維護
2. [] 零件資料維護
3. [] 會員資料維護
4. [] 折扣資料維護
5. [] 商店資訊維護

### 訂單模組

1. [] 訂單
2. [] 折扣

### Admin管理

1. [] 增刪查改使用者
2. [] 使用者授權
3. [] 使用者停權
4. [] 權限驗證

### 資料分析:

> 1. 預測下次回廠時間（另外展開）
