// VEJA MAIS: colocar o cursor pointer, aparecer outro post em baixo
// PESQUISA: box shadow 0px 1px 3px black 
// CORACAO: com o clique deve-se substituir a imagem pelo img/redHearth.png (toogle)
window.addEventListener("load", ()=>{
    console.log("load main");
    const pesquisaBarra = document.querySelector(".busca form");
    const coracaoLike = document.querySelector(".likes img");
    const vejaMais = document.querySelector("#more");
    const likeTxt = document.querySelector(".likes b");

    // Estilo na barra de pesquisa
    pesquisaBarra.addEventListener("mouseover", ()=>{
        pesquisaBarra.style.cssText = " box-shadow: 0px 1px 3px black; transition: 0.3s"
    })
    pesquisaBarra.addEventListener("mouseleave", ()=>{
        pesquisaBarra.style.boxShadow = ""
    })

    // Imagem de like 
     let coracaoSrc = coracaoLike.src;
     let likeNum = 1;
     coracaoLike.addEventListener("click", ()=>{
         if (coracaoSrc == coracaoLike.src){
             coracaoLike.src = "img/red-heart.png";
             likeNum ++
             likeTxt.innerHTML = `${likeNum} likes`;
         }else{
             coracaoLike.src = "img/icons/heart.svg";
             likeNum --
             likeTxt.innerHTML = `${likeNum} likes`;
         }
    })
    
    function like2 (cards){
        let img2 = cards[1].querySelector(".likes img");
        img2.src = "img/icons/heart.svg";
        let imgSrc = img2.src;
        let like2 = cards[1].querySelector(".likes b");
        let numLike = 1;
        like2.innerHTML = `${1} likes`
        img2.addEventListener("click", ()=>{
            if (imgSrc== img2.src){
                img2.src = "img/red-heart.png"
                numLike ++;
                like2.innerHTML = `${numLike} likes`;
            }else{
                img2.src = "img/icons/heart.svg"
                numLike --;
                like2.innerHTML = `${numLike} likes`;
            }
        })
    }

    // Fazendo o veja mais ter cursor pointer
    vejaMais.addEventListener("mouseover", ()=>{
        vejaMais.style.cssText="cursor: pointer";
    })
    vejaMais.addEventListener("click", ()=>{
        const newPost = document.querySelector(".card").cloneNode(true);
        const mainDoc = document.querySelector("main.container.content");
        // mainDoc.appendChild(newPost);
        mainDoc.insertBefore(newPost, vejaMais);
        let cards= document.querySelectorAll(".card");
        like2(cards);
        
    })    
})