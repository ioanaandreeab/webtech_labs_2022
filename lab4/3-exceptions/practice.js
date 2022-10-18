const giveRaises = (currentSalaries, raise) => {  
    // the function takes an array of salaries and gives a percentual raise to each; logs salaries after raise 
    // should throw exceptions if the first parameter is not an array, if the second parameter is not a number greater than 0 or if any of the encountered salary values is not a number greater than 0

}

try {
    giveRaises([500, 1000, 750], 10) // should pass

    giveRaises(75, 10) // should throw error

    // giveRaises([500, 1000, 'coffee'], 10) // should throw error

    // giveRaises([500, 1000, 750], 'a small loan of a million dollars') // should throw error
} catch (error) {
    console.warn(error)
}