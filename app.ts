//App.ts
import SDK from './APIConfigure';

const promise = new Promise((resolve, reject) => {
    const user = SDK.rest.client.login('name', 'pass');
});
promise.then((res) => {
    if (res = '401'){
        console.log('its broke, gabe');
    }
    console.log('it works, gabe'); // I get called: true
}).catch((err) => {
    console.log('something is wrong')
    // This is never called
});
promise.catch((err) => {
    console.log('something is wrong')
    // This is never called
});
