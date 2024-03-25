sap.ui.define(
  [
    //Importing Controls
    //"sap/m/Text", HTML style declaration
    //"sap/ui/core/mvc/XMLView", XML style declaration

    //Component style declaration
    "sap/ui/core/ComponentContainer",
  ],
  (/*Text, XMLView, */ ComponentContainer) => {
    "use strict";

    //Component style declaration
    new ComponentContainer({
      name: "ui5.walkthrough",
      settings: {
        id: "walkthrough",
      },
      async: true,
    }).placeAt("content");

    //HTML Style defintion
    //Customising the Text control from above
    /*
    new Text({
      text: "Hello UI5",
    }).placeAt("content"); //placeAt defines the id / name of the HTML container (body, div) within which this object should be placed.
    */

    /*
    //XML style defintion (Preferred to separate View and Controller)
    XMLView.create({
      viewName: "ui5.walkthrough.view.App", //Note: ui5.walkthrough was defined as the namespace and mapped to the root folder of index.html hence the dir structure becomes (indexDirOfIndexHtml)/view/App
    }).then((oView) => oView.placeAt("content"));
    */
  }
);
