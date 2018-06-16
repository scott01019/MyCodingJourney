require("./../config/mongoose")
const rand = require("./util").rand
const mongoose = require("mongoose")
const fastLoremIpsum = require("fast-lorem-ipsum")

module.exports = new Promise((res, rej) => {
    const Article = mongoose.model("Article")
    const Discussion = mongoose.model("Discussion")

    const contentComponents = ["Header", "Image", "CodeBlock", "Paragraph"]

    const headerContents = [
        "Angular Elements — A Practical Introduction To Web Components With Angular 6",
        "What We’re Going To Build In This Tutorial",
        "Creating An Angular 6 Project",
        "Adding Angular Elements",
        "Adding Further Dependencies",
        "Adding A New Component",
        "Setting Up Firebase",
        "Creating The Custom Element"
    ]

    const imgContents = [
        "cj_img_0.png",
        "cj_img_1.png",
        "cj_img_2.png",
        "cj_img_3.png",
        "cj_img_4.png",
        "cj_img_5.png",
        "cj_img_6.png",
        "cj_img_7.png",
        "cj_img_8.png",
        "cj_img_9.png"
    ]

    const codeContents = [
        "@import '~bootstrap/dist/css/bootstrap.min.css';",
        "const config = {\
            apiKey: '...',\
            authDomain: '...',\
            databaseURL: '...',\
            projectId: '...',\
            storageBucket: '...',\
            messagingSenderId: '...'\
        };",
        '<div class="my-class"> \
            <h1>The Header</h1> \
            <p>The paragraph of text</p> \
            <div class="my-quote"> \
                <p>The quote I\'d like to put in a div</p> \
            </div> \
        </div>',
        "imports: [\
            BrowserModule,\
            AngularFireModule.initializeApp(config),\
            AngularFirestoreModule\
        ],",
        "import { NgModule, Injector } from '@angular/core';",
        "import { createCustomElement } from '@angular/elements';"
    ]

    const titleImg = [
        "title_img_0.png",
        "title_img_1.png",
        "title_img_2.png"
    ]

    const tags = [
        "Angular", "React", "ES6", "Design Patterns", "Canvas", "WebGL", "Bootstrap", "SASS", "TypeScript", "JavaScript"
    ]

    const genArticles = async () => {
        for (let i = 0; i < 50; ++i) {
            const discussion = new Discussion({})

            const article = new Article({
                title: fastLoremIpsum(rand(10, 5) + "w"),
                subTitle: rand(2, 0) == 1 ? fastLoremIpsum(rand(20, 10) + "w") : "",
                img: titleImg[rand(titleImg.length, 0)],
                contents: [],
                likedBy: [],
                tags: [],
                createdAt: new Date(+new Date() - rand(0xFFFFFFFF, 0))
            })

            article.contents.push({ component: "Paragraph", content: fastLoremIpsum(rand(200, 100) + "w"), style: "" })
            article.contents.push({ component: "CodeBlock", content: codeContents[rand(codeContents.length, 0)], style: ""})
            article.contents.push({ component: "Paragraph", content: fastLoremIpsum(rand(200, 100) + "w"), style: "" })
            article.contents.push({ component: "Image", content: imgContents[rand(imgContents.length, 0)], style: "" })
            article.contents.push({ component: "Paragraph", content: fastLoremIpsum(rand(200, 100) + "w"), style: "" })
            article.contents.push({ component: "Header", content: headerContents[rand(headerContents.length, 0)], style: "" })
            article.contents.push({ component: "Paragraph", content: fastLoremIpsum(rand(200, 100) + "w"), style: ""})
            article.contents.push({ component: "CodeBlock", content: codeContents[rand(codeContents.length, 0)], style: ""})
            article.contents.push({ component: "Paragraph", content: fastLoremIpsum(rand(200, 100) + "w"), style: ""})
            article.contents.push({ component: "Header", content: headerContents[rand(headerContents.length, 0)], style: "" })
            article.contents.push({ component: "Paragraph", content: fastLoremIpsum(rand(200, 100) + "w"), style: ""})
            article.contents.push({ component: "CodeBlock", content: codeContents[rand(codeContents.length, 0)], style: ""})
            article.contents.push({ component: "Paragraph", content: fastLoremIpsum(rand(200, 100) + "w"), style: ""})
            article.contents.push({ component: "Image", content: imgContents[rand(imgContents.length, 0)], style: "" })
            article.contents.push({ component: "Paragraph", content: fastLoremIpsum(rand(200, 100) + "w"), style: ""})
            article.contents.push({ component: "Header", content: headerContents[rand(headerContents.length, 0)], style: "" })
            article.contents.push({ component: "Paragraph", content: fastLoremIpsum(rand(200, 100) + "w"), style: ""})

            for (let j = 0; j < tags.length; ++j) {
                if (rand(4,0) == 1) article.tags.push(tags[j])
            }

            discussion.article = article
            article.discussion = discussion

            await discussion.save()
            await article.save()
        }
        
        res("Finsihed generating articles and discussions.")
    }

    genArticles()
})