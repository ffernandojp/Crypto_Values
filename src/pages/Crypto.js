import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Crypto =  async () => {

  const id = getHash();
  const crypto = await getData(id);
  const {
    name, symbol, price_btc, price_usd, percent_change_24h, percent_change_1h,
    percent_change_7d, volume24, volume24a, market_cap_usd, csupply, tsupply, msupply,
} = crypto[0];
  const symbolURL = `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`;
  const view = `
    <div class="Cryptos-inner">
      <article class="Crypto-card">
        <img src="${symbolURL}" alt="${symbol}"/>
        <h2>${name}</h2>
      </article>
      
      <article class="Cryptos-card">
        <h3>Symbol: <br><span><strong>${symbol === null ? 'none' : symbol}</strong></span></h3>
        <h3>Name: <br><span><strong>${name === null ? 'none' : name}</strong></span></h3>
        <h3>Price_btc: <br><span style="color:orange"><strong>${price_btc === null ? 'none' : price_btc}</strong></span></h3>
        <h3>Price_usd: <br><span style="${price_usd >= 0 ? 'color:green' : 'color:red'}"><strong>${price_usd === null ? 'none' : price_usd}</strong></span></h3>
        <h3>Percent_change_1h: <br><span style="${percent_change_1h >= 0 ? 'color:green' : 'color:red'}"><strong>${percent_change_1h === null ? 'none' : percent_change_1h}</strong></span></</h3>
        <h3>Percent_change_24h: <br><span style="${percent_change_24h >= 0 ? 'color:green' : 'color:red'}"><strong>${percent_change_24h === null ? 'none' : percent_change_24h}</strong></span></h3>
        <h3>Percent_change_7d: <br><span style="${percent_change_7d >= 0 ? 'color:green' : 'color:red'}"><strong>${percent_change_7d === null ? 'none' : percent_change_7d}</strong></span></</h3>
        <h3>Market_cap_usd: <br><span><strong>${market_cap_usd === null ? 'none' : market_cap_usd}</strong></span></h3>
        <h3>Volume_24: <br><span><strong>${volume24 === null ? 'none' : volume24}</strong></span></h3>
        <h3>Volume_24a: <br><span><strong>${volume24a === null ? 'none' : volume24a}</strong></span></h3>
        <h3>Csupply: <br><span><strong>${csupply === null ? 'none' : csupply}</strong></span></h3>
        <h3>Tsupply: <br><span><strong>${tsupply === null ? 'none' : tsupply}</strong></span></h3>
        <h3>Msupply: <br>s<span><strong>${msupply === null ? 'none' : msupply}</strong></span></h3>
      </article>
    </div> 
    `
  return view
};
export default Crypto;