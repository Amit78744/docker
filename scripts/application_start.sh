#!/bin/bash
source /home/ec2-user/.bash_profile

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/docker

#navigate into our working directory where we have all our github files
cd /home/ec2-user/docker

#install node modules 

#start our node app in the background