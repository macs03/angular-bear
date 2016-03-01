(function () {
    var app = angular.module("licoFinder.service",[]);

    app.factory("listLicorerias",function () {
        return {
            licoreriasArray: [
                {
                    id: 1,
                    name : "Licomarca",
                    direccion: "Centro de Rubio frente al mercado municipal",
                    cerveza: 80,
                    caja: 2400,
                    ron: 1000
                },
                {
                    id: 2,
                    name : "Gordus",
                    direccion: "Av. Manuel Pulido Mendez",
                    cerveza: 90,
                    caja: 2800,
                    ron: 1200
                },
                {
                    id: 3,
                    name : "Portal",
                    direccion: "La gran via",
                    cerveza: 100,
                    caja: 2500,
                    ron: 1100
                },
                {
                    id: 4,
                    name : "Choco",
                    direccion: "Ruiz Pineda cerca al boulevard",
                    cerveza: 80,
                    caja: 2600,
                    ron: 1000
                },
            ]
        }
    });
})();
