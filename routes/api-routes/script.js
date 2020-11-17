$(document).ready(() => {

   function displayStocks(stockName, priceId, changepriceId) {

      $.ajax({
         url: "/api/stocks/" + stockName,
         method: "GET"
      })
         .then((data) => {
            $("#" + priceId).html("$" + data.latestPrice);
            $("#" + changepriceId).html((data.changePercent*100).toFixed(2) + "%");
         });

   }

   displayStocks("IBM", "priceIBM", "changepercentageIBM");
   displayStocks("TSLA", "priceTesla", "changepercentageTesla");
   displayStocks("BIIB", "priceBiogen", "changepercentageBiogen");



   $(".portfolioBtn").on("click", (event) => {
      event.preventDefault();
      console.log("I was clicked!!!");
      window.location.replace("/portfolio");
   });

   $(".detailBtn").on("click", (event) => {
      event.preventDefault();
      console.log("I was clicked!!!");
      window.location.replace("/IBMdetails");
   });

   $("#add3").on("click", (event) => {
      event.preventDefault();
      console.log("I was clicked!!!");
      const favorite = {
         name: $("teslaName").text(),
         price: $("#priceTesla").text(),
         changePercent: $("#changePercentageTesla").text()
      };
      $.post("/", favorite, getFavs);
      window.location.replace("/");
   });

   function getFavs () {
      $.get("/", function(data) {
         res.render("portfolio", {favorite_data: data})
       });
   }


   //New feature: save API data as a sequelize object - not working
   // $("#add1").on("click", () => {
   //    var stock = {
   //       name: 
   //    }
   // });

   // app.post("/api/stock_data", (req, res) => {
   //    console.log(req.body);
   //    db.Stock.create({
   //       name: data.companyName,
   //       price: data.iexRealtimePrice
   //    })
   //       .then((dbStock) => {
   //          res.json(dbStock);
   //       });
   // });
   // // console.log(data.changePercent);
   // console.log("done done done!");

});