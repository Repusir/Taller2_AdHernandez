#!/bin/bash

sudo npm install
sudo tsc
sass src/assets/styles/sass/style.scss:src/assets/styles/css/style.css #--watch --style compressed
