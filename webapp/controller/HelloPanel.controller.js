sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.HelloPanel", {
      onShowHello() {
        // read from bundle
        const view = this.getView();
        const oBundle = view.getModel("i18n").getResourceBundle();
        const sRecipient = view.getModel().getProperty("/recipient/name");
        const sMsg = oBundle.getText("helloMsg", [sRecipient]);

        // show a native JavaScript alert
        MessageToast.show(sMsg);
      },
    });
  }
);
