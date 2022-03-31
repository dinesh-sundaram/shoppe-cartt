from .common import *


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-k0ox6r33!bs8-x$n2*$#jcl_(47r96(p3o128kx_z9p+8*@aa9'

ALLOWED_HOSTS = []

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
        'HOSTNAME' : 'localhost',
    }
}
