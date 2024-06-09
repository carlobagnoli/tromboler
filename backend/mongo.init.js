db = connect("mongodb://localhost/tromboler")

db.user.insert({ fruits: [], credits: 1, last_update: 0 });

db.roulette.insert({ price: 1, slots: [{ fruit: "manzana", chance: 8 }, { fruit: "pera", chance: 2 }] })
db.roulette.insert({ price: 2, slots: [{ fruit: "piña", chance: 6 }, { fruit: "naranja", chance: 3 }, { fruit: "sandía", chance: 1 }] })
