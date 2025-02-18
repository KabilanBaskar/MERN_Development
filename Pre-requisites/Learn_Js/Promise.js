function promiseEg(val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(val)
                resolve("Hi")
            else 
                reject("Bye")
        }, 2000)
    })
}
promiseEg(0+1)
.then((res)=> {
    console.log(res)
})
.catch((res) => {
    console.log(res)
})

/*
Location Finder:
    1. promise(locFound, locNotFound)
    2. chennai, 10s
 */
function LocationFinder(loc, time) {
    location = new Promise((locFound, locNotFound) => {
        setTimeout(() => {
            if(isLocationFound(loc, time)) {
                locFound("Chennai");
            }else {
                locNotFound(loc+" Not Found");
            }
        }, time);
    });
    location.then((found) => {
        console.log(found)
    })
    .catch((notfound) => {
        console.log(notfound)
    })
}
isLocationFound = (loc, time) => {
    location = "Chennai";
    t = 1000;
    if( t <= time && loc === location) {
        return true
    }else {
        return false
    }
}
LocationFinder("Chennai", 2000)

likecode = async () => {
    return new Promise((likepost) => {
        setTimeout(() => {
            likepost("liked the post")
        }, 5000);
    })
}
commentcode = async () => {
    return new Promise((commentpost) => {
        setTimeout(() => {
            commentpost("commented the post")
        }, 5000);
    })
}
sharecode = async () => {
    return new Promise((sharepost) => {
        setTimeout(() => {
            sharepost("shared the post")
        }, 5000);
    })
}
async function postcode() {
    var post = new Promise((createpost) => {
        setTimeout(() => {
            createpost("post created")
        }, 2000)
    })
    const [pos, like, comment, share] = await Promise.all([post, likecode(), commentcode(), sharecode()])
    console.log(pos)
    console.log(like)
    console.log(comment)
    console.log(share)
}
postcode()
