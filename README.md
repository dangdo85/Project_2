# Project_2

User story:
    User is able to use the app to look at posts of pets available for adoption or pet items available for sale. Use is able to create an account and must have account to create a post. User is able to edit and delete post he/she has created. User is able to sign in and log out of account.

As a user:
- create user's account
- view all posts
    - index route
    - posts are in chronological order
- view a single post
    - show route
- view user's posts
- create a post
    - form route
    - has to be a registered user
    - time stamped
- update user's post
    - update route
    - time stamped
- delete user's post
    - delete route
- go to home page from any page
- go to index from any page
- sign-in
- log out

- Schema
    - pet available for adoption
        - title: string
        - species: string
        - breed: string
        - age: string
        - sex: string
        - size: string
        - name: string
        - color: string
        - cost: string
        - other_descriptions: string
        - location: string
        - images: string(url?)(upload?)
        - name of owner/contact: string
        - contact info: string
        - time stamp
    
    - pet items available for sale
        - title: string
        - items: string
        - price: string
        - location: string
        - name of owner/contact: string
        - contact info: string
        - time stamp



Stretch goals
- search/filter for specific post
    - search bar
- user can upload images
- a slide show for image gallery
- counter for number of views for each post
- favorite a post
- use an API
- field error


ERD
![Read me Images](/planning/ERD/Project_2_ERD.png)

Routes_Table
![Read me Images](/planning/Routes_Table/Project_2_Routes_Tablev2.png)

Wire Frames
![Read me Images](/planning/WireFrames/Project_2_WF_1.png)
![Read me Images](/planning/WireFrames/Project_2_WF_2.png)
![Read me Images](/planning/WireFrames/Project_2_WF_3.png)
