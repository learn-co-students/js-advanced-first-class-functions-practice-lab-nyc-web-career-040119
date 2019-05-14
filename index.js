
const logDriverNames = function(drivers){
  drivers.forEach(function(ele){
    console.log(ele.name);
  });
};

const logDriversByHometown = function(drivers, hometown){
  drivers.forEach(function(ele){
    if (ele.hometown === hometown) {
      console.log(ele.name);
    };
  });
};

const driversByRevenue = function(drivers){
  const driversCopy = [...drivers];
  return driversCopy.sort(function(d1, d2){
    return d1.revenue - d2.revenue;
  });
};

const driversByName = function(drivers){
  const driversCopy = [...drivers];
  return driversCopy.sort(function(d1, d2){
    return d1.name.localeCompare(d2.name);
  });
};

const totalRevenue = function(drivers){
  return drivers.reduce(function(total, currentDriver){
    return total + currentDriver.revenue;
  }, 0);
};

const averageRevenue = function(drivers){
  return totalRevenue(drivers) / drivers.length;
};
