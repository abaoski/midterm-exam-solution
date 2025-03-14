// function that prints a greeting to the console after a short delay
function delayedGreeting(name) {
    // setTimeout makes the greeting appear after 2 milliseconds 
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
    }, 2); 
}

// Try
delayedGreeting("Alice");
