// const drivers = [
//   { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
//   { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
//   { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
//   { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
//   { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
// ]

function logDriverNames(driver){
  driver.forEach(function(e){console.log(e.name)})
}

function logDriversByHometown(driver, location){
  driver.forEach(function(e){
    if (e.hometown === location) {
      console.log(e.name)
    }
  })
}

function driversByRevenue(driver){
  const rev = [...driver]
  return rev.sort(function(a,b){
    return a.revenue - b.revenue
  })
}

function driversByName(driver){
  const name = [...driver]
  return name.sort(function(a,b){
    const nameA = a.name
    const nameB = b.name

    return nameA.localeCompare(nameB)
  })
}

function totalRevenue(driver){
  return driver.reduce(function(agg,el){
    return agg + el.revenue
    // agg = 0. The reduced total as it currently stands (or the initial value if nothing's been reduced yet.
  }, 0)
}

function averageRevenue(driver){
  const avg = [...driver]
  return avg.reduce(function(agg, el){
    return agg + el.revenue
  },0)/driver.length
  // reduced the total revenue then divided by total number of drivers
}
