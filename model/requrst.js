const { Schema, model } = require("mongoose");
const schema = new Schema({
  // модель построена по примеру, я лично без понятие что они означают
  token: { type: String, required: true },
  sendMessage: {
    request: {
      messageInfo: {
        messageId: { type: String, required: true },
        correlationId: { type: String, required: true },
        serviceId: { type: String, required: true },
        messageType: { type: String, required: true },
        messageDate: { type: Date, required: true },
        sender: {
          senderId: { type: String, required: true },
          password: { type: String, required: true },
        },
      },
      messageData: {
        data: { type: String, required: true },
      },
    },
  },
});
module.exports = model("request", schema);
