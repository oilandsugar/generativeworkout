#!/usr/bin/env bash
#cd /code
#npm install
#sudo npm install -g gulp gulp-concat

# setup all the configfiles
rm -f /etc/apache2/sites-enabled/000-default.conf
rm -f /etc/apache2/apache2.conf

ln -sf /code/docker/apache2.conf /etc/apache2/
ln -sf /code/docker/app.conf /etc/apache2/sites-available/
sudo a2ensite app.conf

# Running apache
service apache2 restart
#cd /code
# Prepare log files and start outputting logs to stdout
tail -n 0 -f /var/log/apache2/*.log
# & gulp watch