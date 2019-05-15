function logDriverNames(drivers) {
  drivers.forEach(logEach)
  function logEach(driver, index, drivers) {
    console.log(driver.name)
  }
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(logEach)
  function logEach(driver, index, drivers) {
    if (driver.hometown.toLowerCase() === location.toLowerCase()) {
    console.log(driver.name)
    }
  }
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  return drivers.slice().sort(function(a,b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  var total = 0
  drivers.forEach(function (driver, index, drivers) {
    total = total + driver.revenue
  })
  return total
}

function averageRevenue(drivers) {
  return (totalRevenue(drivers)/drivers.length)
}
