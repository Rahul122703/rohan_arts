from flask_wtf import FlaskForm
from flask_ckeditor import CKEditorField
from wtforms import StringField, PasswordField, SubmitField,EmailField
from wtforms.validators import DataRequired, Email


class ContactForm(FlaskForm):
    email = EmailField( validators=[DataRequired(), Email()], render_kw={"placeholder": "Enter your email"}, label= 'Your Email')
    Name = StringField( validators=[DataRequired()], render_kw={"placeholder": "Choose a username"}, label = 'Your Name' )
    body = CKEditorField('Body', validators=[DataRequired()])
    submit = SubmitField('Send Message',render_kw={"class": "btn btn-black"})