# JS Basic Algolia

Simple Node.js playground to use the Algolia JavaScript API client.

To learn more about the client, generally, visit the [Getting Started](https://www.algolia.com/doc/api-client/javascript/getting-started/) guide.

# Usage Notes

## Clone the Repo
```
git clone https://github.com/agdavid/js-basic-algolia
```

## Install the Packages
```
npm install
```

## Update Your Credentials
In `app.js`, replace with your real application credentials:
```
var client = algoliasearch('MY_APP_ID', 'MY_API_KEY');
var index = client.initIndex('MY_INDEX_NAME');
```

## Have Fun With Some Methods
Checkout the [API methods here](https://www.algolia.com/doc/api-reference/api-methods/).

## Run
```
node app.js
```
