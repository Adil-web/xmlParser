const { Schema, model } = require("mongoose");
const schema = new Schema({
  // модель построена по примеру, я лично без понятие что они означают
  token: { type: String, required: true },
  sendMessage: {
    request: {
      messageInfo: {
        messageId: { type: String },
        correlationId: { type: String },
        serviceId: { type: String },
        messageType: { type: String },
        messageDate: { type: Date },
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
module.exports = model("nofit", schema);
