const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200") {
            console.log(res);
            pokeImage("./pikachu-sad.gif");
        }
        else{
            return res.json();
        }
    }).then((data) => {
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
        console.log(data);
        let pokeId = data.id;
        PokeId(pokeId);
        document.getElementById("pokeId").innerHTML = pokeId;
        let pokeType = data.types[0].type.name;
        PokeType(pokeType);
        document.getElementById("pokeType").innerHTML = pokeType;
        console.log(pokeType);
        if ((data.types).length==2){
        let pokeType1 = data.types[1].type.name;
        PokeType1(pokeType1);
        document.getElementById("pokeType1").innerHTML = pokeType1;
        console.log(pokeType1);}
        else {
            let pokeType1 = "N/A";
            document.getElementById("pokeType1").innerHTML = pokeType1;
            PokeType1(pokeType1);
        }
        let M1 = data.moves[0].move.name;
        MP1(M1);
        document.getElementById("M1").innerHTML = M1;
        console.log(M1);

    })
}
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
const PokeId = (url) => {
    const pokeId = document.getElementById("pokeId");
    pokeId.src = url;
}
const PokeType = (url) => {
    const pokeType = document.getElementById("pokeType");
    pokeType.src = url;
}
const PokeType1 = (url) => {
    const pokeType1 = document.getElementById("pokeType1");
    pokeType1.src = url;
}
const MP1 = (url) => {
    const M1 = document.getElementById("M1");
    M1.src = url;
}
const MP2 = (url) => {
    const M2 = document.getElementById("M2");
    M2.src = url;
}
const MP3 = (url) => {
    const M3 = document.getElementById("M3");
    M3.src = url;
}
const MP4 = (url) => {
    const M4 = document.getElementById("M4");
    M4.src = url;
}