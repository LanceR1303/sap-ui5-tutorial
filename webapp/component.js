sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  (UIComponent, JSONModel, ResourceModel) => {
    "use strict";
    return UIComponent.extend("ui5.walkthrough.Component", {
      metadata: {
        manifest: "json"
      },
      init() {
        // call init function of parent UI Component
        UIComponent.prototype.init.apply(this, arguments);

        const oData = {
          recipient: {
            name: "UI5",
          },
        };

        //Example of a JSON Model. JSON text or file
        const oModel = new JSONModel(oData);
        this.setModel(oModel);

      },
    });
  }
);
