const Hapi =require("hapi");

const server = new Hapi.server({
    port : 3000,
    routes: {
        cors:{
            origin:['http://*.devscafe.tk']    
        }
    }
});

server.route({ 
    method: 'GET', 
    path: '/test', 
    handler: () => 'Hello test!', 
    options: {
        tags: ['api']
    } 
});




async function  startup() {
    await server.start();
}

try{
    startup();
}
catch(error){
    console.log("Listening at "+ server.info.uri);
}