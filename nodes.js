const axios = require('axios');
const json = {};
const term = process.argv[2];
getByTerms(term).then(result =>{
    var label1 = result.edges.sort((a, b)=> b.weight - a.weight)[0].end.label;
    // json[label1] = {};
    // json.push(result.edges.sort((a, b)=> b.weight - a.weight)[0].end.label);
   getByTerms(label1).then(resp =>{
       var label2 = resp.edges.sort((a, b)=> b.weight - a.weight)[0].end.label;
    json[label2] = {};
    json[label2][result.edges.sort((a, b)=> b.weight - a.weight)[0].end.label] = {};
    json[label2][result.edges.sort((a, b)=> b.weight - a.weight)[0].end.label][term] = {};

    // json.push(resp.edges.sort((a, b)=> b.weight - a.weight)[0].end.label);
    // json.push(term);
    console.log(json)
   })
})

function getByTerms (term){
    return axios.get(`http://api.conceptnet.io/query?rel=/r/IsA&start=/c/en/${term}`).then(result => result.data);
}