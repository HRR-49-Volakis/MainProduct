# Main-Product-Display

# Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

# Usage

> Some usage instructions

# Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

# Development

# Installing Dependencies

# Endpoints
  1. Web (/)
  2. Product (/api/product)
  3. User (/api/user)
      - User fields: 
        {
          "userId": 2,
          "name": "Giovani",
          "last": "Rubini",
          "username": "grubini",
          "password": "password",
          "sex": "male",
          "email": "giovanirubinimaccagno@gmail.com",
          "city": "Frederick",
          "state": "Maryland",
          "zip": "21704",
          "created_date": "2018-03-29",
          "updated_at": ""
	}
      - logIn (/login)
        . this endpoint will allow you to view the information of for the account of the specified user.
        . the JSON body needed is: 
          - {
            username,
            password
          }
        . successfull response: 
           - {
                "message": "logged in"
             }
        . error message
           - {
                message: "user does not exist"
             }
      - createUser (/create)
        . this endpoint will allow you to create a user with a userId and a unique email
        . the JSON body needed is:
          - {
              "user": {
                "userId": 1,
                "name": "Giovani",
                "last": "Rubini",
                "username": "grubini",
                "password": "password",
                "sex": "male",
                "email": "giovanirubinimaccagno@gmail.com",
                "city": "Frederick",
                "state": "Maryland",
                "zip": "22222",
                "created_date": "2018-03-29",
                "updated_at": ""
              }
            }
        . successfull response: 
           - {
                "message": "user created successfuly"
             }
        . error message
           - {
                message: "error in the creation"
             }
      - updateAccount (/update)
        . this endpoint will allow you to update every field except the usename and the password
        . the JSON body needed is:
          - {
              "user": {
                "userId": 1,
                "name": "Giovani",
                "last": "Rubini",
                "username": "grubini",
                "password": "password",
                "sex": "male",
                "email": "giovanirubinimaccagno@gmail.com",
                "city": "Frederick",
                "state": "Maryland",
                "zip": "22222",
                "created_date": "2018-03-29",
                "updated_at": ""
              }
            }
        . successfull response: 
           - {
                "message": "account was updated"
             }
        . error message
           - {
                message: "user does not exist"
             }
      - deleteAccount (/delete)
        . this enpoint will allow the user to delete his account by providing the username and password
        .the JSONl body needed is:
          - {
              "user": {
                "userId": 1,
                "name": "Giovani",
                "last": "Rubini",
                "username": "grubini",
                "password": "password",
                "sex": "male",
                "email": "giovanirubinimaccagno@gmail.com",
                "city": "Frederick",
                "state": "Maryland",
                "zip": "22222",
                "created_date": "2018-03-29",
                "updated_at": ""
              }
            }
        . successfull response: 
           - {
                "message": "account was deleted"
             }
        . error message
           - {
                message: "user does not exist"
             }
```sh
npm install -g webpack
npm install
```
