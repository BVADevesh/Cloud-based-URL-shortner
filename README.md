# 🔗 Cloud-Agnostic URL Shortener

A fast and scalable URL shortening service built with **Node.js**, **Express**, and **PostgreSQL/MongoDB** support. The application can run locally, on any cloud provider, or on AWS infrastructure using Docker and Terraform.

---

## 🚀 Features

- Shorten any valid long URL
- Generate unique short codes
- Redirect users to original URLs
- REST API support
- Database-backed URL storage
- Dockerized deployment
- Cloud-agnostic architecture
- AWS deployment support using Terraform

---

## 📁 Project Structure

```text
URL_shortener/
├── models/
│   └── Url.js
├── server.js
├── package.json
├── package-lock.json
├── docker-compose.yml
├── .env.example
└── terraform/
```

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- PostgreSQL / MongoDB
- Docker
- Terraform
- AWS EC2 (Optional Cloud Deployment)

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/URL_shortener.git
cd URL_shortener
```

### Install Dependencies

```bash
npm install
```

### Configure Environment

Copy the example environment file:

```bash
cp .env.example .env
```

Update values as required.

---

## ▶️ Run Locally

### Option 1: Direct Execution

Start your database service and run:

```bash
npm start
```

Application will be available at:

```text
http://localhost:3000
```

### Option 2: Docker Deployment

Build and run containers:

```bash
docker-compose up --build -d
```

Access the API:

```text
http://localhost:3000
```

---

## 🔧 API Endpoints

### Create Short URL

**POST** `/shorten`

Request:

```json
{
  "longUrl": "https://example.com"
}
```

Response:

```json
{
  "shortUrl": "http://localhost:3000/abc123"
}
```

---

### Redirect to Original URL

**GET** `/:shortCode`

Example:

```text
http://localhost:3000/abc123
```

Redirects the user to the original URL.

---

## 📦 Example Request

```bash
curl -X POST http://localhost:3000/shorten \
-H "Content-Type: application/json" \
-d '{"longUrl":"https://www.google.com"}'
```

Response:

```json
{
  "shortUrl": "http://localhost:3000/abc123"
}
```

---

## ☁️ AWS Deployment

### Using Terraform

Install Terraform and configure variables inside:

```text
terraform/variables.tf
```

Initialize Terraform:

```bash
terraform init
```

Deploy Infrastructure:

```bash
terraform apply
```

For production environments, consider:

- Amazon ECS/Fargate
- Amazon RDS
- Application Load Balancer
- Route 53

---

## 🧪 Available Scripts

### Start Development Server

```bash
npm start
```

### Run Tests

```bash
npm test
```

### Build Production Version

```bash
npm run build
```

### Eject Configuration

```bash
npm run eject
```

> Note: Ejecting is irreversible.

---

## 🔒 Environment Variables

Example configuration:

```env
PORT=3000
DATABASE_URL=your_database_connection_string
BASE_URL=http://localhost:3000
```

---

## 📈 Future Enhancements

- Custom aliases
- User authentication
- Click analytics
- QR code generation
- URL expiration
- Rate limiting
- Admin dashboard

---

## 👨‍💻 Author

**Bellamkonda V A Devesh**

GitHub: https://github.com/BVADevesh

Project Repository:
https://github.com/BVADevesh/Cloud-based-URL-shortner

---

## ⭐ Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is available for educational and personal use under MIT License
