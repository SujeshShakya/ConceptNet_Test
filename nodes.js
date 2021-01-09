const axios = require('axios');
const json = {};
const term = process.argv[2];
getByTerms(term).then(result =>{
    if(result.edges.length != 0){
        var label1 = result.edges.sort((a, b)=> b.weight - a.weight)[0].end.label;
    }
   getByTerms(label1).then(resp =>{
    if(resp.edges.length != 0){   
        var label2 = resp.edges.sort((a, b)=> b.weight - a.weight)[0].end.label;
        json[label2] = {};
        json[label2][result.edges.sort((a, b)=> b.weight - a.weight)[0].end.label] = {};
        json[label2][result.edges.sort((a, b)=> b.weight - a.weight)[0].end.label][term] = {};
    }
    console.log(JSON.stringify(json, null, 2))
   })
})

function getByTerms (term){
    return axios.get(`http://api.conceptnet.io/query?rel=/r/IsA&start=/c/en/${term}`).then(result => result.data);
}