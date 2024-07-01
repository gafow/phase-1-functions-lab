function distanceFromHqInBlocks(pickupBlock) {
    const destination = 42;
    if (pickupBlock > destination) {
      return pickupBlock - destination;
    } else {
      return destination - pickupBlock;
    }
  }
  
  function distanceFromHqInFeet(pickupBlock) {
    const distanceInBlocks = distanceFromHqInBlocks(pickupBlock);
    return distanceInBlocks * 264;
  }
  function distanceTravelledInFeet(pickupBlock, destination) {
    if (pickupBlock > destination) {
      return (pickupBlock - destination) * 264;
    } else {
      return (destination - pickupBlock) * 264;
    }
  }
  function calculatesFarePrice(pickupBlock, destination) {
    const totalDestination = distanceTravelledInFeet(pickupBlock, destination);
    if (totalDestination <= 400) {
      return 0;
    } else if (totalDestination > 400 && totalDestination <= 2000) {
      const excessFeet = totalDestination - 400;
      return excessFeet * 0.02;
    } else if (totalDestination > 2000 && totalDestination <= 2500) {
      return 25;
    } else if ((totalDestination) => 25000) {
      return "cannot travel that far";
    }
  }