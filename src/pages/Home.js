import getData from '../utils/getData';

const Home = async () => {
  const cryptos = await getData();
  const getImg = (symbol) => `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`;
  
  const view = `
    <div class="Cryptos">
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Name</th>
            <th>Name_id</th>
            <th>Rank</th>
            <th>Price USD</th>
          </tr>
        </thead>
        <tbody>
          ${cryptos.data.map(crypto => `
          <tr onclick="window.location='#/${crypto.id}'">
          <td class="crypto_currency"><img src="${getImg(crypto.symbol)}" /><h3>${crypto.symbol}</h3></td>
          <td>${crypto.name}</td>
          <td>${crypto.nameid}</td>
          <td>${crypto.rank}</td>
          <td style="dark:color:lightgreen; color:LimeGreen;">${crypto.price_usd}</td>
          </tr>
            `).join('') }
        </tbody>
      </table>

    </div>  
    `    

  return view;
}

export default Home;