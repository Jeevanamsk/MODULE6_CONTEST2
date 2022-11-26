fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
.then((data)=>{
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].id);
    let tableData="";
    const formatpercent =number =>  
    `${new Number(number).toFixed(2)}%`
    const formatDollar = (number,maxsignum) => new Intl.NumberFormat('en-Us', {
        style:'currency',
        currency:'usd',
        maxsignum

    })
    .format(number);

    objectData.map((values)=>{
      tableData+=  
      `<tr>
      <td><img src="${values.image}"/>&nbsp&nbsp ${values.id}</td>
      
      <td >${values.symbol.toUpperCase()}</td>
      <td>${formatDollar(values.current_price,20)}</td>
      <td>${formatDollar(values.total_volume,5)}</td>
      <td>
      
      ${formatpercent(values.price_change_percentage_24h)}
      
      </td>
      <td> Mkt.Cap: ${formatDollar(values.market_cap,12)} </td>
      
    </tr>`;

    });
    document.getElementById("table_body").
    innerHTML=tableData;
    
})