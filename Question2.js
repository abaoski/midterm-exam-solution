function delayedGreeting(name) {
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
    }, 2); 
  }
  
  delayedGreeting("Alice")