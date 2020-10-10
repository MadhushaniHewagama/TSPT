/**
 * @license Copyright (c) 2019 Wabtec Corporation. All rights reserved. The
 *          software may be used and/or copied only with the written permission
 *          of Wabtec Corporation or in accordance with the terms and conditions
 *          stipulated in the agreement/contract under which the software has
 *          been supplied.
 *
 * @author Ajantha Bandara on 8/24/19.
 */

import nodemailer, { Transport } from "nodemailer";

export default class NodeMailer {
  private static transport: Transport;

  constructor() {
    // console.log("setting up mail connection transport");
    if (!NodeMailer.transport) {
      // console.log("Connecting to mail server");
      NodeMailer.transport  = nodemailer.createTransport({
        host: "dev2.shipxpress.net",

        port: 25,
    
        auth: {
    
          user: "tyapp@shipxpress.net",
    
          pass: "tyAPP2019sL"
    
        }
    
      });
    }
  }

  static getTransport() {
    return NodeMailer.transport;
  }
}
