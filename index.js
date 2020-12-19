const express = require('express');
var cors = require('cors');
const axios = require('axios');
const app = express()
const port = 3000;

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    
    (async () => {
        try {
          const response = await axios.get('http://api.conceptnet.io/c/en')
        var sorted =  response.data.edges.sort((a,b) => { 
            //sorting of the edges by lengh of id 
            //to do: sort by checking start, rel and end to form a hierarchy    
            var aLength = a['@id'].length;
                var bLength = b['@id'].length;
                if(aLength < bLength){
                    return -1;
                }
                if(aLength > bLength){
                    return 0;
                }
              })
              getHeirarchy(sorted);
              res.json(sorted);
        } catch (error) {
          console.log(error);
        }
      })();

      function getHeirarchy(sorted){
          console.log(sorted);
          //loop all sorted and get hierarchy
      }
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})