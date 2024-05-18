# Nestjs gRPC Microservices

This is the mini microservices with `nestjs` and `gRPC`.

## Tech Stacks

- nestjs
- gRPC

## Script

### Generate App

```bash
nest generate app auth
```

### Generate Resource

```bash
nest g resource users
```

### Generate Lib

```bash
nest g lib common
```

### Run Service

```bash
yarn start:dev auth
```

### proto generate

```bash
protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./ --ts_proto_opt=nestJs=true ./proto/auth.proto
```
