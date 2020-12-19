const express = require('express');
var cors = require('cors');
const axios = require('axios');
const app = express()
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    
if (process.argv.length < 2) {
	console.log("Please provide search term");
	process.exit(0);
}
    (async () => {
        try {
            const term = process.argv[2];
            console.log(term);
          const  url = `http://api.conceptnet.io/query?rel=/r/IsA&start=/c/en/${term}`;
          const response = await axios.get(url);
          console.log(response);
          //fetch based on response ChildTerm
          //build recursive JSON
          //to do: Construct new json based on the result.
              res.json({});
        } catch (error) {
          console.log(error);
        }
      })();

      // function searchTerm(term){
      //     return  axios.get(url).then(result => result.data);
      //     //loop all sorted and get hierarchy
      // }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})