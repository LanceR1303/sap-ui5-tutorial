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
        rootView: {
          viewName: "ui5.walkthrough.view.App",
          type: "XML",
          async: true,
          id: "app",
        },
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

        // Example of a  Resource bundle type model
        // Set language
        const i18nModel = new ResourceModel({
          bundleName: "ui5.walkthrough.i18n.i18n",
        });
        this.setModel(i18nModel, "i18n");
      },
    });
  }
);
