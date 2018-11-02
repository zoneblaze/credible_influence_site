
# BuzzRadar-v2.0 (they call it v3.314512)

The insights system is a Symfony 3 project. Follow the next instructions in order to get the source code and the project up and running! :rocket:

Requirements
-------------
 - PHP 7.0+
  - Mac only Install Mamp: https://www.mamp.info/en/
  - Mac only [Mamp Change default Mac OS X PHP to MAMP's PHP Installation](https://gist.github.com/irazasyed/5987693)
   - Mac only see instructions above, change to /Applications/MAMP/bin/php/php7.x.x/bin
  
 - Postgres 9.4+ http://www.enterprisedb.com/downloads/postgres-postgresql-downloads
  - install with default settings
  - don't install stackbuilder

 - Install [composer](https://getcomposer.org/download/)
   - Before executing the commands to install composer, go to your home folder inside your terminal with `cd ~`
   - Make sure to make composer executable and remember in which folder it is located: in terminal `chmod +x composer.phar`
   - Check Composer is running ok, in same folder im terminal: `~/composer.phar`
   
 - Install [bower](https://bower.io/#install-bower)
 - Install [compass](http://compass-style.org/install/)
    - If you have MacOS 10.11 or above (Sierra and Capitan), check the troubleshooting section.
 - Install [wkhtmltoimage](http://wkhtmltopdf.org/downloads.html).
 - Check the installation instructions in the section [Install wkhtmltoimage](#install-wkhtmltoimage)
 - Install [UglyfyJS](https://github.com/mishoo/UglifyJS2/tree/v2.x)
 - git
 
 Connecting to the databases
-------------------
The system uses many databases in order to run. In a development environment you should use remote databases from the test servers of Buzzradar. Follow the next instructions in order to create the tunnels which will connect your computer to the remote database servers:

 - Install autossh. We use autossh to avoid losing the tunnel connection everytime, it reconnects automatically using this.
  - Mac only http://macappstore.org/autossh/
  - Ubuntu, debian: `apt-get install autossh`
 - after installing autossh, you have to check if you already have an ssh-key in your computer, running: `cat ~/.ssh/id_rsa.pub`. If you have it already , copy the string returned by cat and send it to your server administrator to add your computer to the white list of the servers.
 - In case 'cat' returned something like 'No such file or directory', you have to create an ssh-key running `ssh-keygen` in your terminal. It will ask you some questions but just hit ENTER to choose the default options, if you want to make your life easier. After that run `cat ~/.ssh/id_rsa.pub`, copy the returned string and send it to your server admin.
 - After you have access to the servers you can create the tunnels with autossh. Run each tunnel in a different terminal and keep them opened. If you close those windows you will lose the pussy love connectivity.
 1. `autossh -M 20300 -L 5433:localhost:5432 buzzradar@testcms.buzzradar.com`
 2. `autossh -M 20302 -L 5434:localhost:5432 buzzradar@134.213.113.101`
 3. `autossh -M 20304 -L 5435:localhost:5432 buzzradar@134.213.136.156`
Take into account that the database port for the first server is going to be '5433', the second one '5434' and the third '5435'. Remember this because when you install the project with composer you will be asked to put this data.

Getting the source code
-------------------
 1. You have to get the source code from github, that's why you have to clone the project running: `git clone git@github.com:buzzradar/BuzzRadar-Insights-v2.git`. If you are not able to clone the project, make sure that your github account has your ssh key (the same one that has been used to access tothe buzzradar servers `cat ~/.ssh/id_rsa.pub`). You can check that in the settings of your github account. Check this to help yourself https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/  
 2. Proceed to the **How to install the project** section.

#Install wkhtmltoimage
 1. Download the correct file for your OS from http://wkhtmltopdf.org/downloads.html
 2. Uncompress or install the downloaded file and the run `which wkhtmltoimage` in a terminal window

How to install the project
-------------------
 
 1. Make sure you are in the correct branch with `git branch`. It should be "develop"
 2. Pull the last commits from the remote repository with `git pull`
 3. Go inside your project folder with your terminal. FOr example: `cd ~/dev/Buzzradar-Insights-v2`. This depends where you cloned your project.
 3. Run `~/composer.phar install` to install all the PHP dependencies
    1. You will be asked questions regarding the configuration of the project. Most of the settings are going to be the default option, so it's fine if you just type ENTER in all of them 
 4. Run `bower install` (no sudo!) to install all the javascript dependencies
 5. Clear the Symfony cache for the desired environment with `bin/console cache:clear`
 6. Create the FOSJsRouting file with `bin/console fos:js-routing:dump`
 7. Dump the assets with `bin/console assetic:dump`. If you have a problem running this command, check the troubleshooting section.
 8. You should be ready now! Go to the section **Running the project**

Running the project
-------------
 - In order to run a virtual server with the project inside, run `bin/console server:run`. Keep this window opened, if you close it you won't have the virtual server running. Check the returned url and copy it in the browser

 - Run this command if you work with javascript and css files `bin/console assetic:watch`. Keep this window opened, if you close it you won't be able to notice the changed made in your assets. It will check if there are changes in the assets and will applied them in the public folder of the project.

Useful commands
-------------
 - Clearing the cache `bin/console cache:clear`

 - Recreating the javascript routes `bin/console fos:js-routing:dump`

 - Linking assets inside the public folder of the bundle `bin/console assets:install --symlink`

How to deploy (:skull:JUST FOR SYSADMINS :skull:)
-------------------

 1. Make sure you are in the correct branch with `git branch`
 2. Pull the last commits from the remote repository with `git pull`
 3. (If there are new composer dependencies) Run `~/composer.phar install`
 4. (If there are new bower dependencies) Run `bower install`
 5. Clear the Symfony cache for the desired environment with `bin/console cache:clear --env=prod` (Put **prod** if is the production environment, or **dev** if it is the development environment)
 6. Recreate the FOSJsRouting file with `bin/console fos:js-routing:dump`
 7. Dump the assets with `bin/console assetic:dump --env=prod` (Put **prod** if is the production environment, or **dev** if it is the development environment)
 8. You should be ready to try the new changes!
 
 If any issue with compass then this may fix it: sudo gem install -n /usr/local/bin compass

Special Features
================
Javascript translations
-----------------------
Javascript translations are done using the composer package `willdurand/js-translation-bundle`. Everything is configured such that all the twig templates extending the view `@Insights/Layout/insights.html.twig` are going to count with the same translation used in twig files, but in javascript.
Follow these instructions to work with javascript translations:
 - Add your translated string to the dictionaries in `app/Resources/translations/messages.*.yml`
 - Update the javascript dictionaries (these are internal copies of the original dictionaries) using the command `bin/console bazing:js-translation:dump` . This is needed everytime you add a new translation, otherwise the new translations won't be available in javascript.
 - Use the global method `Translator.trans(key)`, being key . Example: `Translator.trans('social.chart.growth_against_competitors_title')`
 - Enjoy!

Trouble shooting
================
 - If `bin/console assetic:dump` fails showing red messages, it probably is because you need to configure where 'compass' is inside the config file of the project.
  - Run `which compass` in order to know where compass is located.
  - Copy the returned string
  - Open the app/config/parameters.yml file and search this key 'assetic.filter.compass.bin' and replace the value of the key pasting the previous path.
  - it should look like this 'assetic.filter.compass.bin: /usr/local/bin/compass' but with your path of compass.

 - If you have Sierra or Capitan and does not allow you to install compass, please execute the following commands:
  - I had to do `sudo su` first. 
  - After that I did `sudo gem install -n /usr/local/bin compass` and it installed (and runs) as normal.
