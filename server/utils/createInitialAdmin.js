const Auth = require("../models/auth.model");
const bcrypt = require("bcrypt");

exports.createInitialAdmin = async () => {
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  try {
    const adminExists = await Auth.findOne({ role: "admin" });

    if (adminExists) {
      console.log("Admin user already exists. No action taken.");
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, salt);

    const adminUser = new Auth({
      email: ADMIN_EMAIL,
      password: hashedPassword,
      role: "admin",
      isVerified: true,
    });

    await adminUser.save();
    console.log("Initial admin user created successfully.");
  } catch (error) {
    console.error("Error creating initial admin user:", error);
  }
};
