user: litespeed
passwort: litespeed

server starten: sudo /usr/local/lsws/bin/lswsctrl start
server stoppen: sudo /usr/local/lsws/bin/lswsctrl stop

server runterfahren: sudo shutdown -h now

git aktualisieren: cd /usr/local/lsws/DEFAULT/http2/
			       sudo git pull

url http/1.1: https://litespeed:8080/
url http/2.0: https://litespeed:8088/


Litespeed Webadmin

https://http2.namics.com:7080/login.php

name: admin
pw: 123456