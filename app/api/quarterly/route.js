export async function POST(req){
    const stock = await req.json();
    const data = await fetch(`https://finnhub.io/api/v1/stock/earnings?symbol=${stock.stock}&token=${process.env.API_KEY}`);
    const useable_data = await data.json();
    return new Response(JSON.stringify(useable_data))
}