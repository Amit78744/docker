#!/bin/bash
source /home/ec2-user/.bash_profile

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/24response-backend

#navigate into our working directory where we have all our github files
cd /home/ec2-user/24response-backend

#install node modules
sudo docker pull amitambaliya/hey-nodejs-mysql-app:latest
sudo docker-compose up -d 

#start our node app in the background 