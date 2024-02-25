let data = [];
const fs = require('fs');

function generateData(thumb, index, middle, ring, pinky, samples, label) {
    for (let i = 0; i < samples; i++) {
        data.push({
            "Thumb": Math.floor(Math.random() * (thumb.upperBound - thumb.lowerBound + 1)) + thumb.lowerBound,
            "Index": Math.floor(Math.random() * (index.upperBound - index.lowerBound + 1)) + index.lowerBound,
            "Middle": Math.floor(Math.random() * (middle.upperBound - middle.lowerBound + 1)) + middle.lowerBound,
            "Ring": Math.floor(Math.random() * (ring.upperBound - ring.lowerBound + 1)) + ring.lowerBound,
            "Pinky": Math.floor(Math.random() * (pinky.upperBound - pinky.lowerBound + 1)) + pinky.lowerBound,
            "Label": label
        })
    }
    console.log(label + "Data pushed");

}




        generateData(
            //thumb range
            {
                upperBound: 100,
                lowerBound: 95
            },
            //index range
            {
                upperBound: 100,
                lowerBound: 95
            },
            //middle range
            {
                upperBound: 100,
                lowerBound: 95
            },
            //ring range
            {
                upperBound: 100,
                lowerBound: 95
            },
            //pinky range
            {
                upperBound: 100,
                lowerBound: 95
            },
            10,"Fist")

            generateData(
                //thumb range
                {
                    upperBound: 10,
                    lowerBound: 0
                },
                //index range
                {
                    upperBound: 10,
                    lowerBound: 0
                },
                //middle range
                {
                    upperBound: 10,
                    lowerBound: 0
                },
                //ring range
                {
                    upperBound: 10,
                    lowerBound: 0
                },
                //pinky range
                {
                    upperBound: 10,
                    lowerBound: 0
                },
                10,"Open")

            SaveData(data, 'SampleData.json')


function SaveData(data, fileName){
    fs.writeFile(fileName, JSON.stringify(data,null, 2), (err)=>{
        if(err)
        console.error(err);
    
        else{
            console.log("Training data saved in "+fileName)
        }
    })
}

