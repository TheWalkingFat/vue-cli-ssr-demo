import createApp from "./app.js";

export default (context) => {
    return new Promise((reslove,reject) => {
        let {url} = context;
        let {app,router} = createApp(context);
        router.push(url);
        router.onReady(() => {
            let matchedComponents = router.getMatchedComponents();
            if(!matchedComponents.length){
                return reject();
            }
            reslove(app);
        },reject)
    })
}