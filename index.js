// Code your solution in this file!
function distanceFromHqInBlocks(pickUpNum) {
    if (pickUpNum <= 42 && typeof pickUpNum == 'number') {
        let distFromHq = (42-pickUpNum);
        return distFromHq;
    }
    else if (pickUpNum > 42 && typeof pickUpNum == 'number'){
        let distFromHq = (pickUpNum-42);
        return distFromHq;
    }
    else 
        return 'Not a number!';
}

console.log(distanceFromHqInBlocks(10))

function distanceFromHqInFeet(pickUpNum) {
    let distFromHq2 = distanceFromHqInBlocks(pickUpNum);
    let feetFromHq = (distFromHq2*264);
    return feetFromHq;
}

console.log(distanceFromHqInFeet(10))

function distanceTravelledInFeet(startBlock, endBlock) {
    if (startBlock >= endBlock && typeof startBlock == 'number' && typeof endBlock == 'number'){
        let blockDistance = startBlock-endBlock;
        return blockDistance*264;
    }
    else if (startBlock < endBlock  && typeof startBlock == 'number' && typeof endBlock == 'number'){
        let blockDistance = endBlock-startBlock;
        return blockDistance*264;
    }
    else 
        return 'Argument is not a number!';
    
}

console.log(distanceTravelledInFeet('hi' ,25))

function calculatesFarePrice(startBlock, endBlock) {
    let distInFeet2 = distanceTravelledInFeet (startBlock, endBlock);
    if (distInFeet2 <= 400) {
        return 0;
    }
    else if (distInFeet2>400 && distInFeet2<=2000) {
        return (distInFeet2-400)*.02;
    }
    else if (distInFeet2>2000 && distInFeet2<=2500) {
        return 25;
    }
    else if (distInFeet2>2500) {
        return 'cannot travel that far';
    }
    else 
        return 'something is wrong with the argument!'
}

console.log(calculatesFarePrice(20,25));
