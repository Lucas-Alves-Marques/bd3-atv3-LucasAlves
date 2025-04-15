const database = 'bd3_atv3';

use(database);

// // const collection = 'bd3_atv3_produtos';

// // db.createCollection(collection);

// // db['bd3_atv3_produtos'].insertMany(

// //     [
// //         {
// //             "Nome do produto": "Camiseta Estampada",
// //             "Valor do Produto": 39.90,
// //             "Quantidade em Estoque de produto": 150,
// //             "Fabricante do Produto": "ModaSim",
// //             "Categoria do Produto": "Vestuário",
// //             "Descrição do Produto": "Camiseta com estampa moderna e tecido de alta qualidade."
// //         },
// //         {
// //             "Nome do produto": "Calça Jeans Slim",
// //             "Valor do Produto": 89.90,
// //             "Quantidade em Estoque de produto": 120,
// //             "Fabricante do Produto": "JeansMaster",
// //             "Categoria do Produto": "Vestuário",
// //             "Descrição do Produto": "Calça jeans de corte slim fit para um visual contemporâneo."
// //         },
// //         {
// //             "Nome do produto": "Tênis Esportivo",
// //             "Valor do Produto": 129.90,
// //             "Quantidade em Estoque de produto": 80,
// //             "Fabricante do Produto": "Sporty",
// //             "Categoria do Produto": "Calçados",
// //             "Descrição do Produto": "Tênis leve e confortável, ideal para práticas esportivas."
// //         },
// //         {
// //             "Nome do produto": "Relógio Moderno",
// //             "Valor do Produto": 199.90,
// //             "Quantidade em Estoque de produto": 50,
// //             "Fabricante do Produto": "TimeX",
// //             "Categoria do Produto": "Acessórios",
// //             "Descrição do Produto": "Relógio com design minimalista e pulseira ajustável."
// //         },
// //         {
// //             "Nome do produto": "Smartphone Android",
// //             "Valor do Produto": 1299.00,
// //             "Quantidade em Estoque de produto": 30,
// //             "Fabricante do Produto": "TechNova",
// //             "Categoria do Produto": "Eletrônicos",
// //             "Descrição do Produto": "Smartphone com alta performance, câmera tripla e bateria de longa duração."
// //         },
// //         {
// //             "Nome do produto": "Notebook Ultra Fino",
// //             "Valor do Produto": 2499.00,
// //             "Quantidade em Estoque de produto": 25,
// //             "Fabricante do Produto": "CompuTech",
// //             "Categoria do Produto": "Informática",
// //             "Descrição do Produto": "Notebook leve com tela de alta resolução e processador potente."
// //         },
// //         {
// //             "Nome do produto": "Fone de Ouvido Bluetooth",
// //             "Valor do Produto": 149.90,
// //             "Quantidade em Estoque de produto": 200,
// //             "Fabricante do Produto": "SoundMax",
// //             "Categoria do Produto": "Eletrônicos",
// //             "Descrição do Produto": "Fone com cancelamento de ruído e excelente qualidade sonora."
// //         },
// //         {
// //             "Nome do produto": "Cafeteira Expresso",
// //             "Valor do Produto": 299.90,
// //             "Quantidade em Estoque de produto": 40,
// //             "Fabricante do Produto": "CaféArte",
// //             "Categoria do Produto": "Eletrodomésticos",
// //             "Descrição do Produto": "Cafeteira com sistema de pressão para extrair o melhor do café."
// //         },
// //         {
// //             "Nome do produto": "Liquidificador Turbo",
// //             "Valor do Produto": 199.90,
// //             "Quantidade em Estoque de produto": 60,
// //             "Fabricante do Produto": "HomeMix",
// //             "Categoria do Produto": "Eletrodomésticos",
// //             "Descrição do Produto": "Liquidificador com tecnologia turbo para preparo rápido e eficiente."
// //         },
// //         {
// //             "Nome do produto": "Jogo de Panelas",
// //             "Valor do Produto": 399.90,
// //             "Quantidade em Estoque de produto": 70,
// //             "Fabricante do Produto": "CozinhaChef",
// //             "Categoria do Produto": "Casa e Cozinha",
// //             "Descrição do Produto": "Conjunto completo de panelas antiaderentes para todas as receitas."
// //         },
// //         {
// //             "Nome do produto": "Batedeira Planetária",
// //             "Valor do Produto": 349.90,
// //             "Quantidade em Estoque de produto": 35,
// //             "Fabricante do Produto": "MixMaster",
// //             "Categoria do Produto": "Eletrodomésticos",
// //             "Descrição do Produto": "Batedeira com movimento planetário e alta capacidade."
// //         },
// //         {
// //             "Nome do produto": "Câmera Digital Compacta",
// //             "Valor do Produto": 549.90,
// //             "Quantidade em Estoque de produto": 45,
// //             "Fabricante do Produto": "FotoPro",
// //             "Categoria do Produto": "Eletrônicos",
// //             "Descrição do Produto": "Câmera digital com zoom óptico e fácil manuseio."
// //         },
// //         {
// //             "Nome do produto": "Impressora Multifuncional",
// //             "Valor do Produto": 499.90,
// //             "Quantidade em Estoque de produto": 20,
// //             "Fabricante do Produto": "PrintNet",
// //             "Categoria do Produto": "Informática",
// //             "Descrição do Produto": "Impressora, scanner e copiadora em um só equipamento."
// //         },
// //         {
// //             "Nome do produto": "Mesa de Escritório",
// //             "Valor do Produto": 699.90,
// //             "Quantidade em Estoque de produto": 15,
// //             "Fabricante do Produto": "MobíliaTop",
// //             "Categoria do Produto": "Móveis",
// //             "Descrição do Produto": "Mesa ampla de escritório com design ergonômico e moderno."
// //         },
// //         {
// //             "Nome do produto": "Cadeira Ergonômica",
// //             "Valor do Produto": 499.90,
// //             "Quantidade em Estoque de produto": 40,
// //             "Fabricante do Produto": "ConfortoPlus",
// //             "Categoria do Produto": "Móveis",
// //             "Descrição do Produto": "Cadeira com ajuste de altura e apoio lombar para maior conforto."
// //         },
// //         {
// //             "Nome do produto": "Ar Condicionado Split",
// //             "Valor do Produto": 1899.90,
// //             "Quantidade em Estoque de produto": 22,
// //             "Fabricante do Produto": "ClimaTech",
// //             "Categoria do Produto": "Eletrodomésticos",
// //             "Descrição do Produto": "Ar condicionado Split com alta eficiência energética."
// //         },
// //         {
// //             "Nome do produto": "Ventilador de Teto",
// //             "Valor do Produto": 249.90,
// //             "Quantidade em Estoque de produto": 55,
// //             "Fabricante do Produto": "BreezeAir",
// //             "Categoria do Produto": "Eletrodomésticos",
// //             "Descrição do Produto": "Ventilador silencioso com design moderno para todos os ambientes."
// //         },
// //         {
// //             "Nome do produto": "Copo Térmico",
// //             "Valor do Produto": 59.90,
// //             "Quantidade em Estoque de produto": 300,
// //             "Fabricante do Produto": "DrinkPro",
// //             "Categoria do Produto": "Acessórios",
// //             "Descrição do Produto": "Copo térmico que mantém a bebida na temperatura ideal por horas."
// //         },
// //         {
// //             "Nome do produto": "Mochila Escolar",
// //             "Valor do Produto": 89.90,
// //             "Quantidade em Estoque de produto": 180,
// //             "Fabricante do Produto": "Transporte+,",
// //             "Categoria do Produto": "Acessórios",
// //             "Descrição do Produto": "Mochila resistente com diversos compartimentos para organização."
// //         },
// //         {
// //             "Nome do produto": "Livro: Aventuras na Natureza",
// //             "Valor do Produto": 49.90,
// //             "Quantidade em Estoque de produto": 100,
// //             "Fabricante do Produto": "Leitura Viva",
// //             "Categoria do Produto": "Livros",
// //             "Descrição do Produto": "Uma emocionante narrativa sobre expedições e descobertas na natureza."
// //         },
// //         {
// //             "Nome do produto": "Livro: Receitas Saudáveis",
// //             "Valor do Produto": 59.90,
// //             "Quantidade em Estoque de produto": 90,
// //             "Fabricante do Produto": "Culinária Express",
// //             "Categoria do Produto": "Livros",
// //             "Descrição do Produto": "Livro com receitas práticas para quem busca uma alimentação saudável."
// //         },
// //         {
// //             "Nome do produto": "Smart TV 50 Polegadas",
// //             "Valor do Produto": 2999.90,
// //             "Quantidade em Estoque de produto": 18,
// //             "Fabricante do Produto": "VisionTech",
// //             "Categoria do Produto": "Eletrônicos",
// //             "Descrição do Produto": "Smart TV com resolução 4K e acesso a diversos aplicativos."
// //         },
// //         {
// //             "Nome do produto": "Console de Videogame",
// //             "Valor do Produto": 2299.90,
// //             "Quantidade em Estoque de produto": 25,
// //             "Fabricante do Produto": "GameZone",
// //             "Categoria do Produto": "Eletrônicos",
// //             "Descrição do Produto": "Console com gráficos avançados e biblioteca variada de jogos."
// //         },
// //         {
// //             "Nome do produto": "Headset Gamer",
// //             "Valor do Produto": 199.90,
// //             "Quantidade em Estoque de produto": 150,
// //             "Fabricante do Produto": "GamerSound",
// //             "Categoria do Produto": "Eletrônicos",
// //             "Descrição do Produto": "Headset com som imersivo e microfone com cancelamento de ruído."
// //         },
// //         {
// //             "Nome do produto": "Mouse Gamer RGB",
// //             "Valor do Produto": 99.90,
// //             "Quantidade em Estoque de produto": 200,
// //             "Fabricante do Produto": "ClickTech",
// //             "Categoria do Produto": "Informática",
// //             "Descrição do Produto": "Mouse com alta precisão e iluminação RGB personalizável."
// //         },
// //         {
// //             "Nome do produto": "Teclado Mecânico",
// //             "Valor do Produto": 149.90,
// //             "Quantidade em Estoque de produto": 170,
// //             "Fabricante do Produto": "TypeMaster",
// //             "Categoria do Produto": "Informática",
// //             "Descrição do Produto": "Teclado com switches mecânicos e design ergonômico para gamers."
// //         },
// //         {
// //             "Nome do produto": "Cadeira Gamer",
// //             "Valor do Produto": 799.90,
// //             "Quantidade em Estoque de produto": 35,
// //             "Fabricante do Produto": "ComfortPlay",
// //             "Categoria do Produto": "Móveis",
// //             "Descrição do Produto": "Cadeira com design robusto, apoio lombar e ajustes completos."
// //         },
// //         {
// //             "Nome do produto": "Sofá 3 Lugares",
// //             "Valor do Produto": 1899.90,
// //             "Quantidade em Estoque de produto": 12,
// //             "Fabricante do Produto": "Casa&Conforto",
// //             "Categoria do Produto": "Móveis",
// //             "Descrição do Produto": "Sofá moderno com tecido de alta resistência e design aconchegante."
// //         },
// //         {
// //             "Nome do produto": "Mesa de Jantar",
// //             "Valor do Produto": 1599.90,
// //             "Quantidade em Estoque de produto": 8,
// //             "Fabricante do Produto": "MobíliaTop",
// //             "Categoria do Produto": "Móveis",
// //             "Descrição do Produto": "Mesa de jantar em madeira maciça com acabamento refinado."
// //         },
// //         {
// //             "Nome do produto": "Aspirador de Pó",
// //             "Valor do Produto": 349.90,
// //             "Quantidade em Estoque de produto": 50,
// //             "Fabricante do Produto": "CleanHome",
// //             "Categoria do Produto": "Eletrodomésticos",
// //             "Descrição do Produto": "Aspirador com alta sucção e design compacto, ideal para uso doméstico."
// //         },
// //         {
// //             "Nome do produto": "Máquina de Lavar Roupas",
// //             "Valor do Produto": 2299.90,
// //             "Quantidade em Estoque de produto": 20,
// //             "Fabricante do Produto": "WashEasy",
// //             "Categoria do Produto": "Eletrodomésticos",
// //             "Descrição do Produto": "Lavadora com tecnologia avançada de limpeza e ciclos econômicos."
// //         },
// //         {
// //             "Nome do produto": "Secador de Cabelo Profissional",
// //             "Valor do Produto": 299.90,
// //             "Quantidade em Estoque de produto": 75,
// //             "Fabricante do Produto": "BeautyPro",
// //             "Categoria do Produto": "Beleza",
// //             "Descrição do Produto": "Secador com potência elevada e múltiplas velocidades para diferentes estilos."
// //         },
// //         {
// //             "Nome do produto": "Prancha de Cabelo",
// //             "Valor do Produto": 199.90,
// //             "Quantidade em Estoque de produto": 65,
// //             "Fabricante do Produto": "StyleHair",
// //             "Categoria do Produto": "Beleza",
// //             "Descrição do Produto": "Prancha de cabelo com placas de cerâmica, garantindo resultados rápidos e uniformes."
// //         },
// //         {
// //             "Nome do produto": "Perfume Unissex",
// //             "Valor do Produto": 129.90,
// //             "Quantidade em Estoque de produto": 90,
// //             "Fabricante do Produto": "AromaLux",
// //             "Categoria do Produto": "Beleza",
// //             "Descrição do Produto": "Perfume com fragrância sofisticada, perfeito para todas as ocasiões."
// //         },
// //         {
// //             "Nome do produto": "Creme Hidratante Facial",
// //             "Valor do Produto": 79.90,
// //             "Quantidade em Estoque de produto": 140,
// //             "Fabricante do Produto": "DermaCare",
// //             "Categoria do Produto": "Beleza",
// //             "Descrição do Produto": "Creme leve com ação hidratante e antioxidante para o cuidado diário."
// //         },
// //         {
// //             "Nome do produto": "Óculos de Sol Polarizados",
// //             "Valor do Produto": 159.90,
// //             "Quantidade em Estoque de produto": 110,
// //             "Fabricante do Produto": "SunStyle",
// //             "Categoria do Produto": "Acessórios",
// //             "Descrição do Produto": "Óculos com lentes polarizadas, proteção UV e design moderno."
// //         },
// //         {
// //             "Nome do produto": "Pulseira Fitness",
// //             "Valor do Produto": 99.90,
// //             "Quantidade em Estoque de produto": 180,
// //             "Fabricante do Produto": "FitLife",
// //             "Categoria do Produto": "Eletrônicos",
// //             "Descrição do Produto": "Monitoramento de atividades físicas, frequência cardíaca e notificações pelo smartphone."
// //         },
// //         {
// //             "Nome do produto": "Bicicleta Urbana",
// //             "Valor do Produto": 1299.90,
// //             "Quantidade em Estoque de produto": 30,
// //             "Fabricante do Produto": "CyclePro",
// //             "Categoria do Produto": "Esporte",
// //             "Descrição do Produto": "Bicicleta com design ergonômico, ideal para deslocamentos urbanos."
// //         },
// //         {
// //             "Nome do produto": "Capacete de Ciclismo",
// //             "Valor do Produto": 199.90,
// //             "Quantidade em Estoque de produto": 70,
// //             "Fabricante do Produto": "SafeRide",
// //             "Categoria do Produto": "Esporte",
// //             "Descrição do Produto": "Capacete leve com ótima ventilação e certificação de segurança."
// //         },
// //         {
// //             "Nome do produto": "Bola de Futebol",
// //             "Valor do Produto": 79.90,
// //             "Quantidade em Estoque de produto": 150,
// //             "Fabricante do Produto": "SportMaster",
// //             "Categoria do Produto": "Esporte",
// //             "Descrição do Produto": "Bola de futebol de alta durabilidade, perfeita para treinamentos e jogos."
// //         },
// //         {
// //             "Nome do produto": "Raquete de Tênis",
// //             "Valor do Produto": 249.90,
// //             "Quantidade em Estoque de produto": 45,
// //             "Fabricante do Produto": "ProTennis",
// //             "Categoria do Produto": "Esporte",
// //             "Descrição do Produto": "Raquete leve com ótima aderência, indicada para jogadores de todos os níveis."
// //         },
// //         {
// //             "Nome do produto": "Kit de Pintura",
// //             "Valor do Produto": 149.90,
// //             "Quantidade em Estoque de produto": 85,
// //             "Fabricante do Produto": "Artes&cores",
// //             "Categoria do Produto": "Artes e Lazer",
// //             "Descrição do Produto": "Kit completo com tintas, pincéis e telas para estimular a criatividade."
// //         },
// //         {
// //             "Nome do produto": "Instrumento Musical - Ukulele",
// //             "Valor do Produto": 299.90,
// //             "Quantidade em Estoque de produto": 50,
// //             "Fabricante do Produto": "MusicJoy",
// //             "Categoria do Produto": "Música",
// //             "Descrição do Produto": "Ukulele com som suave, perfeito para iniciantes e profissionais."
// //         },
// //         {
// //             "Nome do produto": "Planta Artificial Decorativa",
// //             "Valor do Produto": 89.90,
// //             "Quantidade em Estoque de produto": 120,
// //             "Fabricante do Produto": "DecoraCasa",
// //             "Categoria do Produto": "Decoração",
// //             "Descrição do Produto": "Planta artificial de alta qualidade que traz vida e cor a qualquer ambiente."
// //         },
// //         {
// //             "Nome do produto": "Pendente de Luz LED",
// //             "Valor do Produto": 179.90,
// //             "Quantidade em Estoque de produto": 75,
// //             "Fabricante do Produto": "LumiDesign",
// //             "Categoria do Produto": "Decoração",
// //             "Descrição do Produto": "Pendente com design moderno e iluminação LED de baixo consumo."
// //         },
// //         {
// //             "Nome do produto": "Kit de Ferramentas",
// //             "Valor do Produto": 299.90,
// //             "Quantidade em Estoque de produto": 65,
// //             "Fabricante do Produto": "FixIt",
// //             "Categoria do Produto": "Ferramentas",
// //             "Descrição do Produto": "Conjunto completo de ferramentas para pequenos reparos e montagens."
// //         },
// //         {
// //             "Nome do produto": "Bateria Portátil",
// //             "Valor do Produto": 129.90,
// //             "Quantidade em Estoque de produto": 140,
// //             "Fabricante do Produto": "PowerUp",
// //             "Categoria do Produto": "Eletrônicos",
// //             "Descrição do Produto": "Bateria externa compacta com alta capacidade e recarga rápida."
// //         },
// //         {
// //             "Nome do produto": "Carregador Rápido USB-C",
// //             "Valor do Produto": 69.90,
// //             "Quantidade em Estoque de produto": 250,
// //             "Fabricante do Produto": "ChargeMax",
// //             "Categoria do Produto": "Eletrônicos",
// //             "Descrição do Produto": "Carregador com tecnologia USB-C para carregamento rápido e seguro."
// //         },
// //         {
// //             "Nome do produto": "Câmera de Segurança Wi-Fi",
// //             "Valor do Produto": 399.90,
// //             "Quantidade em Estoque de produto": 40,
// //             "Fabricante do Produto": "SafeHome",
// //             "Categoria do Produto": "Segurança",
// //             "Descrição do Produto": "Câmera com conexão Wi-Fi, visão noturna e detecção de movimento."
// //         },
// //         {
// //             "Nome do produto": "Detector de Fumaça",
// //             "Valor do Produto": 89.90,
// //             "Quantidade em Estoque de produto": 100,
// //             "Fabricante do Produto": "SafeHome",
// //             "Categoria do Produto": "Segurança",
// //             "Descrição do Produto": "Detector de fumaça com alarme sonoro e bateria de longa duração."
// //         },
// //         {
// //             "Nome do produto": "Jogo de Lençóis Casal",
// //             "Valor do Produto": 199.90,
// //             "Quantidade em Estoque de produto": 80,
// //             "Fabricante do Produto": "ConfortHome",
// //             "Categoria do Produto": "Casa e Cama",
// //             "Descrição do Produto": "Conjunto de lençóis de algodão com alta absorção e toque macio."
// //         },
// //         {
// //             "Nome do produto": "Travesseiro Ortopédico",
// //             "Valor do Produto": 119.90,
// //             "Quantidade em Estoque de produto": 95,
// //             "Fabricante do Produto": "SleepWell",
// //             "Categoria do Produto": "Casa e Cama",
// //             "Descrição do Produto": "Travesseiro com design ergonômico que auxilia na postura durante o sono."
// //         },
// //         {
// //             "Nome do produto": "Colchão Casal de Molas Ensacadas",
// //             "Valor do Produto": 1499.90,
// //             "Quantidade em Estoque de produto": 25,
// //             "Fabricante do Produto": "DreamSleep",
// //             "Categoria do Produto": "Casa e Cama",
// //             "Descrição do Produto": "Colchão com sistema de molas ensacadas, proporcionando conforto e durabilidade."
// //         },
// //         {
// //             "Nome do produto": "Ventilador Portátil USB",
// //             "Valor do Produto": 49.90,
// //             "Quantidade em Estoque de produto": 200,
// //             "Fabricante do Produto": "CoolTech",
// //             "Categoria do Produto": "Eletrônicos",
// //             "Descrição do Produto": "Ventilador compacto e portátil, ideal para usar no escritório ou em viagens."
// //         },
// //         {
// //             "Nome do produto": "Estabilizador de Tensão",
// //             "Valor do Produto": 229.90,
// //             "Quantidade em Estoque de produto": 55,
// //             "Fabricante do Produto": "PowerSafe",
// //             "Categoria do Produto": "Informática",
// //             "Descrição do Produto": "Equipamento que protege eletrônicos contra variações na rede elétrica."
// //         },
// //         {
// //             "Nome do produto": "Suporte para Notebook",
// //             "Valor do Produto": 99.90,
// //             "Quantidade em Estoque de produto": 140,
// //             "Fabricante do Produto": "ErgoTech",
// //             "Categoria do Produto": "Informática",
// //             "Descrição do Produto": "Suporte ajustável que melhora a postura e a ventilação do notebook."
// //         },
// //         {
// //             "Nome do produto": "Adaptador Wi-Fi USB",
// //             "Valor do Produto": 79.90,
// //             "Quantidade em Estoque de produto": 160,
// //             "Fabricante do Produto": "ConnectPlus",
// //             "Categoria do Produto": "Informática",
// //             "Descrição do Produto": "Adaptador compacto que garante conexão estável e rápida à internet."
// //         },
// //         {
// //             "Nome do produto": "Roteador Wireless",
// //             "Valor do Produto": 349.90,
// //             "Quantidade em Estoque de produto": 60,
// //             "Fabricante do Produto": "NetMaster",
// //             "Categoria do Produto": "Informática",
// //             "Descrição do Produto": "Roteador com ampla cobertura e alta velocidade para ambientes conectados."
// //         }

// // ])

// // db['bd3_atv3_produtos'].find().sort( {"Valor do Produto": -1 }).limit(1)

// // db['bd3_atv3_produtos'].find().sort( {"Valor do Produto": 1 }).limit(1)

// // db['bd3_atv3_produtos'].find({

// //     "Valor do Produto" : {$gte: 2000, $lte: 3500}

// // })

// // db['bd3_atv3_produtos'].find({

// //     "Categoria do Produto" : "Eletrônicos"

// // })

// // db['bd3_atv3_produtos'].find({
// //     $or : [
// //         {"Categoria do Produto" : {$eq : 'Eletrodomésticos'}},
// //         {"Categoria do Produto" : {$eq : 'Acessórios'}},
// //     ]
// // }) 

// // db['bd3_atv3_produtos'].find() 

// db['bd3_atv3_produtos'].find({
    
//     'Categoria do Produto':{$nin: ['Calçados','Casa e Cozinha'] },

// });

// db['bd3_atv3_produtos'].find().sort( {"Valor do Produto": 1 })

// // db['bd3_atv3_produtos'].find().sort( {"Valor do Produto": -1 })

// db['bd3_atv3_produtos'].find({
    
//     'Categoria do Produto':'Móveis'

// }).sort({"Valor do Produto": -1 });

// db['bd3_atv3_produtos'].find({
    
//     'Categoria do Produto':'Acessórios'

//  }).sort({"Valor do Produto": 1 });


// db['bd3_atv3_produtos'].find({
    
//     'Categoria do Produto':{$nin: ['Calçados'] },

// }).sort({"Valor do Produto": -1 });

// db['bd3_atv3_produtos'].find();

