// Code your solution in this file!


const logDriverNames= function (drivers) {
  return drivers.forEach( function (item, index) { console.log(item.name)};)
};

const longDriversByHometown = function (drivers, location) {
  return drivers.forEach (function (itme, index) {
    if (location === drivers.hometown)
     return item.name})
};

function driversBtRevenue (drivers) {
  return drivers.sort( (a, b) => (a.revenue - b.revenue) );
  })
};


const driversByName = function (drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name)
  })
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, driver) {
    return total + driver.revenue;
  }, 0)
}

const averageRevenue = function (drivers) {
  return (totalRevenue(drivers) / drivers.length);
}
