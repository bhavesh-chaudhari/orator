import nodemailer from "nodemailer";

export default async (req, res) => {

  const output = `<p>New Feedback form submitted: </p><br>
        <p><strong>Name: </strong> ${req.body.name} </p><br>
        <p><strong>Email: </strong> ${req.body.email} </p><br>
        <p><strong>Message: </strong> ${req.body.message} </p><br>`


  console.log(process.env.EMAIL);
  console.log(process.env.PASSWORD);

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.PASSWORD, // generated ethereal password
      },
    });

    // send mail with defined transport object
    // transporter.sendMail(
    //   {
    //     from: `"Orator Website Feedback Form" <${process.env.EMAIL}>`,
    //     to: `${process.env.EMAIL}`,
    //     subject: `Feedback form submission by ${req.body.name}`,
    //     html: output,
    //   },
    //   (error, success) => {
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       res.status(200).json({ message: "email has been sent" });
    //       console.log("Email sent: " + success.response);
    //     }
    //   }
    // );
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({message: req.body})
};
