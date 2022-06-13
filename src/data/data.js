
const data = {
    category:[
        
        {
            id:1,
            img:"https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            name:"Fast Food",
            url:"https://google.com"
        },
        {
            id:2,
            img:"https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
            name:"Geen Food",
            url:"https://google.com"
        },
        {
            id:3,
            img:"https://images.unsplash.com/photo-1594489556673-c816408242f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
            name:"Milk Tea",
            url:"https://google.com"
        },
        {
            id:4,
            img:"https://images.unsplash.com/photo-1629203851288-7ececa5f05c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            name:"Pepsi",
            url:"https://google.com"
        },
    ],
    navQuickFood:[
        {
            id:1,
            name:"Tất cả"
        },
        {
            id:2,
            name:"Đồ ăn nhanh"
        },
        {
            id:3,
            name:"đồ ăn vặt"
        },
        {
            id:4,
            name:"Đồ ăn healthy"
        },
        {
            id:5,
            name:"Nước ngọt"
        },
        {
            id:6,
            name:"Trà sữa"
        },
    ],
    quickFood :[
        {
            id:1,
            name:"Hamburger",
            cost:100,
            img:"https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80",
            cate:"fast_food",
        },
        {
            id:2,
            name:"Salad",
            cost:50,
            img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            cate:"healthy",
        },
        {
            id:3,
            name:"Matcha",
            cost:110,
            img:"https://images.unsplash.com/photo-1592284441621-581ebd2e677d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            cate:"drinkFood",
        },
        {
            id:4,
            name:"Bánh Tráng Trứng",
            cost:10,
            img:"https://media.istockphoto.com/id/1159830908/vi/anh/b%C3%A1nh-m%C3%AC-tr%C3%A0ng-n%C6%B0%C6%A1ng-hay-pizza-%C4%91%E1%BB%8Ba-ph%C6%B0%C6%A1ng-vi%E1%BB%87t-nam-l%C3%A0-m%E1%BB%99t-m%C3%B3n-%C4%83n-%C4%91%C6%B0%E1%BB%9Dng-ph%E1%BB%91-ph%E1%BB%95-bi%E1%BA%BFn-cho-kh%C3%A1ch-du.webp?s=612x612&w=is&k=20&c=EJwjH0fy9t8kS-e5LCdp_c_rXfgrSMc0c5QpqkFjVPE=",
            cate:"snacks",
        },
        {
            id:5,
            name:"Trà Sữa chè xanh",
            cost:10,
            img:"https://anh.eva.vn/upload/3-2018/images/2018-07-24/cach-lam-tra-sua-che-xanh-don-gian-giai-nhiet-ngay-he-nong-buc-8-1532423107-595-width600height450.jpg",
            cate:"milkTea",
        },
        {
            id:6,
            name:"Gà Rán KFC",
            cost:10,
            img:"https://toplist.vn/images/800px/kfc-30330.jpg",
            cate:"fast_food",
        },
        {
            id:7,
            name:"Pizza Hut",
            cost:10,
            img:"https://toplist.vn/images/800px/pizza-hut-776206.jpg",
            cate:"fast_food",
        },
        {
            id:8,
            name:"Starbucks",
            cost:10,
            img:"https://toplist.vn/images/800px/starbucks-776205.jpg",
            cate:"fast_food",
        },
        {
            id:9,
            name:"Jollibe",
            cost:10,
            img:"https://toplist.vn/images/800px/jollibe-448463.jpg",
            cate:"fast_food",
        },
        {
            id:10,
            name:"Burger King",
            cost:10,
            img:"https://toplist.vn/images/800px/burger-king-445018.jpg",
            cate:"fast_food",
        },
        {
            id:11,
            name:"Popeye's",
            cost:10,
            img:"https://toplist.vn/images/800px/popeyes-444837.jpg",
            cate:"fast_food",
        },
        {
            id:12,
            name:"Pizza Inn",
            cost:10,
            img:"https://toplist.vn/images/800px/pizza-inn-776218.jpg",
            cate:"fast_food",
        },
        {
            id:13,
            name:" Green Juice",
            cost:10,
            img:"https://www.mensjournal.com/wp-content/uploads/mf/10-green-foods-and-drinks-for-every-guys-diet-kale.jpg?w=700&quality=86&strip=all",
            cate:"healthy",
        },
        {
            id:14,
            name:"Spinach",
            cost:10,
            img:"https://www.mensjournal.com/wp-content/uploads/mf/10-green-foods-and-drinks-for-every-guys-diet-spinach.jpg?w=700&quality=70&strip=all",
            cate:"healthy",
        },
        {
            id:15,
            name:"Brussels Sprouts",
            cost:10,
            img:"https://www.mensjournal.com/wp-content/uploads/mf/10-green-foods-and-drinks-for-every-guys-diet-brussels-sprouts.jpg?w=700&quality=40&strip=all",
            cate:"healthy",
        },
        {
            id:16,
            name:"Broccoli",
            cost:10,
            img:"https://www.mensjournal.com/wp-content/uploads/mf/10-green-foods-and-drinks-for-every-guys-diet-broccoli_0.jpg?w=700&quality=70&strip=all",
            cate:"healthy",
        },
        {
            id:17,
            name:"Artichokes",
            cost:10,
            img:"https://www.mensjournal.com/wp-content/uploads/mf/10-green-foods-and-drinks-for-every-guys-diet-artichokes.jpg?w=700&quality=55&strip=all",
            cate:"healthy",
        },
        {
            id:18,
            name:"Cucumber",
            cost:10,
            img:"https://www.mensjournal.com/wp-content/uploads/mf/10-green-foods-and-drinks-for-every-guys-diet-cucumbers.jpg?w=700&quality=70&strip=all",
            cate:"healthy",
        },
        {
            id:19,
            name:"Bánh chuối chiên = Vina Chuối",
            cost:10,
            img:"https://assets.grab.com/wp-content/uploads/sites/11/2020/03/01210531/bnhchuoi.jpg",
            cate:"snacks",
        },
        {
            id:20,
            name:"The Jade - Bánh Sầu Riêng Kem Lạnh",
            cost:10,
            img:"https://assets.grab.com/wp-content/uploads/sites/11/2020/03/01211015/55-3-e1583068231899.jpg",
            cate:"snacks",
        },
        {
            id:21,
            name:"Cimi Fruit - Trái Cây Tô",
            cost:10,
            img:"https://assets.grab.com/wp-content/uploads/sites/11/2020/03/01211155/111-1-e1581878033368-1-e1583068348605.jpg",
            cate:"snacks",
        },
    ],
    birthday:[
        {
            id:1,
            dataCard:[
                "Giảm giá 30% cho mỗi mặt hàng",
                "FreeShip với những đơn hàng gần địa điểm với TFood.",
                "Được tặng một món quà vui vẻ khi mua hàng TFood.",
                "Thời gian áp dụng 1 ngày"
            ],
            button: "Tham gia"
        },
        {
            id:2,
            dataCard:[
                "Giảm giá 35% cho mỗi mặt hàng",
                "FreeShip với những đơn hàng gần địa điểm với TFood.",
                "Được tặng một món quà vui vẻ khi mua hàng TFood.",
                "Thời gian áp dụng 3 ngày"
            ],
            button: "Nang cap trung"
        },
        {
            id:3,
            dataCard:[
                "Giảm giá 40% cho mỗi mặt hàng",
                "FreeShip với những đơn hàng gần địa điểm với TFood.",
                "Được tặng một món quà vui vẻ khi mua hàng TFood.",
                "Thời gian áp dụng 7 ngày"
            ],
            button: "Nang cap VIP"
        }
    ]
}

export default data;