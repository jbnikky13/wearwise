export const clothingCatalog=[
{id:'top-white-shirt',name:'Crisp White Button-Down',category:'Top',occasion:['work','casual','travel'],styles:['Minimal','Classic'],price:0,image:'https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=700&q=80'},
{id:'tailored-trousers',name:'Tailored Straight Trousers',category:'Bottom',occasion:['work','evening','date'],styles:['Classic','Elegant','Minimal'],price:0,image:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80'},
{id:'minimal-sneakers',name:'Minimal Everyday Sneakers',category:'Shoes',occasion:['casual','travel'],styles:['Minimal','Relaxed','Street'],price:0,image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80'},
{id:'satin-blouse',name:'Elegant Satin Blouse',category:'Top',occasion:['date','party','evening'],styles:['Elegant','Trendy'],price:0,image:'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=80'},
{id:'dark-denim',name:'Clean Dark Denim',category:'Bottom',occasion:['casual','party','travel'],styles:['Street','Relaxed','Classic'],price:0,image:'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80'},
{id:'leather-loafers',name:'Classic Leather Loafers',category:'Shoes',occasion:['work','date','evening'],styles:['Classic','Elegant','Minimal'],price:0,image:'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=700&q=80'}
];
export function findClothing({occasion,style,category}){return clothingCatalog.filter(item=>(!occasion||item.occasion.includes(occasion))&&(!style||item.styles.includes(style))&&(!category||item.category===category));}
