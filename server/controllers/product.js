const esClient = require('../client');


const searchDoc = async function(indexName, payload){
  return await esClient.search({
      index: indexName,
      body: payload
  });
}

module.exports = searchDoc;