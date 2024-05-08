import express from 'express'

const app=express()


const port=process.env.port||3000

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            "category": "Pun",
            "type": "twopart",
            "setup": "Has COVID-19 forced you to wear glasses and a mask at the same time?",
            "delivery": "If so, you may be entitled to condensation.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": true,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 213,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "Women are like KFC, once you're done with the breasts and thighs, you just have a greasy box to put your bone in.",
            "flags": {
                "nsfw": true,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": true,
                "explicit": true
            },
            "id": 149,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Christmas",
            "type": "twopart",
            "setup": "Why does Santa have three gardens?",
            "delivery": "So he can 'ho ho ho'!",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 242,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "Why do programmers confuse Halloween and Christmas?",
            "delivery": "Because Oct 31 = Dec 25",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 11,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "Why do programmers prefer using the dark mode?",
            "delivery": "Because light attracts bugs.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 232,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "I went to the zoo the other day. There was only a dog in it – it was a shihtzu.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "safe": false,
            "id": 307,
            "lang": "en"
        },
        {
            "category": "Spooky",
            "type": "twopart",
            "setup": "What's it like to be kissed by a vampire?",
            "delivery": "It's a pain in the neck.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": true,
            "id": 297,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "single",
            "joke": "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 204,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "twopart",
            "setup": "What do you call crystal clear urine?",
            "delivery": "1080p.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 69,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "twopart",
            "setup": "I can't believe I got fired from the calendar factory.",
            "delivery": "All I did was take a day off.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": true,
            "id": 303,
            "lang": "en"
        }
    ]
    console.log(req.query.search);
    if(req.query.search){
        const result=jokes.filter((joke)=>{return joke.category.includes(req.query.search)})
        res.send(result);
        
        return;
    }
    
    setTimeout(()=>{res.send(jokes)},3000)
    

})


app.listen(port,()=>{
    console.log('server is runing');
})
