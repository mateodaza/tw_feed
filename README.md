# dexFreight.io Test - Twitter Feed

## Getting Started

Setup project for both development and production environments

### Prerequisites

The stack consists on NextJS for SSR (w/React) + Express, mobX is there for state management.

latest NodeJS is used. v10.10.0


### Installing

Install modules

```
npm install 
```

Run Dev Environment
```
npm run dev
```

Run Prod Environment
```
npm run build
npm start
```

### Docker

Build it using docker
```
docker build -t tw_feed .
```
Run app
```
docker run --rm -it -p 3000:3000 tw_feed
```
### Testing

Run tests with mocha
```
npm run test (not working but soon 😉 )
```

### Demo
* [Live Demo](http://dexfreight-twfeed.herokuapp.com)

## Author

* [Mateo Daza](https://github.com/mateodaza)
