import os
from .common import *

DEBUG  = False

ALLOWED_HOSTS = ['shoppe-cartt.herokuapp.com']

SECRET_KEY = os.environ['SECRET_KEY']


