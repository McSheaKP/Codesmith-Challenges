// Write a function called limitedInterval that accepts as arguments in this order -

// callback function
// wait time in milliseconds
// limit time in milliseconds.
// limitedInterval should run the callback once every 
// wait milliseconds, up to limit milliseconds, and then stop.

// Add code here

function limitedInterval(callback, waitTime, limitTime){
        let checkTime = 0;
            setInterval(() => {
                checkTime += waitTime;
                if(checkTime < limitTime){   
                    callback();
                } else {
                    clearInterval();
                }
            }, waitTime);
}
// /* Uncomment the following line and click 'run' to test your work */
limitedInterval(function(){console.log('repeating')}, 100, 550); // should log 'repeating' once per 100 ms, five times.
