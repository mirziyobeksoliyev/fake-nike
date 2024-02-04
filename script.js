const arry = [
    {
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bc016bc-cd7a-49cc-a399-47930b00c59f/dunk-low-retro-shoe-VMwkPQ.png",
        info: "Nike Air Max 90 GORE-TEX",
        shoes: "men's shoes",
        prise: "$160"
    },
    {
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-shoe-BlfjW4.png",
        info: "Nike Air VaporMax Plus",
        shoes: "men's shoes",
        prise: "$210"
    },
    {
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e8455ad-c00c-4996-a85a-b5c4d38c6ae2/v2k-run-shoes-ZzTJRD.png",
        info: "Nike Air Max 1",
        shoes: "men's shoes",
        prise: "$140"
    },
    {
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/02d793e4-3ab7-41c4-bd43-cabe64fe6ae9/air-max-ishod-mens-shoes-DwRtpQ.png",
        info: "Nike Dunk Low Retro",
        shoes: "men's shoes",
        prise: "$115"
    },
    {
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b5406b0d-fb0b-4e94-ab81-4d24a3d79a2f/air-force-1-07-shoes-8jXZH2.png",
        info: "Nike Zoom Vomero 5",
        shoes: "men's shoes",
        prise: "$160"
    },
    {
        img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/dd253abf-283f-414e-bac8-f53a205369db/air-max-sc-mens-shoes-LR42xg.png",
        info: "Nike Invincible 3",
        shoes: "men's shoes",
        prise: "$180"
    },
    // {
    //     img: "  https://static.nike.com/a/images/q_auto:eco/t_prod…6f4f659876d9/gt-cut-3-basketball-shoes-P4rcKp.png",
    //     info: "Nike G.T. Cut 3",
    //     shoes: "men's shoes",
    //     prise: "$190"
    // },
]
arry.forEach(element => {
    let div = document.querySelector(".big")
    let carddiv = document.createElement("div")
    let cardimg = document.createElement("img")
    let cardinfo = document.createElement("h4")
    let cardprise = document.createElement("h6")

    cardimg.src = element.img
    cardinfo.innerText = element.info
    cardprise.innerText = element.prise

    carddiv.classList.add("carddivcha")

    div.appendChild(carddiv)
    carddiv.appendChild(cardimg)
    carddiv.appendChild(cardinfo)
    carddiv.appendChild(cardprise)
});