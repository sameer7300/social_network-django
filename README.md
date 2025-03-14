
# Persona: A Room-Based Discussion Platform

Persona is a room-based discussion web application built with Django. Users can create, join, and participate in discussion rooms categorized by topics. It also includes features such as user authentication, profile management, and activity tracking.

## Features

- **Room Management**: 
  - Create, update, and delete rooms.
  - Browse and search rooms by topics or keywords.
  
- **User Authentication**:
  - Register, login, and logout functionality.
  - Password management using Django’s built-in `AbstractUser`.

- **Messaging**:
  - Real-time messaging in rooms.
  - Delete messages (by the message owner).

- **User Profiles**:
  - View and update user profiles, including avatar, username, and bio.

- **Topics & Activity**:
  - Explore trending topics.
  - View the latest activities and messages.


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Project Structure

### Models
- **User**: A custom user model that extends Django’s `AbstractUser`.
- **Room**: Represents discussion rooms.
- **Topic**: Categorizes rooms.
- **Message**: Stores user messages within rooms.

### Views
- CRUD operations for rooms.
- User authentication and profile management.
- Search and filter for rooms, topics, and activities.

### Forms
- **MyUserCreationForm**: Extends Django's `UserCreationForm`.
- **RoomForm**: For creating and updating rooms.
- **UserForm**: For updating user profiles.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


## Installation

### 1. Clone the repository:

 git clone https://github.com/sameer7300/social-network.git
  cd persona

### 2.Set up a virtual environment:

python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate


### 3.Install dependencies:

pip install -r requirements.txt

 
### 4.Run migrations:

python manage.py makemigrations
python manage.py migrate

### 5.Create a superuser:

python manage.py createsuperuser


### 6.Run the development server:

python manage.py runserver

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Usage:

- Homepage: View and search available rooms and trending topics.

- Room Page: Join discussions and send messages.

- User Profile: View and manage your user profile.

- Admin Panel: Manage topics, rooms, and users (superuser access required).

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## File Structure

persona/

├── base/

│   ├── templates/base/     # HTML templates

│   ├── static/             # CSS, JavaScript, images

│   ├── models.py           # Database models

│   ├── views.py            # Application logic

│   ├── forms.py            # Django forms

│   ├── urls.py             # URL routing

├── manage.py               # Django management script

└── requirements.txt        # Dependencies


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


## Contributions are welcome! To contribute:

- Fork the repository.

- Create a feature branch:

- git checkout -b feature-name

- Commit your changes:

- git commit -m "Description of changes"

- Push to your forked repository:

- git push origin feature-name


### Open a pull request.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Feel free to reach out for questions or suggestions at sameergul321@gmail.com.
