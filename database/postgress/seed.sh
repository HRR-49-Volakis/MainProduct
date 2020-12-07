#!/bin/bash

###################################################
# Bash script to create database and seed
###################################################
# Database Variable Definitions
DATABASE="ikea"
HOST=localhost
USER="giovanirubini"
PORT=5432

# ### Import Our posts.csv file to seed Database ###
psql -Atx -U $USER -d $DATABASE -c "COPY detail (designer, care) FROM '/Users/giovanirubini/Documents/Development/hackreactor/hrr-49/MainProduct/database/postgress/csv/detail.csv' DELIMITER '#' CSV HEADER;"

psql -Atx -U $USER -d $DATABASE -c "COPY image (url) FROM '/Users/giovanirubini/Documents/Development/hackreactor/hrr-49/MainProduct/database/postgress/csv/image.csv' DELIMITER '#' CSV HEADER;"

psql -Atx -U $USER -d $DATABASE -c "COPY material (name, description) FROM '/Users/giovanirubini/Documents/Development/hackreactor/hrr-49/MainProduct/database/postgress/csv/material.csv' DELIMITER '#' CSV HEADER;"

psql -Atx -U $USER -d $DATABASE -c "COPY package (name, description, dimensions, weight) FROM '/Users/giovanirubini/Documents/Development/hackreactor/hrr-49/MainProduct/database/postgress/csv/package.csv' DELIMITER '#' CSV HEADER;"

psql -Atx -U $USER -d $DATABASE -c "COPY product (name, material_ids, image_ids, detail_id, package_id) FROM '/Users/giovanirubini/Documents/Development/hackreactor/hrr-49/MainProduct/database/postgress/csv/product.csv' DELIMITER '#' CSV HEADER;"

psql -Atx -U $USER -d $DATABASE -c "COPY member (name, last, username, password, sex, email, city, state, zip, created_at, updated_at) FROM '/Users/giovanirubini/Documents/Development/hackreactor/hrr-49/MainProduct/database/postgress/csv/member.csv' DELIMITER '#' CSV HEADER;"