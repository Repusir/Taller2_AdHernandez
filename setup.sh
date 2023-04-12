#!/bin/bash

sudo npm install
sudo tsc
sass src/assets/styles/scss/style.scss:src/assets/styles/css/style.css #--watch --style compressed
