var algoliasearch = require('algoliasearch');
var client = algoliasearch('MY_APP_ID', 'MY_API_KEY');
var index = client.initIndex('MY_INDEX_NAME');

// //*** MULTI QUERY ***
// // var client = algoliasearch('MY_APP_ID', 'MY_API_KEY');
// //
// var queries = [{
//   indexName: 'test_joins',
//   query: '',
//   params: {
//     filters: '(A:0 AND B:2)',
//   }
// }, {
//   indexName: 'test_joins',
//   query: '',
//   params: {
//     filters: '(A:0 AND B:3)',
//   }
// }];
//
// client.search(queries, function searchCallback(err, content) {
//   if (err) throw err;
//
//   console.log(content.results);
// });

// client.getLogs({
//   offset: 0, // where to start from, default to 0
//   length: 1000, // how much lines do you want, default to 10
//   type: 'build' // which logs do you want, default to no value (all)
// }, function(err, content) {
//   console.log(JSON.stringify(content, undefined, 2));
// });

// index.searchForFacetValues({
//   facetName: 'title',
//   facetQuery: 'CEO',
//   maxValuesPerFacet: 1000
// }, function(err, content) {
//   if (err) throw err;
//
//   console.log(JSON.stringify(content, undefined, 2));
// });

// index.setSettings({
//   // 'attributesForFaceting': ['city'],
//   // 'disablePrefixOnAttributes': [],
//   alternativesAsExact: [
// // 'ignorePlurals',
// // 'singleWordSynonym',
//   'multiWordsSynonym'
// ],
// // exactOnSingleWordQuery: 'attribute'
// });

// var objectID = '6149221';
//
// index.waitTask(objectID, function(err) {
//     if (!err) {
//       console.log('object ' + objectID + ' indexed');
//     }
//     if (err) {
//       console.log(err);
//     }
//   });

// index.addObject({
//   'name': 'Twelfth',
//   'objectID': 'TwelfthObjectID'
// }, function gotTaskID(error, content) {
//   console.log(JSON.stringify(content, undefined, 2));
//   console.log("write operation received: " + content.taskID);
//   index.waitTask(content.taskID, function contentIndexed(error, content) {
//     console.log(JSON.stringify(content, undefined, 2));
//   });
// });

// index.getSettings(function(err, content) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(JSON.stringify(content, undefined, 2));
// });

// const i = 0
//
// const objects = [
//   {
//     "name": "One",
//     "objectID": "FirstObjectID"
//   },
//   {
//     "name": "Two",
//     "objectID": "SecondObjectID"
//   }
// ]
//
// objects.forEach(object => {
//   object.objectID = object.objectID;
//   index.addObject(object);
// })

index.search(
  {
    query:'',
    // filters: '(A:0 AND B:2)',
    hitsPerPage: 10,
    page: 0
  },
  function searchDone(err, content) {
    if (err) throw err;
    console.log(JSON.stringify(content, undefined, 2));
    console.log(content.hits.length);
  }
);

// index.browse('',
//   {'filters': 'options.size:"9\'-3\\\" X 13\'"'},
//   function searchDone(err, content) {
//     if (err) throw err;
//     console.log(JSON.stringify(content, undefined, 2));
//   }
// );

// index.getObject('31556', function(err, content) {
//   if (err) {
//     return console.log(err);
//   };
//
//   console.log(content.objectID + ": " + JSON.stringify(content, undefined, 2));
// });
