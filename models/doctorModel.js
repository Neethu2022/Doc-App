const mongoose = require("mongoose");

const doctorschema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },

    firstName: {
      type: String,
      required: [true, "first Name is required"],
    },

    lastName: {
      type: String,
      required: [true, "last Name is required"],
    },
    phone: {
      type: String,
      required: [true, "phone Number is required"],
    },

    email: {
      type: String,
      required: [true, "email is required"],
    },

    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },

    specialization: {
      type: String,
      required: [true, "specialization is required"],
    },
    experience: {
      type: String,
      required: [true, "experience is required"],
    },
    feesPerConsultation: {
      type: Number,
      required: [true, "fee is required"],
    },
    timings: {
      type: Object,
      required: [true, "work timing is required"],
    },
  },
  { timestamps: true }
);
const doctorModel = mongoose.model("users", doctorSchema);

module.exports = doctorModel;
