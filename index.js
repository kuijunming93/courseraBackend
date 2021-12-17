var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = "
                + l + " and b = " + b); //initial log to show the function is being invoked
    rect(l,b, (err,rectangle) => { //(err,rectangle) are the expected response from callback
        if (err) {
	        console.log("ERROR: ", err.message); //{parent}.message is where the callback error msg is kept by default
	    }
        else {
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
                //accessing the content of the callback successful response
        }
    });
    console.log("This statement after the call to rect()");
};

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);

//the behaviour you will see here in npm start -> the initial function invokation will show, the callback
// will come later - async operation on a single threaded engine