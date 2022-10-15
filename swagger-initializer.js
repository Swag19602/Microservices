window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [{url: "https://altor-public-bucket.s3.ap-south-1.amazonaws.com/Documentation/qualityass.json",name:"QUALITY ASSESEMENT"},
    {url: "https://altor-public-bucket.s3.ap-south-1.amazonaws.com/Documentation/inventoryApi.json",name:"INVENTORY MANAGEMENT"},
    {url: "https://altor-public-bucket.s3.ap-south-1.amazonaws.com/Documentation/salesAPI.json",name:"SALES API"}],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
