    const images = [
    "https://img.freepik.com/fotos-gratis/cadeira-de-madeira-vazia-e-mesa-no-patio-ao-ar-livre-com-bela-praia-tropical-e-mar_74190-8181.jpg?t=st=1731954578~exp=1731958178~hmac=30c69f6baaa0fc7579d389ad4dd6435087b1b70d13ce8894d2ad925bfeeea31c&w=996", 
    "https://img.freepik.com/fotos-gratis/casa-de-madeira-fotorrealista-com-estrutura-de-madeira_23-2151302627.jpg?t=st=1731954664~exp=1731958264~hmac=e9d4a6acd00c3ef2c3d2131ab70c5bc27cbfa9fb48434e76197eff87bcb6536b&w=996",
    "https://img.freepik.com/fotos-gratis/familia-feliz-brincando-com-folha_23-2147663923.jpg?t=st=1731954744~exp=1731958344~hmac=a8e66c3b644c75149798089e9fa49e27a6aa2754793a0266fe5a09a9b086a176&w=996",
    "https://img.freepik.com/fotos-gratis/interior-de-casa-de-madeira-fotorrealista-com-decoracao-e-moveis-de-madeira_23-2151263520.jpg?t=st=1731954765~exp=1731958365~hmac=e36782d8ecfad68805e61d10b158475c30d5971eea86edd31919a100bee549ee&w=1380",
    "https://img.freepik.com/fotos-gratis/vista-frontal-jovens-amigos-no-albergue_23-2150598844.jpg?t=st=1731954805~exp=1731958405~hmac=a2c7d91af516260a83c83404550d5ec050bbe38fdf27dc466e0c2e437c5b6a5b&w=996"
];

let currentIndex = 0; 

function changeImage() {
    const imageElement = document.getElementById("slideshow");
    currentIndex = (currentIndex + 1) % images.length; 
    imageElement.src = images[currentIndex];
}

setInterval(changeImage, 3000);