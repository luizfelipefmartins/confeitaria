
function criaSecoes(produtos) {
    for(let i = 0; i<produtos.length; i++) {
        let produto = produtos[i];

        let container2 = document.createElement('div');
        container2.setAttribute('class','container2');

        let btn = document.createElement('div');
        btn.setAttribute('class','btn');

        container2.appendChild(btn);

        let label = document.createElement('label');
        btn.appendChild(label);

        let img = document.createElement('img');
        img.src = produto.image
        img.alt = produto.name

        label.appendChild(img);

        let input = document.createElement('input');
        input.setAttribute('type','submit');
        input.value = produto.name;

        btn.appendChild(input);

        let mainT = document.querySelector('.mainT');
        mainT.appendChild(container2)
    }
}

criaSecoes(produtos)
