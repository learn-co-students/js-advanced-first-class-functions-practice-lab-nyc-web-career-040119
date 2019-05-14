// Code your solution in this file!
function logDriverNames(array){
  array.forEach(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(array,location){
  array.forEach(function(driver){
    if(driver.hometown === location){
      console.log(driver.name)
    }
  })
}

function driversByRevenue(array){
  return array.slice().sort(revenueSorter)
}

const revenueSorter = function(a,b){
  return a.revenue - b.revenue
}

function driversByName(array){
  return array.slice().sort(function (a,b){
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(array){
  let total = 0

  array.forEach(function(driver){
    total += driver.revenue
  })
  return total
}

function averageRevenue(array){
  return totalRevenue(array)/array.length
}
