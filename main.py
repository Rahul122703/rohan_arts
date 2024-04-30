from flask import Flask,redirect,url_for,render_template,request
from form import ContactForm
from flask_bootstrap import Bootstrap5

import time


app=Flask(__name__)
app.config['SECRET_KEY']="rohanarts"

bootstrap_app = Bootstrap5(app)

#ABC
def send_mail(from_user, body):
    import smtplib
    from email.mime.multipart import MIMEMultipart
    from email.mime.text import MIMEText

    to_user = "rohanartsweb09@gmail.com"
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()
    server.login(user=to_user, password="rkid tjng esyl zxgl")

    # HTML content for the email body with inline CSS
    html_body = f"""
    <html>
    <head>
        <title>HELLO ROHAN MEWATI</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 30px; border-radius: 10px; box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);">
            <img src="https://cdn2.iconfinder.com/data/icons/clean-minimal-set/16/mail-01-512.png" alt="Email Logo" style="display: block; margin: 0 auto; width: 100px;">
            <h1 style="color: #333; text-align: center; margin-bottom: 20px;">HELLO ROHAN !!!</h1>
            <p style="color: #555; line-height: 1.6;">{body}</p>
            <p style="text-align: right; margin-top: 20px; color: #777;">Sender's mail: {from_user}</p>
        </div>
    </body>
    </html>
    """

    msg = MIMEMultipart()
    msg['From'] = from_user
    msg['To'] = to_user
    msg['Subject'] = "CONTACTING ROHAN MEWATI"
    msg.attach(MIMEText(html_body, 'html'))

    server.sendmail(from_user, to_user, msg.as_string())
    server.quit()

@app.context_processor
def all_variables():
    contact_form = ContactForm()
    return dict(contact_form = contact_form)


@app.route('/')
def index():
    print("YOU ARE CURRENTLY ON HOME PAGE")
    return render_template('index.html')

@app.route('/contact',methods = ['POST','GET'])
def contact(): 
    contact_form = ContactForm()
    if contact_form.validate_on_submit():
        mail_flash = "Email sent sucessfully"
        body = contact_form.body.data
        send_mail(contact_form.email.data,body)
        return render_template('index.html',mail_flash = mail_flash)
    mail_flash = "kuch to hai"
    return render_template('index.html',mail_flash = mail_flash)

if __name__ == '__main__':
    app.run(port=5000,debug=True)