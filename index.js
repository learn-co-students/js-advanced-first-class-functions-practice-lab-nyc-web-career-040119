function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers = drivers.filter(function(driver) {
    return driver.hometown === location;
  });

  logDriverNames(drivers);
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (driverA, driverB) {
    return driverA.revenue - driverB.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function (driverA, driverB) {
    return driverA.name.localeCompare(driverB.name);
  });
}

function totalRevenue(drivers) {
  return drivers.reduce(function (agg, el, i, arr) {
    return agg + el.revenue;
  }, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;  
}
