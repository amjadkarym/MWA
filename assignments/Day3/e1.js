const {resolve4} = require(`dns`);
const {promisify} = require(`util`);

const resolve4Asyn = promisify(resolve4);

async function resolveDNS(domain)
{
    try{
            const addr = await resolve4Asyn(domain);
            console.log(`Async/Await : IP address for ${domain} is ${addr}`);
    }
    catch(err){
        console.log(`There is an error message - ${err}`);
    }
}

resolve4Asyn("www.mum.edu").then( addr => console.log(`Promise : IP address for www.mum.edu is ${addr}`))
                         .catch( err => console.log(`There is an error message - ${err}`))

resolveDNS("www.mum.edu");

resolve4("www.mum.edu", (err,addr) => {
    console.log(`Callback : IP address for www.mum.edu is ${addr}`);
});
console.log('testing');