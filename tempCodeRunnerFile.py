from flask import Flask,redirect,url_for,render_template,request
from form import ContactForm
from flask_bootstrap import Bootstrap5



app=Flask(__name__)
app.config['SECRET_KEY']="rohanarts"

bootstrap_app = Bootstrap5(app)

def send_mail(from_user,body):
    import smtplib
    from email.mime.multipart import MIMEMultipart
    from email.mime.text import MIMEText
    to_user = "rohanartsweb09@gmail.com"
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()
    server.login(user=to_user, password="rkid tjng esyl zxgl")
    print(body)
    print(from_user)
    print(to_user)
    msg = MIMEMultipart()
    msg['From'] = from_user
    msg['To'] = to_user
    msg['Subject'] = "CONTACTING ROHAN MEWATI"

    msg.attach(MIMEText(body, 'html'))

    server.sendmail(from_user, to_user, msg.as_string())
    server.quit()

@app.context_processor
def all_variables():
    contact_form = ContactForm()
    return dict(contact_form = contact_form)


@app.route('/')
def index():
    print("YOU ARE CURRENTLY ON HOME PAGE")
    contact_form  = ContactForm()
    return render_template('index.html')

@app.route('/contact',methods = ['POST','GET'])
def contact(): 
    contact_form = ContactForm()
    if contact_form.validate_on_submit():
        mail_flash = "Email sent sucessfully"
        body = contact_form.body.data
        send_mail(contact_form.email.data,body)
        print("here !!")
        return render_template('indext.html',mail_flash = mail_flash)
    mail_flash = None
    return render_template('index.html',mail_flash = mail_flash)

if __name__ == '__main__':
    app.run(port=5000,debug=True)