const DecisionTree = require('decision-tree');
const trainingData = require('./SampleData.json')
// Define features and target attribute
const features = ['thumb', 'index', 'middle', 'ring', 'pinky','angle', 'label'];
const target = 'label';
const fs = require('fs')

// Create decision tree npclassifier
const dt = new DecisionTree(trainingData, target, features);

//console.log(treeModel); // Print the decision tree model

function makePrediction(testData) {
    console.log(testData)
    const prediction = dt.predict(testData);
    console.log(prediction)
    return prediction
}

const getRandomValueInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function LoadData(upper, lower, label, samples) {
    try {
      let finalData = JSON.parse(fs.readFileSync('./SampleData.json', 'utf8'));
  
      if (finalData) {
        for (let i = 0; i < samples; i++) {
          var data = {
            thumb: getRandomValueInRange(10, 0),
            index: getRandomValueInRange(100, 85),
            middle: getRandomValueInRange(100, 90),
            ring: getRandomValueInRange(10, 0),
            pinky: getRandomValueInRange(10, 0),
            handAngle: getRandomValueInRange(upper, lower),
            label: label
          }
          finalData.push(data);
        }
  
        // Save the data
        fs.writeFileSync('./SampleData.json', JSON.stringify(finalData));
        console.log('Data Loaded successfully :)');
        return;
      }
    } catch (error) {
      console.log('Error:', error);
    }
  
    console.log('File not found or data is invalid :(');
  }
  
//   makePrediction({
//     thumb : 3,
//     index : 45,
//     middle :7,
//     ring : 7,
//     pinky : 2,
//     angle : 90
//   })
  //LoadData(100, 90, "Two", 10);
module.exports = makePrediction;

