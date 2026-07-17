
type NavbarLinks ={
    name:string;
    href:string;
}

export  const DrobDown: NavbarLinks[]=[
    {href: '/' , name:'home'},
    {href: '/about' , name:'about'},
    {href: '/products' , name:'products'},
    {href: '/cart' , name:'cart'},
    {href: '/favorites' , name:'favorites'},
    {href: '/orders' , name:'orders'},
    {href: '/admin/sales' , name:'dashboard'},
    
    
]
export const links = {
    HOME: { href: '/', name: 'home' },
    ABOUT: { href: '/about', name: 'about' },
    PRODUCTS: { href: '/products', name: 'products' },  
    ADMINPRODUCTS: { href: '/admin/product', name: 'products' },  
    CART: { href: '/cart', name: 'cart' },
    FAVORITES: { href: '/favorites', name: 'favorites' },
    ORDERS: { href: '/orders', name: 'orders' },
} as const;

export const adminLinks: NavbarLinks[] =[
    {href: '/admin/sales' , name:'sales'},
    {href: '/admin/product' , name:'My Products'},
    {href: '/admin/product/creat' , name:'creat product'},
    {href: '/admin/hero/creat' , name:'creat hero'},

]