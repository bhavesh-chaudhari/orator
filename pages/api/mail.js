import nodemailer from "nodemailer";

const mail = async (req, res) => {

  const userFeedback = JSON.parse(req.body || null)

  const output = `<h2>New Feedback form submitted: </h2><br>
        <p><strong>Name: </strong> ${userFeedback?.name} </p><br>
        <p><strong>Email: </strong> ${userFeedback?.email} </p><br>
        <p><strong>Message: </strong> ${userFeedback?.message} </p><br>`

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.PASSWORD, // generated ethereal password
      },
    });

    // send mail with defined transport object
    if(userFeedback){
      transporter.sendMail(
        {
          from: `"Orator Website" <${process.env.EMAIL}>`,
          to: `${process.env.EMAIL}`,
          subject: `Feedback form submission by ${userFeedback?.name}`,
          html: output,
        },
        (error, success) => {
          if (error) {
            console.log(error);
          } else {
            res.status(200).json({ message: "email has been sent" });
            console.log("Email sent: " + success.response);
          }
        }
      );

      res.status(200).json({ message: userFeedback });
      return
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: req.body });
  }
};

export default mail;
