"use strict";

let get = (url) => {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();

        req.open('GET', url);

        request.onreadystatechange = () => {
            if (request.readyState == 4 && request.status == 200) {
                // Success
                resolve(request.response);
            } else if (request.readyState == 4) {
                // Something went wrong (404 etc.)
                reject(new Error(request.statusText));
            }
        }

        req.onerror = () => {
            reject(new Error("Network Error"));
        };

        req.send();
    });
}

get("")
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    });

get("")
    .then(JSON.parse)
    .then()
    .catch((error)=>{
        console.log(error);
    });


let getJson = (url) => {
    return get(url).then(JSON.parse);
}




getJson('./promiseland.json')
    .then(story => 
        story.chapterUrls
            .map(getJson)
            .reduce((current, next) => current
                                        .then(()=>next)
                                        .then(chapter=>console.log(chapter)), 
    Promise.resolve())
);

//or

// async function getChaptersAsync(){
//     let story = await getJson('./promiseland.json');
    
//     let chapterPromises = [];
//     for(let chapterUrl of story.chapterUrls) {
//         chapterPromises.push(getJson(chapterUrl));
//     }

//     for (let chapterPromise of chapterPromises) {
//         console.log(await chapterPromise);
//     }
// }