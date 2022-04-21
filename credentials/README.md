# Credentials Folder

## The purpose of this folder is to store all credentials needed to log into your server and databases. This is important for many reasons. But the two most important reasons is
    1. Grading , servers and databases will be logged into to check code and functionality of application. Not changes will be unless directed and coordinated with the team.
    2. Help. If a class TA or class CTO needs to help a team with an issue, this folder will help facilitate this giving the TA or CTO all needed info AND instructions for logging into your team's server. 


# Below is a list of items required. Missing items will causes points to be deducted from multiple milestone submissions.

1. Server URL or IP
2. SSH username
3. SSH password or key.
    <br> If a ssh key is used please upload the key to the credentials folder.
4. Database URL or IP and port used.
    <br><strong> NOTE THIS DOES NOT MEAN YOUR DATABASE NEEDS A PUBLIC FACING PORT.</strong> But knowing the IP and port number will help with SSH tunneling into the database. The default port is more than sufficient for this class.
5. Database username
6. Database password
7. Database name (basically the name that contains all your tables)
8. Instructions on how to use the above information.

# Most important things to Remember
## These values need to kept update to date throughout the semester. <br>
## <strong>Failure to do so will result it points be deducted from milestone submissions.</strong><br>
## You may store the most of the above in this README.md file. DO NOT Store the SSH key or any keys in this README.md file.


1.Database Connection name:inlaid-crane-341607:us-west2:team6mysql
2.Database IP: 34.94.242.160
3.Database port: 3306
4.Database Password: Team6password
5.Database Name for Products: Team6
6.Database Name in gcloud console: team6mysql 
7.Database Username: root

Instructions to SSH into the server

1.Using PuTTY put the server IP into the Host Name (or IP address) bar and set port to 22.  
2. navigate to SSH then Auth and put the private key in the private key file bar  
3. Open with PuTTY  
4. put team6 for username and you are in  

Instructions to SSL into mySQL 

1. Put hostname to 34.94.242.160
2. Put port as 3306
3. Username is root
4. Store password as Team6password
5.Switch to SSL tab the key file is the client-key.pem
6.the Cert File is client-cert.pem
7. The SSL CA file is the server-ca.pem

You may also run the following command to SSL directly into the Database:

mysql -uroot -p -h 34.94.242.160 --ssl-ca=server-ca.pem --ssl-cert=client-cert.pem --ssl-key=client-key.pem
