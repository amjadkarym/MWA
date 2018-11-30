const os = require('os');
const {from} = require('rxjs');
const {of} = require('rxjs');
const {map, filter} = require('rxjs/operators');

const checkSystem = function() {
    var checkSpec = 1;
    console.log("Checking your system...");
    const specification = [{
        memory : Math.floor(os.totalmem()*1e-9),
        cpus : os.cpus().length
    }];
    from(specification)
        .pipe(
            filter((obj) => obj.memory < 4)
        )
        .subscribe(
            (obj) => {
                checkSpec = 0;
                console.log("This app needs at least 4 GB of RAM"); 
            }
        )
    from(specification)
    .pipe(
        filter((obj) => obj.cpus < 2)
    )
    .subscribe(
        (obj) => {
            checkSpec = 0;
            console.log("Processor is not supported");
        }
    )
    of(checkSpec)
    .pipe(
        filter((n) => n==1)
    )
    .subscribe(
        (obj) => console.log("System is checked successfully.")
    )
    
}

checkSystem();