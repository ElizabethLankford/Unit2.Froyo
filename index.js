
//Prompting user for flavor request
const userInputString = prompt(
    "Please enter some integers separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
// making array out of user input
  const flavorArray = userInputString.split(",");

//creating flavor obj
  const flavorsObject = { }

//creating function to tally flavors
  function tallyFlavors(arr){
// make individual flavor variable 
    let vanillaVariable = 0
    let strawberryVariable = 0
    let coffeeVariable = 0

//loop through array 
    for (let i =0; i < arr.length; i++){
        //set 'flavor' as the name for each individual item in array
        let flavor = arr[i]
        //if flavor is vanilla add 1 tally to vanilla variable
        if(flavor === 'vanilla'){
            vanillaVariable = vanillaVariable + 1
        } else if (flavor === 'strawberry'){
            strawberryVariable = strawberryVariable + 1
        } else if(flavor === 'coffee'){
            coffeeVariable = coffeeVariable + 1
        } else{}
    }
// created an object property for each flavor and set value to the flavor tally
    flavorsObject.vanilla = vanillaVariable
    flavorsObject.strawberry = strawberryVariable
    flavorsObject.coffee = coffeeVariable
// return flavors object with the new properties added
    return flavorsObject
  }

